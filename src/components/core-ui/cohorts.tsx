import PricingCard from '@/components/ui/pricing-card';
import { pricingData } from '@/constants';

const Pricing = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-4 pt-8 sm:px-8">
      <h1 className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]">
        {pricingData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-2xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {pricingData.subHeading}
      </h3>

      <div className="mt-12 mb-12 grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
