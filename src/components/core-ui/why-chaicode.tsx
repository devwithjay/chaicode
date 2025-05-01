'use client';

import { useEffect, useRef } from 'react';

import { motion, useAnimation, useInView } from 'framer-motion';
import { LuExternalLink } from 'react-icons/lu';

import {
  WhyChaiCodeCard,
  WhyChaiCodeFeatured,
} from '@/components/ui/why-chaicode-cards';
import { whyChaiCodeData } from '@/constants';

const easing = [0.6, 0.05, 0.01, 0.99];

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easing },
  },
};

const subHeadingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing, delay: 0.1 },
  },
};

const cardGroupVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing, delay: 0.2 },
  },
};

const ctaVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.4, ease: easing },
  },
};

const WhyChaiCode = () => {
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
      className="mx-auto flex max-w-[1440px] flex-col items-center justify-center bg-[var(--surface-primary)] px-8 pt-12 md:px-8 lg:px-12 lg:pt-22 2xl:px-0"
    >
      <motion.h1
        variants={headingVariants}
        className="mx-auto max-w-4xl text-[24px] leading-tight font-bold text-[var(--text-brand)] sm:text-[28px] md:text-[34px] lg:text-[44px]"
      >
        {whyChaiCodeData.heading}
      </motion.h1>

      <motion.h2
        variants={subHeadingVariants}
        className="mx-auto mt-2 max-w-xl text-center text-[16px] text-[var(--text-secondary)] md:text-[22px]"
      >
        {whyChaiCodeData.subHeading}
      </motion.h2>

      <div className="mt-8 grid gap-6 md:mt-16 lg:grid-cols-3">
        <motion.div
          variants={cardGroupVariants}
          className="flex flex-col gap-6"
        >
          {whyChaiCodeData.cards.slice(0, 3).map((card, index) => (
            <WhyChaiCodeCard
              key={`left-${index}`}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div>

        <motion.div variants={cardGroupVariants}>
          <WhyChaiCodeFeatured
            name={whyChaiCodeData.featured.name}
            description={whyChaiCodeData.featured.description}
            approachTitle={whyChaiCodeData.featured.approachTitle}
            approachDescription={whyChaiCodeData.featured.approachDescription}
            imageUrl={whyChaiCodeData.featured.imageUrl}
            socialLinks={whyChaiCodeData.featured.socialLinks}
          />
        </motion.div>

        <motion.div
          variants={cardGroupVariants}
          className="flex flex-col gap-6"
        >
          {whyChaiCodeData.cards.slice(3).map((card, index) => (
            <WhyChaiCodeCard
              key={`right-${index}`}
              title={card.title}
              description={card.description}
            />
          ))}
        </motion.div>
      </div>

      <motion.div variants={ctaVariants} className="mt-10 mb-6 md:mt-15">
        <a
          href={whyChaiCodeData.ctaLink}
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-[var(--text-brand)] px-4 py-3 text-sm font-medium text-white hover:bg-[var(--surface-brand-hover)] sm:px-6 sm:py-3 sm:text-base"
        >
          {whyChaiCodeData.ctaText}
          <LuExternalLink size={20} />
        </a>
      </motion.div>
    </motion.section>
  );
};

export default WhyChaiCode;
