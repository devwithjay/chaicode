'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import DynamicClientTweetCard from '@/components/ui/dynamic-client-tweet-card';
import { feedbackTweetIds, reviewsData } from '@/constants';

const easing = [0.6, 0.05, 0.01, 0.99];

const headingVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easing },
  },
};

const subHeadingVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: easing, delay: 0.1 },
  },
};

const tweetsVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: easing, delay: 0.2 },
  },
};

const Reviews = () => {
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
      className="flex flex-col items-center justify-center bg-[var(--surface-primary)] px-8 pt-8 md:pt-14 lg:px-14"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[34px] lg:text-[44px]"
      >
        {reviewsData.heading}
      </motion.h1>

      <motion.h3
        variants={subHeadingVariants}
        className="mx-auto mt-2 max-w-xl text-center text-[14px] text-[var(--text-secondary)] md:text-[18px]"
      >
        {reviewsData.subHeading}
      </motion.h3>

      <motion.div variants={tweetsVariants} className="mt-10 w-full md:mt-14">
        <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4">
          {feedbackTweetIds.map((id) => (
            <div key={id} className="mb-6 break-inside-avoid">
              <DynamicClientTweetCard id={id} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Reviews;
