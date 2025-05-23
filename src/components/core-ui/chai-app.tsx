'use client';

import { useEffect, useRef, useState } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';
import { FaApple } from 'react-icons/fa';
import { FiBell, FiSmartphone, FiZap } from 'react-icons/fi';
import { SiGoogleplay } from 'react-icons/si';

import { appData } from '@/constants';

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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easing, delay: 0.2 },
  },
};

const rightSlideVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: easing, delay: 0.3 },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    ease: 'easeInOut',
    repeat: Infinity,
  },
};

const ChaiApp = () => {
  const [, setIsHovered] = useState(false);

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
      className="mx-auto flex max-w-[1440px] flex-col items-center justify-center overflow-hidden bg-[var(--surface-primary)] px-8 mt-16 md:px-8 md:mt-20 lg:px-12 lg:mt-24 2xl:px-0"
    >
      <motion.div variants={headingVariants} className="text-center">
        <h1 className="text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[36px] lg:text-[44px]">
          {appData.heading}
        </h1>
        <h2 className="mt-3 text-[16px] text-[var(--text-secondary)] md:text-[22px]">
          {appData.subHeading}
        </h2>
      </motion.div>

      <div className="mt-16 flex w-full flex-col items-center gap-14 md:flex-row md:justify-between">
        <motion.div
          variants={leftSlideVariants}
          className="flex w-full flex-col items-center text-center md:w-1/2 md:items-start md:text-left"
        >
          <p className="text-sm text-[var(--text-primary)] md:text-base lg:text-lg">
            {appData.description}
          </p>
          <ul className="mt-6 flex flex-col gap-4 text-[var(--text-primary)]">
            {appData.descriptionPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-100 text-orange-500 sm:size-10">
                  {index === 0 && <FiZap size={20} />}
                  {index === 1 && <FiBell size={20} />}
                  {index === 2 && <FiSmartphone size={20} />}
                </span>
                <span className="text-sm sm:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href={appData.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[var(--surface-brand)] px-3 py-2 text-white hover:bg-[var(--surface-brand-hover)] sm:px-4 sm:py-3"
            >
              <FaApple size={22} className="lg:size-5" />
              <div className="flex flex-col text-left">
                <span className="text-xs">Download on the</span>
                <span className="text-sm font-semibold lg:text-lg">
                  App Store
                </span>
              </div>
            </a>

            <a
              href={appData.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[var(--surface-brand)] px-3 py-2 text-white hover:bg-[var(--surface-brand-hover)] sm:px-4 sm:py-3"
            >
              <SiGoogleplay size={20} className="lg:size-5" />
              <div className="flex flex-col text-left">
                <span className="text-xs">Get it on</span>
                <span className="text-sm font-semibold lg:text-lg">
                  Google Play
                </span>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          variants={rightSlideVariants}
          className="group relative flex w-full max-w-lg items-center justify-center overflow-hidden rounded-lg p-6 lg:w-1/2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            animate={floatingAnimation}
            className="relative h-[400px] w-full md:h-[350px]"
          >
            <motion.img
              src={appData.androidImageUrl}
              alt="Android Mockup"
              loading='lazy'
              className="absolute top-8 left-6 w-[230px] -rotate-6 rounded-2xl object-cover transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-2 lg:w-[280px]"
            />
            <motion.img
              src={appData.iphoneImageUrl}
              alt="iPhone Mockup"
              loading='lazy'
              className="rounded-5xl absolute top-0 right-6 z-10 w-[230px] -rotate-6 object-cover transition-transform duration-300 group-hover:-translate-y-2 group-hover:-rotate-2 lg:w-[280px]"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ChaiApp;
