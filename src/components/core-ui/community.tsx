'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';
import { FaDiscord } from 'react-icons/fa';

import { communityData } from '@/constants';

const easing = [0.6, 0.05, 0.01, 0.99];

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const leftSlideVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easing, delay: 0.2 },
  },
};

const rightSlideVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easing, delay: 0.3 },
  },
};

const Community = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      className="mx-auto flex max-w-[1440px] flex-col items-center justify-between bg-[var(--surface-primary)] px-8 pt-10 md:px-8 md:pt-14 lg:px-12 lg:pt-20 2xl:px-0"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[36px] lg:text-[44px]"
      >
        {communityData.heading}
      </motion.h1>

      <motion.h2
        variants={headingVariants}
        className="mx-auto mt-3 max-w-2xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {communityData.subHeading}
      </motion.h2>

      <div className="mt-14 mb-8 flex w-full flex-col-reverse items-center justify-center gap-12 md:flex-row lg:gap-20">
        <motion.div
          variants={leftSlideVariants}
          className="flex flex-col items-center justify-center text-center md:items-start md:text-left"
        >
          <h2 className="text-[26px] leading-snug font-extrabold text-[var(--text-primary)] md:text-[32px] lg:text-[38px]">
            {communityData.description}
          </h2>

          {communityData.ctaText && communityData.ctaLink && (
            <a
              href={communityData.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-[var(--surface-brand)] px-4 py-2 text-sm font-semibold text-white hover:bg-[var(--surface-brand-hover)] md:px-6 md:py-3 md:text-base"
            >
              <FaDiscord className="text-lg text-white" />
              Join our Discord
            </a>
          )}
        </motion.div>

        {communityData.imageUrl && (
          <motion.div
            variants={rightSlideVariants}
            className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-black/80 shadow-lg hover:bg-black/90 dark:bg-white/10 dark:hover:bg-white/15"
          >
            <img
              src={communityData.imageUrl}
              alt="Community"
              className="h-auto w-full object-cover"
            />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Community;
