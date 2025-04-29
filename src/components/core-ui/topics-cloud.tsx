'use client';

import { topicsCloudData } from '@/constants';

const TopicsCloud = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-8 pt-6 md:pt-10 lg:px-14 lg:pt-18">
      <h1 className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {topicsCloudData.heading}
      </h1>
      <h3 className="mx-auto mt-2 max-w-xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]">
        {topicsCloudData.subHeading}
      </h3>

      <div className="mt-14 mb-6 flex cursor-pointer flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
        {topicsCloudData.topics.map((topic, index) => (
          <a
            key={index}
            href={topic.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--border-primary)] px-5 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--surface-brand)] hover:text-white md:text-base"
          >
            {topic.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default TopicsCloud;
