'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import { Carousel } from '@/components/ui/carousel';
import { MentorCard } from '@/components/ui/mentor-card';
import { mentorsData } from '@/constants';

const easing = [0.6, 0.05, 0.01, 0.99];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
      ease: easing,
    },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
};

const subHeadingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing, delay: 0.1 },
  },
};

const carouselVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing, delay: 0.2 },
  },
};

const Mentors = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="mx-auto mt-12 flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-4 md:mt-16 md:px-8 lg:mt-20 lg:px-12 2xl:px-0"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {mentorsData.heading}
      </motion.h1>

      <motion.h2
        variants={subHeadingVariants}
        className="mx-auto mt-2 max-w-2xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {mentorsData.subHeading}
      </motion.h2>

      <motion.div
        variants={carouselVariants}
        className="mt-14 mb-8 w-full overflow-hidden rounded-2xl bg-[var(--surface-primary)]"
      >
        <Carousel
          itemClassName="gap-4"
          className="size-full rounded-2xl py-6 backdrop-blur-sm"
        >
          {mentorsData.mentor.map((mentor) => (
            <MentorCard
              key={mentor.id}
              name={mentor.name}
              description={mentor.description || ''}
              workingAt={mentor.workingAt}
              image={mentor.image}
            />
          ))}
        </Carousel>
      </motion.div>
    </motion.section>
  );
};

export default Mentors;
