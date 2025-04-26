import DynamicClientTweetCard from '@/components/ui/dynamic-client-tweet-card';
import { reviewsData, tweetIds } from '@/constants';

const Reviews = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-4 pt-6 sm:px-8 md:pt-10">
      <h1 className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]">
        {reviewsData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {reviewsData.subHeading}
      </h3>
      <div className="mt-10 md:mt-14 w-full">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6">
          {tweetIds.map((id) => (
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