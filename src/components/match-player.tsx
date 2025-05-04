/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useRef } from "react";
import { Maximize, Minimize } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MatchPlayer({ match }: { match: any }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    const container = containerRef.current;
    if (!container) return;

    if (!isFullscreen) {
      if (container.requestFullscreen) {
        container.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }

    setIsFullscreen(!isFullscreen);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-lg bg-black"
    >
      <iframe
        src={
          match?.matchLink || "https://topembed.pw/channel/SkySportsCricket[UK]"
        }
        className="w-full aspect-video"
        allow="autoplay; encrypted-media"
        allowFullScreen
      />

      <div className="absolute top-0 right-0 p-4">
        <Button
          size="icon"
          variant="ghost"
          onClick={toggleFullscreen}
          className="text-white hover:bg-white/20"
        >
          {isFullscreen ? (
            <Minimize className="h-5 w-5" />
          ) : (
            <Maximize className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
}
