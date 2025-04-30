'use client';

import { topicsCloudData } from '@/constants';

const TopicsCloud = () => {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 pt-6 transition-all duration-200 md:px-8 md:pt-10 lg:pt-18 2xl:px-0">
      <h1 className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]">
        {topicsCloudData.heading}
      </h1>
      <h2 className="mx-auto mt-2 max-w-xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]">
        {topicsCloudData.subHeading}
      </h2>

      <div className="mt-18 mb-6 flex cursor-pointer flex-wrap justify-center gap-4 transition-all duration-200 md:gap-6 lg:gap-8">
        {topicsCloudData.topics.map((topic, index) => (
          <a
            key={index}
            href={topic.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-[var(--border-primary)] px-5 py-2 text-sm text-[var(--text-primary)] transition-all duration-200 hover:bg-[var(--surface-brand)] hover:brightness-110 hover:text-white md:text-base"
          >
            {topic.title}
          </a>
        ))}
      </div>
    </section>
  );
};

export default TopicsCloud;
