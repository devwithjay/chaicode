import Slider from '@/components/ui/slider';
import UdemyCard from '@/components/ui/udemy-card';
import { udemyData } from '@/constants';

const Udemy = () => {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] pt-6 transition-all duration-200 md:px-8 md:pt-14 lg:px-12 2xl:px-0 lg:pt-20">
      <h1 className="mx-auto max-w-4xl px-8 text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {udemyData.heading}
      </h1>
      <h2 className="mx-auto mt-2 max-w-2xl px-8 text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]">
        {udemyData.subHeading}
      </h2>

      <div className="mt-16 mb-12 w-full px-0 md:mt-18">
        <Slider className="" itemClassName="gap-8">
          {udemyData.courses.map((course, index) => (
            <div key={index} className="w-full max-w-[1200px] flex-shrink-0">
              <UdemyCard course={course} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Udemy;
