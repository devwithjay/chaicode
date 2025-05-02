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
      className="mx-auto mt-16 flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 md:mt-20 md:px-8 lg:mt-24 lg:px-12 2xl:px-0"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-center text-[22px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {ytData.heading}
      </motion.h1>

      <motion.h2
        variants={headingVariants}
        className="mx-auto mt-2 max-w-2xl text-center text-[14px] text-[var(--text-secondary)] sm:text-[16px] md:text-[20px] lg:text-[22px]"
      >
        {ytData.subHeading}
      </motion.h2>

      <div className="mt-14 flex w-full flex-col items-center gap-10 md:flex-row md:justify-between">
        <motion.div variants={leftImageVariants} className="w-full md:w-1/2">
          <img
            src={ytData.imageUrl}
            alt="YouTube Preview"
            className="w-full rounded-xl object-contain"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          variants={rightCardsVariants}
          className="w-full space-y-6 md:w-1/2"
        >
          {ytData.channels.map((channel, index) => (
            <div
              key={index}
              className="flex flex-col items-start justify-between gap-6 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-secondary)] px-5 py-6 hover:border-[var(--text-brand)] md:flex-row"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--surface-brand)] text-white md:h-11 md:w-11">
                    <FaYoutube size={20} className="md:size-6" />
                  </div>
                  <div>
                    <h3 className="text-[14px] font-bold text-[var(--text-primary)] xl:text-[22px]">
                      {channel.name}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] xl:text-base">
                      {channel.username}
                    </p>
                  </div>
                </div>

                <div className="mt-1 flex flex-wrap gap-2 text-xs font-medium text-white sm:text-sm xl:text-[15px]">
                  <span className="rounded-full bg-[var(--surface-brand)] px-3 py-1">
                    {channel.subscribers} <span>subscribers</span>
                  </span>
                  <span className="rounded-full bg-[var(--surface-brand)] px-3 py-1">
                    {channel.videos} <span>videos</span>
                  </span>
                </div>

                <div className="mt-1 text-sm font-semibold text-[var(--surface-brand)] sm:text-base md:text-lg">
                  {channel.language}
                </div>
              </div>

              <a
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-md bg-[var(--surface-brand)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--surface-brand-hover)] md:self-center"
              >
                Visit Channel <FiExternalLink size={16} />
              </a>
            </div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default YouTube;
