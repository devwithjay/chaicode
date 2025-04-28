'use client';

import { useState } from 'react';

import { freeApiData } from '@/constants';

const FreeAPI = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const extractVideoId = (url: string) => {
    const regex = /(?:v=|\/)([0-9A-Za-z_-]{11}).*/;
    const match = url.match(regex);
    return match ? match[1] : '';
  };

  const videoId = extractVideoId(freeApiData.videoLink);

  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-8 pt-10 md:pt-16 lg:px-14">
      <h1 className="mx-auto max-w-5xl text-center text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[36px] lg:text-[44px]">
        {freeApiData.heading}
      </h1>
      <h3 className="mx-auto mt-4 max-w-2xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {freeApiData.subHeading}
      </h3>

      <div className="mt-14 flex w-full max-w-7xl flex-col-reverse items-center gap-10 md:flex-row md:justify-between md:gap-8">
        <div className="flex w-full flex-col items-start md:w-1/2">
          <div className="flex flex-col gap-4 text-[var(--text-primary)] sm:px-2 md:px-0">
            {freeApiData.descriptionPoints.map((point, idx) => (
              <p key={idx} className="text-sm md:text-base lg:text-lg">
                {point}
              </p>
            ))}
          </div>

          {freeApiData.ctaText && freeApiData.ctaLink && (
            <div className="mt-8 flex w-full justify-center md:justify-start">
              <a
                href={freeApiData.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-[var(--surface-brand)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--surface-brand-hover)] md:text-base"
              >
                {freeApiData.ctaText}
              </a>
            </div>
          )}
        </div>

        {videoId && (
          <div
            key={videoId}
            className="video-card relative w-full max-w-[500px] cursor-pointer overflow-hidden rounded-2xl shadow-md transition-transform hover:scale-101 md:w-1/2"
            onClick={() => setActiveVideo(videoId)}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt="FreeAPI YouTube Video Thumbnail"
              className="aspect-video w-full object-cover"
            />
            <div className="video-card-hover:bg-black/20 absolute inset-0 flex items-center justify-center bg-black/30">
              <svg
                viewBox="0 0 544 384"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="video-card-hover:fill-[#ff0000] w-14 fill-gray-700 "
              >
                <path d="M533.655 60.083C527.374 36.433 508.882 17.842 485.233 11.561C441.885 -2.86102e-06 272 0 272 0C272 0 102.114 -2.86102e-06 58.767 11.561C35.118 17.842 16.626 36.433 10.345 60.083C-9.53674e-07 103.229 0 192 0 192C0 192 -9.53674e-07 280.771 10.345 323.917C16.626 347.567 35.118 366.158 58.767 372.439C102.114 384 272 384 272 384C272 384 441.885 384 485.233 372.439C508.882 366.158 527.374 347.567 533.655 323.917C544 280.771 544 192 544 192C544 192 544 103.229 533.655 60.083ZM216 272V112L358.857 192L216 272Z" />
                <path
                  d="M216.448 113.102L358 192.5L216.448 272L216.448 113.102Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        )}
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
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
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <style>{`
        .video-card:hover .video-card-hover\\:bg-black\\/20 {
          background-color: rgba(0, 0, 0, 0.2);
        }
        .video-card:hover .video-card-hover\\:fill-$begin:math:display$\\\\#ff0000\\$end:math:display$ {
          fill: #ff0000;
        }
      `}</style>
    </section>
  );
};

export default FreeAPI;
