import ClientTweetCard from '@/components/ui/client-tweet-card';
import Marquee from '@/components/ui/marquee';
import { testimonialsData, tweetLoveIds } from '@/constants';

const Testimonials = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] pt-12 transition-all duration-200 md:pt-16 lg:pt-24">
      <h1 className="mx-auto max-w-4xl text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {testimonialsData.heading}
      </h1>
      <h2 className="mx-auto mt-2 max-w-2xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]">
        {testimonialsData.subHeading}
      </h2>
      <section className="relative mt-6 flex w-full flex-grow flex-col gap-4 overflow-hidden rounded-2xl border-none transition-all duration-300 md:mt-12 lg:mt-18">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
          <Marquee pauseOnHover className="gap-2 p-8 [--duration:100s]">
            {tweetLoveIds.map((id) => (
              <ClientTweetCard key={id} id={id} />
            ))}
          </Marquee>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
