import { BenefitsCard } from '@/components/ui/benefits-card';
import { benefitsData } from '@/constants';

const Benefits = () => {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 pt-6 transition-all duration-200 md:px-8 md:pt-14 lg:px-12 2xl:px-0">
      <h1 className="mx-auto max-w-4xl text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {benefitsData.heading}
      </h1>

      <h2 className="mx-auto mt-2 max-w-xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]">
        {benefitsData.subHeading}
      </h2>

      <div className="mt-8 transition-all duration-200 md:mt-10 lg:mt-16">
        <BenefitsCard {...benefitsData} />
      </div>
    </section>
  );
};

export default Benefits;
