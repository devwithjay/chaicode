'use client';

import { Carousel } from '@/components/ui/carousel';
import { MentorCard } from '@/components/ui/mentor-card';
import { mentorsData } from '@/constants';

const Mentors = () => {
  return (
    <section className="grid w-full grid-cols-1 gap-4 bg-[var(--surface-primary)] pl-6 md:grid-cols-4 md:pl-14">
      <div className="col-span-1 flex flex-col gap-4 rounded-2xl border bg-[var(--surface-secondary)] p-6">
        <h3 className="text-2xl font-bold tracking-tight text-[var(--text-primary)] lg:text-3xl">
          Meet our Experts
        </h3>
        <p className="text-[var(--text-primary)]">
          Each of the expert are super talented and passionate about teaching
          and helping the next generation of developers.
        </p>
      </div>

      <div className="col-span-1 w-full overflow-hidden rounded-2xl bg-[var(--surface-secondary)] md:col-span-3">
        <Carousel
          itemClassName="gap-4"
          className="h-full w-full rounded-2xl border px-4 py-6 backdrop-blur-sm transition-all duration-300"
        >
          {mentorsData.map((mentor) => (
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
