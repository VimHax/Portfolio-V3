import Mux from "@mux/mux-node";
import path from "node:path";
import fs from "node:fs/promises";

const mux = new Mux({
  tokenId: process.env.MUX_TOKEN_ID,
  tokenSecret: process.env.MUX_TOKEN_SECRET,
});

interface Video {
  readonly id: string;
  readonly audio: boolean;
  readonly width: number;
  readonly height: number;
}

interface Resolution {
  readonly width: number;
  readonly height: number;
}

const resolutionExceptions: Record<string, Resolution> = {
  portal: { width: 1920, height: 800 },
};

const localTitles = new Set<string>();
for (const filename of await fs.readdir("./public/video")) {
  console.log("Local:", filename);
  const title = path.parse(filename).name;
  if (localTitles.has(title)) throw new Error("Duplicate title (local)!");
  localTitles.add(title);
}

const videos: Record<string, Video> = {};

for await (const video of mux.video.assets.list()) {
  console.log(video);

  if (
    video.playback_ids === undefined ||
    video.playback_ids.length !== 1 ||
    video.playback_ids[0].policy !== "public"
  )
    throw new Error("No ID!");

  // validate title
  if (video.meta === undefined) throw new Error("No meta!");
  const title = video.meta.title;
  if (title === undefined) throw new Error("No title!");
  if (title in videos) throw new Error("Duplicate title!");

  // validate tracks
  if (video.tracks?.length !== 1 && video.tracks?.length !== 2)
    throw new Error("Invalid tracks!");

  const videoTrack = video.tracks.find((x) => x.type === "video");
  if (videoTrack === undefined) throw new Error("No video track!");

  const hasAudio = video.tracks.some((x) => x.type === "audio");
  if (video.tracks.length === 2 && !hasAudio)
    throw new Error("No audio track!");

  // validate resolution
  if (title in resolutionExceptions) {
    const resolution = resolutionExceptions[title];
    if (
      videoTrack.max_width !== resolution.width ||
      videoTrack.max_height !== resolution.height
    )
      throw new Error("Invalid resolution!");
  } else {
    if (videoTrack.max_width !== 1920 || videoTrack.max_height !== 1080)
      throw new Error("Not 1080p!");
  }

  // validate FPS
  if (videoTrack.max_frame_rate !== 30) throw new Error("Not 30FPS!");

  // insert video
  videos[title] = {
    id: video.playback_ids[0].id,
    audio: hasAudio,
    width: videoTrack.max_width,
    height: videoTrack.max_height,
  };
}

const remoteTitles = new Set(Object.keys(videos));
if (localTitles.size !== remoteTitles.size) {
  console.log(localTitles);
  console.log(remoteTitles);
  throw new Error("Titles have different sizes!");
}

for (const title of localTitles) {
  if (!remoteTitles.has(title)) {
    console.log(title);
    throw new Error("Missing local title from remote!");
  }
}

// write JSON
await fs.writeFile("./app/videos.json", JSON.stringify(videos));
