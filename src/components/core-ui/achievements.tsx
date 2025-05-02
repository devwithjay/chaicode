'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';

import Marquee from '@/components/ui/marquee';
import { ProductCard } from '@/components/ui/product-card';
import { achievementsData } from '@/constants';

const easing = [0.6, 0.05, 0.01, 0.99];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
      duration: 0.6,
      ease: easing,
    },
  },
};

const headingVariants = {
  hidden: { y: 40, opacity: 0, scale: 0.96 },
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

const productCardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2 + index * 0.1,
      ease: easing,
    },
  }),
};

const Achievements = () => {
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
      className="mx-auto mt-12 flex flex-col items-center justify-center overflow-hidden bg-[var(--surface-primary)] md:mt-16 lg:mt-20"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-center text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {achievementsData.heading}
      </motion.h1>

      <motion.h2
        variants={subHeadingVariants}
        className="mx-auto mt-2 max-w-2xl px-8 text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {achievementsData.subHeading}
      </motion.h2>

      <motion.div
        className="mt-16 mb-12 w-full md:mt-18"
        initial="hidden"
        animate={controls}
      >
        <Marquee
          pauseOnHover
          className="flex h-full items-center bg-transparent [--duration:30s]"
        >
          {achievementsData.productsData.map((product, index) => (
            <motion.div
              key={product.id}
              custom={index}
              variants={productCardVariants}
              initial="hidden"
              animate={controls}
              className="mx-3 min-w-[300px] sm:min-w-[350px] lg:min-w-[400px]"
            >
              <ProductCard
                imageUrl={product.imageUrl}
                title={product.title}
                description={product.description}
                websiteUrl={product.websiteUrl}
                socialLinks={product.socialLinks}
              />
            </motion.div>
          ))}
        </Marquee>
      </motion.div>
    </motion.section>
  );
};

export default Achievements;
