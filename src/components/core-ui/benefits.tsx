import { BenefitsCard } from '@/components/ui/benefits-card';
import { benefitsData } from '@/constants';

const Benefits = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-4 pt-6 sm:px-8 md:pt-12">
      <h1 className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]">
        {benefitsData.heading}
      </h1>

      <h3 className="mx-auto mt-2 max-w-xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {benefitsData.subHeading}
      </h3>

      <div className='mt-8 md:mt-10 lg:mt-12'>
      <BenefitsCard {...benefitsData} /></div>
    </section>
  );
};

export default Benefits;
