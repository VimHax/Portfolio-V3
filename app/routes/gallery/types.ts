import type { Image, Video } from "~/util";

export enum MediaType {
  Image,
  Video,
}

interface ImageMedia {
  readonly type: MediaType.Image;
  readonly image: Image;
}

interface VideoMedia {
  readonly type: MediaType.Video;
  readonly video: Video;
}

type Media = ImageMedia | VideoMedia;

export interface GalleryItem {
  readonly title: string;
  readonly description: string;
  readonly media: Media;
}
