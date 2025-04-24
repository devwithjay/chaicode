'use client';

import { useState } from 'react';

import { AiOutlineGift } from 'react-icons/ai';
import { BsBroadcastPin, BsCameraVideo } from 'react-icons/bs';
import { FaCodeBranch, FaHandshakeSimple } from 'react-icons/fa6';
import { LuMessageSquare } from 'react-icons/lu';
import { MdPeopleAlt } from 'react-icons/md';

import Marquee from '@/components/marquee';
import { heroData } from '@/constants';

const iconSize = 18;

const getIconForTag = (_item: string, index: number) => {
  const commonProps = { width: iconSize, height: iconSize };
  switch (index) {
    case 0:
      return <MdPeopleAlt {...commonProps} />;
    case 1:
      return <FaCodeBranch {...commonProps} />;
    case 2:
      return <BsCameraVideo {...commonProps} />;
    case 3:
      return <LuMessageSquare {...commonProps} />;
    case 4:
      return <AiOutlineGift {...commonProps} />;
    default:
      return null;
  }
};

const videoLinks = [
  'https://www.youtube.com/embed/Kjd-SWpe1do',
  'https://www.youtube.com/embed/VNb_LawBBWU',
  'https://www.youtube.com/embed/mV3VvMG4jzw',
  'https://www.youtube.com/embed/oBLpqSHc3lA',
];

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoIds = videoLinks.map((link) => link.split('/embed/')[1]);

  return (
    <section className="mx-auto max-w-[1440px] bg-[var(--surface-primary)] px-6 py-16 text-center">
      <div className="mb-6 inline-flex flex-wrap items-center justify-center rounded-md border border-[var(--border-primary)] px-4 py-2 text-xs font-medium text-[var(--text-brand)] max-sm:text-center sm:text-sm md:text-base">
        <span className="mr-2 text-lg text-[var(--text-brand)] sm:text-xl">
          <FaHandshakeSimple />
        </span>
        <span>Trusted by 1.5M Code Learners</span>
      </div>

      <h1 className="mx-auto max-w-4xl text-4xl leading-tight font-bold text-[var(--text-primary)] md:text-[48px] lg:text-[64px]">
        {heroData.heading}
      </h1>

      <h2 className="mx-auto mt-2 max-w-4xl text-2xl font-semibold text-[var(--text-brand)] md:text-[30px] lg:text-[38px]">
        {heroData.subheading}
      </h2>

      <p className="text-md mx-auto mt-6 max-w-3xl text-[var(--text-secondary)] md:text-lg">
        {heroData.description}
      </p>

      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
        {heroData.tagTitles.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-2 rounded-full border border-[var(--border-primary)] px-3 py-1 text-xs font-medium text-[var(--text-primary)] md:py-1.5 md:text-sm lg:py-2"
          >
            <span className="text-[var(--text-brand)]">
              {getIconForTag(tag, index)}
            </span>
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-10 md:mt-15">
        <a
          href={heroData.ctaLink}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[var(--text-brand)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] sm:px-8 sm:py-3 sm:text-base"
        >
          <BsBroadcastPin size={20} />
          {heroData.ctaText}
        </a>

        <div className="mx-auto mt-10 w-full max-w-[1440px] md:mt-15">
          <Marquee
            pauseOnHover
            className="flex h-full items-center rounded-2xl bg-transparent [--duration:40s]"
          >
            {videoIds.map((id) => (
              <div
                key={id}
                className="relative w-[350px] md:w-[450px] lg:w-[550px] cursor-pointer overflow-hidden rounded-lg shadow-md transition-transform hover:scale-102"
                onClick={() => setActiveVideo(id)}
              >
                <img
                  src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                  alt="YouTube Video Thumbnail"
                  className="aspect-video w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <button className="text-4xl text-white cursor-pointer">▶</button>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {activeVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="relative aspect-video w-full max-w-3xl">
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1`}
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
              loading="lazy"
              className="h-full w-full rounded-lg"
            ></iframe>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-2 right-2 rounded bg-black/60 px-3 py-1 text-2xl text-white"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
