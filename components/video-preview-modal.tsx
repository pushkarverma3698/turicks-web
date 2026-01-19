"use client";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useEffect, useState } from "react";

interface VideoPreviewModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoUrl?: string;
  title?: string;
}

export function VideoPreviewModal({ 
  open, 
  onOpenChange, 
  videoUrl,
  title = "Product Preview"
}: VideoPreviewModalProps) {
  const [videoId, setVideoId] = useState<string | null>(null);

  useEffect(() => {
    if (videoUrl && videoUrl.includes("youtube.com/watch")) {
      const urlParams = new URLSearchParams(new URL(videoUrl).search);
      setVideoId(urlParams.get("v"));
    } else if (videoUrl && videoUrl.includes("youtu.be/")) {
      setVideoId(videoUrl.split("youtu.be/")[1]?.split("?")[0] || null);
    } else if (videoUrl && videoUrl.includes("vimeo.com/")) {
      setVideoId(videoUrl.split("vimeo.com/")[1]?.split("?")[0] || null);
    } else {
      setVideoId(null);
    }
  }, [videoUrl]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0">
        <DialogHeader className="px-6 pt-6">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Watch a demo of this product in action
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6">
          {videoId ? (
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
              {videoUrl?.includes("vimeo.com") ? (
                <iframe
                  src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          ) : videoUrl ? (
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted flex items-center justify-center">
              <video 
                src={videoUrl} 
                controls 
                className="w-full h-full"
                autoPlay
              />
            </div>
          ) : (
            <div className="aspect-video w-full rounded-lg bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Video URL not provided</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
