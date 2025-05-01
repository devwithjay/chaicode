'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import { BenefitsCard } from '@/components/ui/benefits-card';
import { benefitsData } from '@/constants';

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

const cardVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: easing, delay: 0.2 },
  },
};

const Benefits = () => {
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
      className="mx-auto flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 pt-6 md:px-8 md:pt-14 lg:px-12 2xl:px-0"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {benefitsData.heading}
      </motion.h1>

      <motion.h2
        variants={subHeadingVariants}
        className="mx-auto mt-2 max-w-xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {benefitsData.subHeading}
      </motion.h2>

      <motion.div variants={cardVariants} className="mt-8 md:mt-10 lg:mt-16">
        <BenefitsCard {...benefitsData} />
      </motion.div>
    </motion.section>
  );
};

export default Benefits;
