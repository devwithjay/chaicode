'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import { FiBell, FiDownload, FiSmartphone, FiZap } from 'react-icons/fi';

import { appData } from '@/constants';

const ChaiApp = () => {
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  };

  return (
    <section className="flex flex-col items-center justify-center overflow-hidden bg-[var(--surface-primary)] px-6 py-16 sm:px-8 md:py-20 lg:px-14">
      <div className="text-center">
        <h1 className="text-[28px] leading-tight font-bold text-[var(--text-brand)] md:text-[36px] lg:text-[44px]">
          {appData.heading}
        </h1>
        <h3 className="mt-3 text-[15px] text-[var(--text-secondary)] md:text-[18px]">
          {appData.subHeading}
        </h3>
      </div>

      <div className="mt-16 flex w-full max-w-7xl flex-col items-center gap-14 md:flex-row md:justify-between">
        <div className="flex w-full max-w-lg flex-col items-center text-center md:w-1/2 md:items-start md:text-left">
          <p className="text-sm text-[var(--text-primary)] md:text-base lg:text-lg">
            {appData.description}
          </p>

          <ul className="mt-6 flex flex-col gap-4 text-[var(--text-primary)]">
            {appData.descriptionPoints.map((point, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-500">
                  {index === 0 && <FiZap size={20} />}
                  {index === 1 && <FiBell size={20} />}
                  {index === 2 && <FiSmartphone size={20} />}
                </span>
                <span className="text-sm md:text-base">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <a
              href={appData.appStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[var(--surface-brand)] px-4 py-3 text-white hover:bg-[var(--surface-brand-hover)]"
            >
              <FiDownload size={24} />
              <div className="flex flex-col text-left">
                <span className="text-xs">Download on the</span>
                <span className="text-lg font-semibold">App Store</span>
              </div>
            </a>

            <a
              href={appData.playStoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg bg-[var(--surface-brand)] px-4 py-3 text-white hover:bg-[var(--surface-brand-hover)]"
            >
              <FiDownload size={24} />
              <div className="flex flex-col text-left">
                <span className="text-xs">Get it on</span>
                <span className="text-lg font-semibold">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div
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
              className="absolute top-8 left-6 w-[180px] -rotate-6 rounded-2xl object-cover shadow-xl transition-transform duration-400 group-hover:-translate-y-2 group-hover:-rotate-2 md:w-[220px] lg:w-[250px]"
            />

            <motion.img
              src={appData.iphoneImageUrl}
              alt="iPhone Mockup"
              className="absolute top-0 right-6 z-10 w-[180px] -rotate-6 rounded-2xl object-cover shadow-2xl transition-transform duration-400 group-hover:-translate-y-2 group-hover:-rotate-2 md:w-[220px] lg:w-[250px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChaiApp;
