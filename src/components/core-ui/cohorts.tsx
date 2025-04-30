import PricingCard from '@/components/ui/pricing-card';
import { pricingData } from '@/constants';

const Pricing = () => {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-8 pt-8 md:pt-12 lg:pt-16 2xl:px-0">
      <h1 className="] mx-auto max-w-4xl text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {pricingData.heading}
      </h1>
      <h2 className="mx-auto mt-2 max-w-2xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]">
        {pricingData.subHeading}
      </h2>

      <div className="mt-12 lg:mt-16 mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
        {pricingData.courses.map((course, index) => (
          <div key={index} className="w-full">
            <PricingCard
              title={course.title}
              description={course.description}
              startDate={course.startDate}
              duration={course.duration}
              price={course.price}
              originalPrice={course.originalPrice}
              videoId={course.videoId}
              learnMoreText={course.learnMoreText}
              learnMoreLink={course.learnMoreLink}
              ariaLabel={`Learn more about ${course.title} course`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
