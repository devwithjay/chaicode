'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import ClientTweetCard from '@/components/ui/client-tweet-card';
import Marquee from '@/components/ui/marquee';
import { testimonialsData, tweetLoveIds } from '@/constants';

const easing = [0.6, 0.05, 0.01, 0.99];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
      duration: 0.8,
      ease: easing,
    },
  },
};

const headingVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easing },
  },
};

const subHeadingVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.98 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: easing, delay: 0.15 },
  },
};

const contentVariants = {
  hidden: { y: 60, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 1, ease: easing, delay: 0.3 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5 + (index % 5) * 0.08,
      ease: easing,
    },
  }),
};

const Testimonials = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col items-center justify-center overflow-hidden bg-[var(--surface-primary)] pt-12 md:pt-16 lg:pt-24"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {testimonialsData.heading}
      </motion.h1>

      <motion.h2
        variants={subHeadingVariants}
        className="mx-auto mt-2 max-w-2xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {testimonialsData.subHeading}
      </motion.h2>

      <motion.div
        variants={contentVariants}
        className="relative mt-6 flex w-full flex-grow flex-col gap-4 overflow-hidden rounded-2xl border-none md:mt-12 lg:mt-18"
      >
        <motion.div
          variants={contentVariants}
          className="relative flex size-full flex-col items-center justify-center overflow-hidden rounded-lg"
        >
          <Marquee pauseOnHover className="gap-2 p-8 [--duration:100s]">
            {tweetLoveIds.map((id, index) => (
              <motion.div
                key={id}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
              >
                <ClientTweetCard id={id} />
              </motion.div>
            ))}
          </Marquee>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
