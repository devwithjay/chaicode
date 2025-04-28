'use client';

import { communityData } from '@/constants';

const Community = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-8 pt-10 md:pt-14 lg:px-14">
      <h1 className="mx-auto max-w-4xl text-center text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[36px] lg:text-[44px]">
        {communityData.heading}
      </h1>
      <h3 className="mx-auto mt-3 max-w-2xl text-center text-[15px] text-[var(--text-secondary)] md:text-[18px]">
        {communityData.subHeading}
      </h3>

      <div className="mt-14 mb-8 flex w-full max-w-7xl flex-col-reverse items-center justify-center gap-12 md:flex-row lg:gap-20">
        <div className="flex max-w-lg flex-col items-start justify-center text-left">
          <h2 className="text-[26px] leading-snug font-extrabold text-[var(--text-brand)] md:text-[32px] lg:text-[38px]">
            {communityData.description}
          </h2>

          {communityData.ctaText && communityData.ctaLink && (
            <a
              href={communityData.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-lg bg-[var(--surface-brand)] px-8 py-3 text-base font-semibold text-white hover:bg-[var(--surface-brand-hover)]"
            >
              {communityData.ctaText}
            </a>
          )}
        </div>

        {communityData.imageUrl && (
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-black/80 shadow-lg dark:bg-white/10">
            <img
              src={communityData.imageUrl}
              alt="Community"
              className="h-auto w-full object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Community;
