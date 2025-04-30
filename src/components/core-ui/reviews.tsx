'use client';

import { FaArrowRightLong } from 'react-icons/fa6';
import { LuExternalLink } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

import DynamicClientTweetCard from '@/components/ui/dynamic-client-tweet-card';
import { feedbackTweetIds, reviewsData } from '@/constants';

const Reviews = () => {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate('/reviews');
    window.scrollTo(0, 0);
  };

  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 pt-6 md:px-8 md:pt-12 lg:pt-16 2xl:px-0">
      <h1 className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {reviewsData.heading}
      </h1>
      <h2 className="mx-auto mt-2 max-w-xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]">
        {reviewsData.subHeading}
      </h2>
      <div className="relative mt-10 max-h-[860px] w-full max-w-[1440px] overflow-hidden md:mt-18">
        <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4">
          {feedbackTweetIds.map((id) => (
            <div key={id} className="mb-6 break-inside-avoid">
              <DynamicClientTweetCard id={id} />
            </div>
          ))}
        </div>
        <div className="absolute right-0 bottom-0 left-0 flex h-32 items-end justify-center bg-gradient-to-t from-[var(--surface-primary)] to-transparent">
          <button
            onClick={handleShowMore}
            className="mb-4 cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-medium text-black shadow-md"
          >
            Show More <FaArrowRightLong className="ml-1 inline" size={16} />
          </button>
        </div>
      </div>
      <div className="mt-10 mb-6 md:mt-14">
        <a
          href={reviewsData.ctaLink}
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-[var(--text-brand)] px-4 py-3 text-sm font-medium text-white sm:px-6 sm:py-3 sm:text-base"
        >
          {reviewsData.ctaText}
          <LuExternalLink size={20} />
        </a>
      </div>
    </section>
  );
};

export default Reviews;
