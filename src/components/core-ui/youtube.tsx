'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';
import { FaYoutube } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

import { ytData } from '@/constants';

const easing = [0.6, 0.05, 0.01, 0.99];

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const leftImageVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easing, delay: 0.2 },
  },
};

const rightCardsVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay: 0.3 },
  },
};

const YouTube = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      className="mx-auto w-full max-w-[1440px] px-6 pt-14 md:px-8 md:pt-20 lg:px-12 lg:pt-24 2xl:px-0"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-center text-[22px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[36px] lg:text-[48px]"
      >
        {ytData.heading}
      </motion.h1>

      <motion.h2
        variants={headingVariants}
        className="mx-auto mt-2 max-w-2xl text-center text-[14px] text-[var(--text-secondary)] sm:mt-3 sm:text-[16px] md:mt-4 md:text-[18px] lg:text-[20px]"
      >
        {ytData.subHeading}
      </motion.h2>

      <div className="mt-8 flex w-full flex-col gap-6 sm:mt-10 md:mt-12 md:flex-row md:gap-8 lg:mt-14 lg:gap-10">
        <motion.div
          variants={leftImageVariants}
          className="w-full flex-shrink-0 md:w-1/2"
        >
          <img
            src={ytData.imageUrl}
            alt="YouTube Preview"
            className="h-auto w-full rounded-lg object-cover shadow-sm sm:rounded-xl"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          variants={rightCardsVariants}
          className="w-full space-y-4 sm:space-y-5 md:w-1/2 md:space-y-6"
        >
          {ytData.channels.map((channel, index) => (
            <div
              key={index}
              className="flex flex-row items-start justify-between gap-4 rounded-lg border border-[var(--border-primary)] bg-[var(--surface-secondary)] p-4 hover:border-[var(--text-brand)] sm:gap-6 sm:rounded-xl sm:p-5 lg:p-6"
            >
              <div className="flex w-full flex-col gap-3 sm:gap-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-brand)] text-white sm:h-10 sm:w-10 lg:h-11 lg:w-11">
                    <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                  </div>
                  <div>
                    <h3 className="text-[15px] font-bold text-[var(--text-primary)] sm:text-[16px] md:text-[18px] lg:text-[20px]">
                      {channel.name}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] sm:text-sm">
                      {channel.username}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs font-medium text-white sm:text-sm">
                  <span className="rounded-full bg-[var(--surface-brand)] px-2 py-1 sm:px-3">
                    {channel.subscribers} <span>subscribers</span>
                  </span>
                  <span className="rounded-full bg-[var(--surface-brand)] px-2 py-1 sm:px-3">
                    {channel.videos} <span>videos</span>
                  </span>
                </div>

                <div className="text-xs font-semibold text-[var(--surface-brand)] sm:text-sm md:text-base">
                  {channel.language}
                </div>
              </div>

              <a
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${channel.name} YouTube channel`}
                className="mt-3 inline-flex items-center gap-1 self-start rounded-md bg-[var(--surface-brand)] px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white transition-colors duration-200 hover:bg-[var(--surface-brand-hover)] sm:mt-0 sm:gap-2 sm:self-center sm:px-4 sm:py-2 sm:text-sm"
              >
                <span>Visit Channel</span>
                <FiExternalLink className="h-3 w-3 sm:h-4 sm:w-4" />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default YouTube;
