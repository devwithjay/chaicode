'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';

import {
  Disclosure,
  DisclosureContent,
  DisclosureTrigger,
} from '@/components/ui/disclosure';

interface MentorCardProps {
  name: string;
  description: string;
  workingAt: string;
  image: string;
}

export function MentorCard({
  name,
  description,
  workingAt,
  image,
}: MentorCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const imageVariants = {
    collapsed: { scale: 1, filter: 'blur(0px)' },
    expanded: { scale: 1.1, filter: 'blur(3px)' },
  };

  const contentVariants = {
    collapsed: { opacity: 0, y: 0 },
    expanded: { opacity: 1, y: 0 },
  };

  const transition = {
    type: 'spring',
    stiffness: 26.7,
    damping: 4.1,
    mass: 0.2,
  };

  return (
    <div
      className="relative h-[350px] w-full max-w-[280px] min-w-[280px] overflow-hidden rounded-2xl"
      onMouseOver={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="h-full w-full">
        <motion.img
          src={image}
          alt={name}
          className="pointer-events-none h-full w-full object-cover select-none"
          animate={isOpen ? 'expanded' : 'collapsed'}
          variants={imageVariants}
          transition={transition}
        />
      </div>
      <Disclosure
        onOpenChange={setIsOpen}
        open={isOpen}
        className="absolute right-0 bottom-0 left-0 m-2 flex flex-col rounded-2xl bg-[var(--surface-primary)] p-4"
        variants={contentVariants}
        transition={transition}
      >
        <DisclosureTrigger>
          <button
            className="w-fit font-semibold text-[var(--text-primary)]"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {name}
          </button>
        </DisclosureTrigger>
        <DisclosureContent>
          <div className="flex flex-col gap-4">
            <p className="text-sm font-medium text-[var(--text-primary)]">
              {workingAt}
            </p>

            <div className="flex flex-col gap-4 text-sm text-[var(--text-primary)]">
              <p className="line-clamp-3">{description}</p>
            </div>
          </div>
        </DisclosureContent>
      </Disclosure>
    </div>
  );
}
