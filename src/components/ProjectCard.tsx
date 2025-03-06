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

const VideoPlayer = ({ src }: { src: string }) => (
  <video 
    controls
    className="w-full h-full object-cover"
    playsInline
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

interface ProjectCardProps {
  project: Project & { formattedDate: string };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [showGallery, setShowGallery] = useState(false);
  const [initialImageIndex, setInitialImageIndex] = useState(0);
  const [showDescription, setShowDescription] = useState(false);

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
      <div className="group relative overflow-hidden bg-[#1a1a2e]/80 p-4 sm:p-5 transition-all hover:bg-[#1a1a2e] rounded-lg w-full h-full flex flex-col border border-[#4e1c5d]/20 backdrop-blur-sm before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#4e1c5d]/5 before:to-[#9c27b0]/5 before:opacity-0 before:transition-opacity hover:before:opacity-100">
        <div className="flex flex-col h-full relative">
          <div className="flex items-start justify-between gap-3 relative">
            <h3 className="font-mono text-base tracking-[0.1em] text-[#d4bbf9] group-hover:text-[#b341e9] transition-all duration-300 relative before:absolute before:h-[1px] before:w-0 group-hover:before:w-full before:bottom-0 before:left-0 before:bg-[#b341e9] before:transition-all before:duration-300">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-[#6c4d83] tracking-wider whitespace-nowrap group-hover:text-[#9c27b0] transition-colors">
              {project.formattedDate}
            </span>
          </div>

          <div className="mt-4 space-y-4 flex-1">
            <p className="text-sm text-[#b8a1d9] font-mono leading-6 relative">
              {project.headline}
            </p>
            
            {showDescription && (
              <div className="relative">
                <div className="overflow-hidden transition-all duration-300">
                  <p className="text-xs text-[#9785b3] font-mono leading-5 whitespace-pre-line">
                    {project.description}
                  </p>
                </div>
              </div>
            )}

            {project.description && (
              <button
                type="button"
                onClick={() => setShowDescription(!showDescription)}
                className="text-xs text-[#6c4d83] hover:text-[#b341e9] font-mono tracking-wider transition-colors"
              >
                [{showDescription ? 'Show Less' : 'Read More'}]
              </button>
            )}

            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] text-[#a5ff9e] bg-[#2d1f3d] px-2 py-0.5 rounded-full tracking-wider border border-[#4e1c5d]/30 shadow-[0_0_10px_rgba(163,71,255,0.1)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            {project.links && (
              <div className="flex gap-3 flex-wrap">
                {project.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-xs text-[#9785b3] hover:text-[#b341e9] transition-colors font-mono tracking-wider relative before:absolute before:h-[1px] before:w-0 hover:before:w-full before:bottom-0 before:left-0 before:bg-[#b341e9] before:transition-all before:duration-300"
                  >
                    [{link.title}] →
                  </Link>
                ))}
              </div>
            )}
          </div>

          {project.images.length > 0 && (
            <div className="mt-4 space-y-2">
              <button
                type="button"
                onClick={() => openGallery(0)}
                className="relative aspect-video w-full overflow-hidden rounded-lg bg-[#1a1a2e] hover:bg-[#2d1f3d] transition-all duration-300 border border-[#4e1c5d]/30 shadow-[0_0_20px_rgba(163,71,255,0.15)]"
              >
                {project.images[0].type === 'youtube' && project.images[0].videoId ? (
                  <YouTubeEmbed videoId={project.images[0].videoId} />
                ) : project.images[0].type === 'video' ? (
                  <VideoPlayer src={project.images[0].src} />
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
                <div className="flex gap-1 overflow-x-auto">
                  {project.images.slice(1).map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => openGallery(index + 1)}
                      className="relative h-12 w-16 flex-shrink-0 overflow-hidden rounded bg-[#1a1a2e] hover:bg-[#2d1f3d] transition-all duration-300 border border-[#4e1c5d]/30"
                    >
                      {image.type === 'youtube' ? (
                        <Image
                          src={`https://img.youtube.com/vi/${image.videoId}/0.jpg`}
                          alt={image.alt}
                          fill
                          className="object-cover"
                        />
                      ) : image.type === 'video' ? (
                        <div className="w-full h-full flex items-center justify-center bg-[#1a1a2e]">
                          <span className="text-xs text-[#9785b3]">Video</span>
                        </div>
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a2e]/95 backdrop-blur-sm p-4"
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
              className="absolute right-0 top-0 z-10 text-[#b341e9]/70 hover:text-[#b341e9] font-mono p-4 transition-colors"
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