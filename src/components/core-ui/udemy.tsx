'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import Slider from '@/components/ui/slider';
import UdemyCard from '@/components/ui/udemy-card';
import { udemyData } from '@/constants';

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

const sliderVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: easing, delay: 0.2 },
  },
};

const Udemy = () => {
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
      className="mx-auto mt-6 flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] md:mt-14 md:px-8 lg:mt-20 lg:px-12 2xl:px-0"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl px-8 text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {udemyData.heading}
      </motion.h1>

      <motion.h2
        variants={subHeadingVariants}
        className="mx-auto mt-2 max-w-2xl px-8 text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {udemyData.subHeading}
      </motion.h2>

      <motion.div
        variants={sliderVariants}
        className="mt-16 mb-12 w-full px-0 md:mt-18"
      >
        <Slider className="" itemClassName="gap-8">
          {udemyData.courses.map((course, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <UdemyCard course={course} />
            </div>
          ))}
        </Slider>
      </motion.div>
    </motion.section>
  );
};

export default Udemy;
