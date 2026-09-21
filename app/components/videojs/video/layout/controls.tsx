import { Controls, Time, Tooltip } from "@videojs/react";
import type { ComponentProps } from "react";

import { ButtonTooltip } from "~/components/videojs/ui/button-tooltip";
import { FullscreenButton } from "~/components/videojs/ui/fullscreen-button";
import { PlayButton } from "~/components/videojs/ui/play-button";
import { TimeSlider } from "~/components/videojs/ui/time-slider";
import { VolumePopover } from "~/components/videojs/ui/volume-popover";
import { cn } from "~/lib/utils";

import { VideoSettingsMenu } from "../menus/settings-menu";

export interface DefaultVideoControlsProps {
  renderThumbnail?: NonNullable<
    ComponentProps<typeof TimeSlider>
  >["renderThumbnail"];
  hasAudio: boolean;
}

export function DefaultVideoControls({
  renderThumbnail,
  hasAudio,
}: DefaultVideoControlsProps) {
  return (
    <Controls.Root>
      <Controls.Backdrop className={"video-controls-backdrop"} />
      <Controls.Content
        className={cn("video-controls", "video-controls-content")}
      >
        <Tooltip.Provider>
          <Controls.Group className={"video-controls-primary"}>
            <ButtonTooltip side="top">
              <PlayButton />
            </ButtonTooltip>
            {hasAudio && (
              <VolumePopover className={"video-controls-volume-button"} />
            )}

            <Controls.Group className={"video-time-slider-group"}>
              <Time.Value
                className={cn("media-time-value", "video-time-value")}
                type="current"
              />
              <TimeSlider renderThumbnail={renderThumbnail} />
              <Time.Value
                className={cn("media-time-toggle", "video-time-value")}
                type="remaining"
                toggle
              />
            </Controls.Group>

            <VideoSettingsMenu className={"video-controls-settings-button"} />
          </Controls.Group>

          <Controls.Group className={"video-controls-secondary"}>
            <ButtonTooltip side="top">
              <FullscreenButton />
            </ButtonTooltip>
          </Controls.Group>
        </Tooltip.Provider>
      </Controls.Content>
    </Controls.Root>
  );
}
