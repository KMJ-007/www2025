"use client";

import { useState, useCallback, useEffect, TouchEvent } from "react";
import Image from "next/image";

const YouTubeEmbed = ({ videoId }: { videoId: string }) => (
  <div className="relative w-full h-full">
    <iframe
      title="YouTube video player"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="w-full h-full"
      style={{ aspectRatio: '16/9' }}
    />
  </div>
);

const VideoPlayer = ({ src }: { src: string }) => (
  <video 
    controls
    className="w-full h-full"
    playsInline
    autoPlay
  >
    <source src={src} type="video/mp4" />
    <track 
      kind="captions"
      src=""
      label="English"
      srcLang="en"
      default
    />
    Your browser does not support the video tag.
  </video>
);

interface ImageGalleryProps {
  images: {
    src: string;
    alt: string;
    type?: 'image' | 'youtube' | 'video';
    videoId?: string;
  }[];
  onClose: () => void;
  initialIndex?: number;
}

export default function ImageGallery({ images, onClose, initialIndex = 0 }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const onTouchStart = (e: TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleNext, handlePrev, onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm" 
      onClick={onClose}
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
      role="button"
      tabIndex={0}
    >
      <div 
        className="relative w-full h-full sm:h-auto sm:max-w-5xl p-4" 
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        role="button"
        tabIndex={0}
      >
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 sm:right-6 top-4 sm:top-6 z-10 text-white/70 hover:text-white font-mono"
        >
          [ESC]
        </button>

        {/* Navigation info */}
        <div className="absolute left-4 sm:left-6 top-4 sm:top-6 z-10 font-mono text-sm text-white/70">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Main image/video */}
        <div 
          className="relative h-[calc(100vh-8rem)] sm:h-auto sm:aspect-video w-full overflow-hidden rounded-sm"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images[currentIndex].type === 'youtube' && images[currentIndex].videoId ? (
            <YouTubeEmbed videoId={images[currentIndex].videoId} />
          ) : images[currentIndex].type === 'video' ? (
            <VideoPlayer src={images[currentIndex].src} />
          ) : (
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          )}
          
          {/* Touch swipe indicator */}
          {touchStart && touchEnd && Math.abs(touchStart - touchEnd) > 20 && (
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-transparent pointer-events-none" 
                 style={{
                   opacity: Math.min(Math.abs(touchStart - touchEnd) / 200, 0.3),
                   transform: `scaleX(${touchStart > touchEnd ? 1 : -1})`
                 }} 
            />
          )}
        </div>

        {/* Navigation buttons - hidden on mobile */}
        {images.length > 1 && (
          <div className="hidden sm:block">
            <button
              type="button"
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-white/70 hover:text-white px-4 py-2"
            >
              [←]
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-white/70 hover:text-white px-4 py-2"
            >
              [→]
            </button>
          </div>
        )}

        {/* Thumbnails - scrollable on mobile */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-0 right-0">
            <div className="flex justify-center gap-2 px-4 overflow-x-auto pb-2 snap-x">
              {images.map((image, index) => (
                <button
                  type="button"
                  key={image.src}
                  onClick={() => setCurrentIndex(index)}
                  className={`relative h-14 sm:h-16 w-20 sm:w-24 flex-shrink-0 overflow-hidden rounded-sm transition-all snap-center ${
                    index === currentIndex
                      ? "ring-2 ring-green-500 ring-offset-2 ring-offset-black"
                      : "opacity-50 hover:opacity-75"
                  }`}
                >
                  {image.type === 'youtube' && image.videoId ? (
                    <Image
                      src={`https://img.youtube.com/vi/${image.videoId}/0.jpg`}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  ) : image.type === 'video' ? (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                      <span className="text-xs text-neutral-400">Video</span>
                    </div>
                  ) : (
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 