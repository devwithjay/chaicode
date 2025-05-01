'use client';

import DynamicClientTweetCard from '@/components/ui/dynamic-client-tweet-card';
import { feedbackTweetIds, reviewsData } from '@/constants';

const Reviews = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-8 pt-8 transition-all duration-200 md:pt-14 lg:px-14">
      <h1 className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]">
        {reviewsData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {reviewsData.subHeading}
      </h3>

      <div className="mt-10 w-full md:mt-14">
        <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4">
          {feedbackTweetIds.map((id) => (
            <div key={id} className="mb-6 break-inside-avoid">
              <DynamicClientTweetCard id={id} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
