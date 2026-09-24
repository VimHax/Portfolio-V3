import { MediaType, type GalleryItem } from "./types";

import BugImg from "./bug.png?img";
import { resolveVideoDataFromTitle } from "~/util";

const GalleryData: readonly GalleryItem[] = [
  {
    title: "Sky shader bug",
    description:
      "During the implementation of the custom night sky for MCProm a mistake in my shader code caused this to be rendered instead.",
    media: { type: MediaType.Image, image: BugImg },
  },
  {
    title: "Portfolio shader",
    description:
      "The shader that was used in the previous iteration of my portfolio website. Experimenting with layering 3D simplex noise lead to this effect.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("portfolio-v2-shader"),
    },
  },
  {
    title: "Pendulum",
    description:
      "A visualization of a pendulum made with P5JS. The pendulum's angle, angular velocity and angular acceleration are plotted on the graphs.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("pendulum"),
    },
  },
  {
    title: "3-body problem",
    description:
      "A visualization of one of the special periodic solutions to the 3-body problem, the figure 8, made with P5JS.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("3-body"),
    },
  },
  {
    title: "Electric field",
    description:
      "A visualization of the electric field formed by 3 charged particles, made with P5JS. The direction and strength of the field is being rendered.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("electric-field"),
    },
  },
  {
    title: "Minecraft clone",
    description:
      "A very basic Minecraft clone written in C++ using OpenGL. Followed the popular Learn OpenGL book to achieve this.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("mc-clone"),
    },
  },
  {
    title: "Sea shader",
    description:
      "Implemented a shader to render a sea for the Nautical Quest event. Clips are from Feinberg's stream of the event.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("sea"),
    },
  },
  {
    title: "Sky shader",
    description:
      "Implemented a shader to render a custom sky for the Game Master event. Clip is from BluSpring's stream of the event.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("bisect-sky"),
    },
  },
  {
    title: "Hover animation",
    description:
      "Implemented a hover animation for the hero text of NotNexus's website. The animation uses layered color blending to achieve this.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("hover"),
    },
  },
  {
    title: "Mandelbrot set",
    description:
      "Created a video of zooming in to the Mandelbrot set using CUDA. The program generated frames which were stitched together with FFmpeg.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("mandelbrot-zoom"),
    },
  },
  {
    title: "Portfolio V2",
    description:
      "Previous iteration of my portfolio website, made with Next.js. Created a custom WebGL shader to make the website more visually interesting.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("portfolio-v2"),
    },
  },
  {
    title: "Portfolio V1",
    description:
      "First iteration of my portfolio website, bootstrapped with Create React App. Uses a lot of parallax to create a sense of depth.",
    media: {
      type: MediaType.Video,
      video: resolveVideoDataFromTitle("portfolio-v1"),
    },
  },
];

export default GalleryData;
