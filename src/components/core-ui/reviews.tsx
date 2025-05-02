'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuExternalLink } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

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

const sharedFadeInVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing, delay: 0.3 },
  },
};

const Reviews = () => {
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  const handleShowMore = () => {
    navigate('/reviews');
    window.scrollTo(0, 0);
  };

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      className="mx-auto mt-6 flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 md:mt-12 md:px-8 lg:mt-16 lg:px-12 2xl:px-0"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {reviewsData.heading}
      </motion.h1>

      <motion.h2
        variants={subHeadingVariants}
        className="mx-auto mt-2 max-w-xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {reviewsData.subHeading}
      </motion.h2>

      <motion.div
        variants={sharedFadeInVariants}
        className="relative mt-10 max-h-[860px] w-full max-w-[1440px] overflow-hidden md:mt-18"
      >
        <div className="columns-1 gap-6 sm:columns-2 md:columns-3 lg:columns-4">
          {feedbackTweetIds.map((id) => (
            <div key={id} className="mb-6 break-inside-avoid">
              <DynamicClientTweetCard id={id} />
            </div>
          ))}
        </div>

        <motion.div
          variants={sharedFadeInVariants}
          className="absolute right-0 bottom-0 left-0 flex h-32 items-end justify-center bg-gradient-to-t from-[var(--surface-primary)] to-transparent"
        >
          <button
            onClick={handleShowMore}
            className="mb-4 cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-medium text-black hover:bg-white/90 hover:text-black/90"
          >
            Show More <FaArrowRightLong className="ml-1 inline" size={16} />
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        variants={sharedFadeInVariants}
        className="mt-10 mb-6 md:mt-14"
      >
        <a
          href={reviewsData.ctaLink}
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-[var(--text-brand)] px-4 py-3 text-sm font-medium text-white hover:bg-[var(--surface-brand-hover)] sm:px-6 sm:py-3 sm:text-base"
        >
          {reviewsData.ctaText}
          <LuExternalLink size={20} />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Reviews;
