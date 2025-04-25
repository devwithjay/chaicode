import ClientTweetCard from '@/components/ui/client-tweet-card';
import Marquee from '@/components/ui/marquee';
import { testimonialsData, tweetIds } from '@/constants';

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] pt-12 md:pt-16 lg:pt-20">
      <h1 className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]">
        {testimonialsData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-4xl text-[14px] leading-tight font-medium text-[var(--text-secondary)] md:text-[18px] lg:text-[22px]">
        {testimonialsData.subHeading}
      </h3>
      <section className="relative mt-6 md:mt-12 lg:mt-18 flex w-full flex-grow flex-col gap-4 overflow-hidden rounded-2xl border-none transition-all duration-300">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
          <Marquee pauseOnHover className="gap-2 p-8 [--duration:100s]">
            {tweetIds.map((id) => (
              <ClientTweetCard key={id} id={id} />
            ))}
          </Marquee>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
