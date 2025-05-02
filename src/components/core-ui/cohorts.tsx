'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import PricingCard from '@/components/ui/pricing-card';
import { pricingData } from '@/constants';

const easing = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.15,
      duration: 0.6,
      ease: easing,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing },
  },
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const Pricing = () => {
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
      className="mx-auto mt-8 flex max-w-[1440px] flex-col items-center justify-center overflow-hidden bg-[var(--surface-primary)] px-8 md:mt-12 md:px-8 lg:mt-16 lg:px-12 2xl:px-0"
    >
      <motion.h1
        variants={titleVariants}
        className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {pricingData.heading}
      </motion.h1>

      <motion.h2
        variants={subtitleVariants}
        className="mx-auto mt-2 max-w-2xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {pricingData.subHeading}
      </motion.h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="perspective-1000 mt-12 mb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:mt-16 lg:grid-cols-3"
      >
        {pricingData.courses.map((course, index) => (
          <motion.div key={index} variants={cardVariants} className="w-full">
            <div className="h-full w-full transition-all duration-300">
              <PricingCard
                title={course.title}
                description={course.description}
                startDate={course.startDate}
                duration={course.duration}
                price={course.price}
                originalPrice={course.originalPrice}
                videoId={course.videoId}
                learnMoreText={course.learnMoreText}
                learnMoreLink={course.learnMoreLink}
                ariaLabel={`Learn more about ${course.title} course`}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Pricing;
