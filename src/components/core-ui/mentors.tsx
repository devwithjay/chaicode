'use client';

import { Carousel } from '@/components/ui/carousel';
import { MentorCard } from '@/components/ui/mentor-card';
import { mentorsData } from '@/constants';

const Mentors = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-6 pt-12 md:px-8 md:pt-16 lg:px-14 lg:pt-20">
      <h1 className="mx-auto max-w-4xl text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {mentorsData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-2xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {mentorsData.subHeading}
      </h3>
      <div className="mt-14 mb-8 w-full overflow-hidden rounded-2xl bg-[var(--surface-primary)]">
        <Carousel
          itemClassName="gap-4"
          className="size-full rounded-2xl py-6 backdrop-blur-sm"
        >
          {mentorsData.mentor.map((mentor) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              description={mentor.description || ''}
              workingAt={mentor.workingAt}
              image={mentor.image}
            />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Mentors;
