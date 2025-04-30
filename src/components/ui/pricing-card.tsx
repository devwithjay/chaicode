import { useState } from 'react';

import { FaCalendarAlt, FaClock } from 'react-icons/fa';

interface PricingCardProps {
  title: string;
  description: string;
  startDate: string;
  duration: string;
  price: number;
  originalPrice: number;
  videoId: string;
  learnMoreText: string;
  learnMoreLink: string;
  ariaLabel: string;
}

const PricingCard = ({
  title,
  description,
  startDate,
  duration,
  price,
  originalPrice,
  videoId,
  learnMoreText,
  learnMoreLink,
  ariaLabel,
}: PricingCardProps) => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const savingsPercentage = Math.round(
    ((originalPrice - price) / originalPrice) * 100,
  );

  return (
    <div className="flex size-full max-w-[1440px] flex-col overflow-hidden rounded-lg bg-[var(--surface-secondary)] shadow-lg">
      <div className="group relative">
        <img
          src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
          alt="YouTube Video Thumbnail"
          className="aspect-video w-full object-cover"
        />
        <div
          className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/30 group-hover:bg-black/20"
          onClick={() => setActiveVideo(videoId)}
        >
          <svg
            viewBox="0 0 544 384"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 fill-gray-700 group-hover:fill-red-600"
          >
            <path d="M533.655 60.083C527.374 36.433 508.882 17.842 485.233 11.561C441.885 -2.86102e-06 272 0 272 0C272 0 102.114 -2.86102e-06 58.767 11.561C35.118 17.842 16.626 36.433 10.345 60.083C-9.53674e-07 103.229 0 192 0 192C0 192 -9.53674e-07 280.771 10.345 323.917C16.626 347.567 35.118 366.158 58.767 372.439C102.114 384 272 384 272 384C272 384 441.885 384 485.233 372.439C508.882 366.158 527.374 347.567 533.655 323.917C544 280.771 544 192 544 192C544 192 544 103.229 533.655 60.083ZM216 272V112L358.857 192L216 272Z" />
            <path
              d="M216.448 113.102L358 192.5L216.448 272L216.448 113.102Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)] md:text-xl">
          {title}
        </h3>

        <p className="mb-4 flex-grow text-xs text-[var(--text-secondary)] md:text-sm">
          {description}
        </p>

        <div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-300">
          <FaCalendarAlt className="mr-2 text-[var(--text-brand)]" />
          <span>Starts {startDate}</span>
        </div>
        <div className="mb-4 flex items-center text-sm text-gray-500 dark:text-gray-300">
          <FaClock className="mr-2 text-[var(--text-brand)]" />
          <span>Duration: {duration}</span>
        </div>

        <div className="mb-4 flex items-center">
          <span className="text-[18px] font-bold text-green-600 md:text-[19px] dark:text-green-500">
            ₹ {price} INR
          </span>
          <span className="ml-2 text-[12px] text-gray-500 line-through md:text-[13px] dark:text-gray-400">
            ₹ {originalPrice} INR
          </span>
          <span className="ml-2 rounded-md bg-orange-100 px-2 py-1 text-xs font-medium whitespace-nowrap text-orange-600">
            Save {savingsPercentage}%
          </span>
        </div>
      </div>

      <a
        href={learnMoreLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel || `Learn more about ${title}`}
      >
        <button className="w-full cursor-pointer rounded-b-md bg-[var(--surface-brand)] py-2 text-white hover:bg-[var(--surface-brand-hover)]">
          {learnMoreText}
        </button>
      </a>

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
    </div>
  );
};

export default PricingCard;
