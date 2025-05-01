'use client';

import React, { useEffect, useState } from 'react';

import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

type Course = {
  title: string;
  description: string;
  rating: string;
  price: number;
  originalPrice: number;
  videoId: string;
  learnMoreText: string;
  learnMoreLink: string;
};

interface UdemyCardProps {
  course: Course;
}

const UdemyCard: React.FC<UdemyCardProps> = ({ course }) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const discount = Math.round(
    ((course.originalPrice - course.price) / course.originalPrice) * 100,
  );

  const ratingValue = parseFloat(course.rating);

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(ratingValue);
    const hasHalfStar = ratingValue % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar
          key={`full-${i}`}
          className="text-xs text-[var(--text-brand)] sm:text-sm"
        />,
      );
    }

    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt
          key="half"
          className="text-xs text-[var(--text-brand)] sm:text-sm"
        />,
      );
    }

    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <FaStar
          key={`empty-${i}`}
          className="text-xs text-gray-400 sm:text-sm"
        />,
      );
    }

    return stars;
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveVideo(null);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      <div className="mx-auto flex w-full flex-col-reverse overflow-hidden rounded-xl bg-[var(--surface-secondary)] sm:max-w-lg xl:max-w-[1200px] xl:flex-row">
        <div className="flex flex-col justify-between p-6 xl:w-1/2">
          <div>
            <h2 className="mb-2 text-xl font-bold text-[var(--text-primary)] sm:text-2xl lg:text-3xl">
              {course.title}
            </h2>
            <p className="mb-4 text-sm text-[var(--text-secondary)] sm:text-base lg:text-lg">
              {course.description}
            </p>

            <div className="mb-4 flex items-center gap-2">
              <div className="text-2xl font-semibold text-[var(--text-primary)] lg:text-4xl">
                {course.rating}
              </div>
              <div className="flex flex-col items-start">
                <div className="flex gap-1">{renderStars()}</div>
                <div className="mt-1 text-xs text-[var(--text-secondary)]">
                  Top Rated
                </div>
              </div>
            </div>

            <div className="mb-6 flex items-center space-x-3">
              <span className="text-xl font-bold text-green-600 dark:text-green-500">
                ₹{course.price}
              </span>
              <span className="text-sm text-[var(--text-secondary)] line-through">
                ₹{course.originalPrice}
              </span>
              <span className="rounded bg-orange-100 px-2 py-1 text-xs text-orange-600">
                {discount}% off
              </span>
            </div>
          </div>

          <a
            href={course.learnMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-auto inline-block w-full rounded bg-[var(--surface-brand)] px-4 py-3 text-center font-semibold text-white hover:bg-[var(--surface-brand-hover)]"
          >
            {course.learnMoreText}
          </a>
        </div>

        <div
          className="video-card relative w-full cursor-pointer bg-black xl:w-1/2"
          onClick={() => setActiveVideo(course.videoId)}
        >
          <style>{`
            .video-card:hover .video-card-hover\\:bg-black\\/20 {
              background-color: rgba(0, 0, 0, 0.2);
            }
            
            .video-card:hover .video-card-hover\\:fill-red-600 {
              fill: #ff0000;
            }
          `}</style>
          <img
            src={`https://img.youtube.com/vi/${course.videoId}/maxresdefault.jpg`}
            alt="Course Thumbnail"
            loading="lazy"
            className="size-full object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://img.youtube.com/vi/${course.videoId}/hqdefault.jpg`;
            }}
          />
          <div className="video-card-hover:bg-black/20 absolute inset-0 flex items-center justify-center bg-black/30 transition-all">
            <svg
              viewBox="0 0 544 384"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="video-card-hover:fill-red-600 w-12 fill-gray-700 transition-all sm:w-14"
            >
              <path d="M533.655 60.083C527.374 36.433 508.882 17.842 485.233 11.561C441.885 -2.86102e-06 272 0 272 0C272 0 102.114 -2.86102e-06 58.767 11.561C35.118 17.842 16.626 36.433 10.345 60.083C-9.53674e-07 103.229 0 192 0 192C0 192 -9.53674e-07 280.771 10.345 323.917C16.626 347.567 35.118 366.158 58.767 372.439C102.114 384 272 384 272 384C272 384 441.885 384 485.233 372.439C508.882 366.158 527.374 347.567 533.655 323.917C544 280.771 544 192 544 192C544 192 544 103.229 533.655 60.083ZM216 272V112L358.857 192L216 272Z" />
              <path
                d="M216.448 113.102L358 192.5L216.448 272L216.448 113.102Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative aspect-video w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
              className="h-full w-full rounded-lg"
            ></iframe>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 rounded bg-black/60 px-3 py-1 text-2xl text-white"
              aria-label="Close video"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default UdemyCard;
