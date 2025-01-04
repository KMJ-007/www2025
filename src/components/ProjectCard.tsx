"use client";
import { Project } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import ImageGallery from "./ImageGallery";

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

  return (
    <>
      <div className="group relative border border-neutral-800 bg-neutral-900/50 p-4 transition-all hover:bg-neutral-900 before:pointer-events-none before:absolute before:inset-0 before:bg-[linear-gradient(0deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] before:bg-[length:100%_4px] before:opacity-20 hover:before:opacity-30">
        <div className="sm:flex sm:gap-6">
          {/* Content */}
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-mono text-lg tracking-[0.2em] text-neutral-200 group-hover:text-green-400 transition-colors">
                {project.title}
              </h3>
              <span className="font-mono text-sm text-neutral-500 tracking-wider whitespace-nowrap">{project.formattedDate}</span>
            </div>

            <p className="text-base text-neutral-300 font-mono leading-7 max-w-3xl">{project.headline}</p>
            
            <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-0 sm:max-h-96'}`}>
              <p className="text-sm text-neutral-400 font-mono leading-6 max-w-3xl whitespace-pre-line">{project.description}</p>
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="sm:hidden text-sm text-neutral-500 hover:text-neutral-400 font-mono tracking-wider"
            >
              [{isExpanded ? 'Show Less' : 'Read More'}]
            </button>
            
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-green-500/70 border border-green-900/30 bg-green-900/10 px-2 py-0.5 tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </div>

            {project.links && (
              <div className="flex gap-3">
                {project.links.map((link) => (
                  <Link
                    key={link.title}
                    href={link.url}
                    className="text-sm text-neutral-400 hover:text-green-400 transition-colors font-mono tracking-wider group-hover:animate-pulse"
                  >
                    [{link.title}] →
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Images - shows below on mobile, side on desktop */}
          {project.images.length > 0 && (
            <div className="mt-4 sm:mt-0 sm:w-80 space-y-3">
              {/* Main image */}
              <button
                type="button"
                onClick={() => openGallery(0)}
                className="relative aspect-video w-full overflow-hidden rounded bg-neutral-800 before:absolute before:inset-0 before:z-10 before:bg-[linear-gradient(0deg,transparent_0%,rgba(255,255,255,0.05)_50%,transparent_100%)] before:bg-[length:100%_4px] before:pointer-events-none group-hover:before:animate-scan"
              >
                <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(0,255,0,0.1),transparent_70%)]" />
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-110 group-hover:contrast-110 group-hover:saturate-110"
                />
              </button>

              {/* Thumbnail strip for additional images */}
              {project.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-1">
                  {project.images.slice(1).map((image, index) => (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => openGallery(index + 1)}
                      className="relative h-16 w-24 flex-shrink-0 overflow-hidden rounded-sm bg-neutral-800 hover:ring-1 hover:ring-green-500/50"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Image Gallery Modal */}
      {showGallery && (
        <ImageGallery
          images={project.images}
          onClose={() => setShowGallery(false)}
          initialIndex={initialImageIndex}
        />
      )}
    </>
  );
} 