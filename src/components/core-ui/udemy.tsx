import Slider from '@/components/ui/slider';
import UdemyCard from '@/components/ui/udemy-card';
import { udemyData } from '@/constants';

const Udemy = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-4 pt-6 sm:px-8 md:pt-14 lg:pt-20">
      <h1 className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]">
        {udemyData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-2xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {udemyData.subHeading}
      </h3>

      <div className="mt-16 mb-12 w-full md:mt-18">
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
