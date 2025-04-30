'use client';

import { communityData } from '@/constants';

const Community = () => {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-8 pt-10 transition-all duration-200 md:pt-14 lg:pt-20 2xl:px-0">
      <h1 className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[36px] lg:text-[44px]">
        {communityData.heading}
      </h1>
      <h2 className="mx-auto mt-3 max-w-2xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]">
        {communityData.subHeading}
      </h2>

      <div className="mt-14 mb-8 flex w-full flex-col-reverse items-center justify-center gap-12 md:flex-row lg:gap-20">
        <div className="flex max-w-lg flex-col items-center justify-center text-center md:items-start md:text-left">
          <h2 className="text-[26px] leading-snug font-extrabold text-[var(--text-primary)] md:text-[32px] lg:text-[38px]">
            {communityData.description}
          </h2>

          {communityData.ctaText && communityData.ctaLink && (
            <a
              href={communityData.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 rounded-lg bg-[var(--surface-brand)] px-6 py-2 text-sm font-medium text-white hover:bg-[var(--surface-brand-hover)] md:px-8 md:py-3 md:text-base"
            >
              {communityData.ctaText}
            </a>
          )}
        </div>

        {communityData.imageUrl && (
          <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-black/80 shadow-lg hover:bg-black/90 dark:bg-white/10 dark:hover:bg-white/15">
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
