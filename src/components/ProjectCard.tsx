"use client";
import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "./ImageGallery";

const YouTubeEmbed = ({ videoId }: { videoId: string }) => (
  <div className="relative w-full h-full">
    <iframe
      title="YouTube video player"
      src={`https://www.youtube.com/embed/${videoId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="absolute inset-0 w-full h-full rounded-lg"
    />
  </div>
);

interface ProjectCardProps {
  project: Project & { formattedDate: string };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);

  const openGallery = (index: number) => {
    setInitialImageIndex(index);
    setShowGallery(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setShowGallery(false);
    }
  };

  return (
    <>
      <div className="group relative bg-neutral-900/30 p-3 sm:p-6 transition-all hover:bg-neutral-900/50 rounded-lg w-full">
        <div className="sm:flex sm:gap-8">
          <div className="flex-1 space-y-3 sm:space-y-5">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <h3 className="font-mono text-base sm:text-lg tracking-[0.2em] text-neutral-200 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <span className="font-mono text-xs sm:text-sm text-neutral-500 tracking-wider whitespace-nowrap">
                {project.formattedDate}
              </span>
            </div>

            <p className="text-sm sm:text-base text-neutral-300 font-mono leading-6 sm:leading-7 max-w-3xl">
              {project.headline}
            </p>
            
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0 sm:max-h-96'}`}>
              <p className="text-xs sm:text-sm text-neutral-400 font-mono leading-5 sm:leading-6 max-w-3xl whitespace-pre-line">
                {project.description}
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="sm:hidden text-sm text-neutral-500 hover:text-neutral-400 font-mono tracking-wider"
            >
              [{isExpanded ? 'Show Less' : 'Read More'}]
            </button>
            
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] sm:text-xs text-green-500/70 bg-green-900/20 px-3 sm:px-3 py-0.5 sm:py-1 rounded-full tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.links && (
              <div className="flex gap-3 sm:gap-4">
                {project.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-xs sm:text-sm text-neutral-400 hover:text-green-400 transition-colors font-mono tracking-wider group-hover:animate-pulse"
                  >
                    [{link.title}] →
                  </Link>
                ))}
              </div>
            )}
          </div>

          {project.images.length > 0 && (
            <div className="mt-3 sm:mt-0 sm:w-80">
              <button
                type="button"
                onClick={() => openGallery(0)}
                className="relative aspect-video w-full overflow-hidden rounded-lg bg-neutral-800/50 hover:bg-neutral-800/70 transition-colors"
              >
                {project.images[0].type === 'youtube' && project.images[0].videoId ? (
                  <YouTubeEmbed videoId={project.images[0].videoId} />
                ) : (
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                  />
                )}
              </button>

              {project.images.length > 1 && (
                <div className="mt-2 sm:mt-3 flex gap-2 sm:gap-3 overflow-x-auto pb-1">
                  {project.images.slice(1).map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => openGallery(index + 1)}
                      className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-neutral-800/50 hover:bg-neutral-800/70 transition-colors"
                    >
                      {image.type === 'youtube' ? (
                        <Image
                          src={`https://img.youtube.com/vi/${image.videoId}/0.jpg`}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {showGallery && project.images.length > 1 && (
        <ImageGallery
          images={project.images}
          onClose={() => setShowGallery(false)}
          initialIndex={initialImageIndex}
        />
      )}

      {showGallery && project.images.length === 1 && (
        <div 
          role="button"
          tabIndex={0}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setShowGallery(false)}
          onKeyDown={handleKeyDown}
        >
          <div 
            role="button"
            tabIndex={0}
            className="relative w-full h-full flex items-center justify-center"
            onClick={e => e.stopPropagation()}
            onKeyDown={handleKeyDown}
          >
            <button
              type="button"
              onClick={() => setShowGallery(false)}
              className="absolute right-0 top-0 z-10 text-white/70 hover:text-white font-mono p-4"
            >
              [ESC]
            </button>
            <div className="relative max-h-[85vh] max-w-[85vw] w-auto h-auto">
              <Image
                src={project.images[0].src}
                alt={project.images[0].alt}
                width={1920}
                height={1080}
                className="object-contain max-h-[85vh] w-auto h-auto"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 