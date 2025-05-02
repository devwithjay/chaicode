'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import { topicsCloudData } from '@/constants';

const easing = [0.6, 0.05, 0.01, 0.99];

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const subHeadingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing, delay: 0.1 },
  },
};

const cloudVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay: 0.2 },
  },
};

const TopicsCloud = () => {
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
      className="mx-auto mt-6 flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 md:mt-10 md:px-8 lg:mt-18 lg:px-12 2xl:px-0"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {topicsCloudData.heading}
      </motion.h1>

      <motion.h2
        variants={subHeadingVariants}
        className="mx-auto mt-2 max-w-xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {topicsCloudData.subHeading}
      </motion.h2>

      <motion.div
        variants={cloudVariants}
        className="mt-18 mb-6 flex cursor-pointer flex-wrap justify-center gap-4 md:gap-6 lg:gap-8"
      >
        {topicsCloudData.topics.map((topic, index) => (
          <a
            key={index}
            href={topic.youtubeLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[var(--border-primary)] px-5 py-2 text-sm text-[var(--text-primary)] hover:bg-[var(--surface-brand)] hover:text-white md:text-base"
          >
            <span className="text-lg md:text-xl">{topic.icon}</span>
            {topic.title}
          </a>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default TopicsCloud;
