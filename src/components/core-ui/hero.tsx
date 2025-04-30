'use client';

import { useState } from 'react';

import { AiOutlineGift } from 'react-icons/ai';
import { BsBroadcastPin, BsCameraVideo } from 'react-icons/bs';
import { FaCodeBranch, FaHandshakeSimple } from 'react-icons/fa6';
import { LuMessageSquare } from 'react-icons/lu';
import { MdPeopleAlt } from 'react-icons/md';

import Marquee from '@/components/ui/marquee';
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

const Hero = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videoIds = heroData.videoLinks.map((link) => link.split('/embed/')[1]);

  return (
    <section className="mx-auto bg-[var(--surface-primary)] pt-10 text-center transition-all duration-200 md:pt-14 lg:pt-16">
      <div className="mb-6 inline-flex flex-wrap items-center justify-center rounded-md border border-[var(--border-primary)] px-2.5 py-2 text-xs font-medium text-[var(--text-brand)] transition-all duration-200 select-none hover:border-[var(--text-brand)] max-sm:text-center sm:text-sm md:px-4 md:text-base">
        <span className="mr-2 text-lg text-[var(--text-brand)] sm:text-xl">
          <FaHandshakeSimple />
        </span>
        <span className="select-none">Trusted by 1.5M Code Learners</span>
      </div>

      <h1 className="mx-auto max-w-4xl px-6 text-4xl leading-tight font-bold text-[var(--text-primary)] transition-all duration-200 md:px-0 md:text-[48px] lg:text-[64px]">
        {heroData.heading}
      </h1>

      <h2 className="mx-auto mt-1 max-w-4xl px-6 text-2xl leading-tight font-semibold text-[var(--text-brand)] transition-all duration-200 md:px-0 md:text-[30px] lg:text-[38px]">
        {heroData.subHeading}
      </h2>

      <p className="text-md mx-auto mt-6 max-w-3xl px-6 text-[var(--text-secondary)] transition-all duration-200 md:px-0 md:text-lg">
        {heroData.description}
      </p>

      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-2 px-6 transition-all duration-200 md:gap-3 md:px-0">
        {heroData.tagTitles.map((tag, index) => (
          <span
            key={index}
            className="flex items-center gap-2 rounded-full border border-[var(--border-primary)] px-4 py-1 text-[12px] font-medium text-[var(--text-primary)] transition-all duration-200 ease-in-out select-none hover:border-[var(--text-brand)] md:py-1.5 md:text-[14px] lg:py-2"
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
          className="inline-flex items-center justify-center gap-3 rounded-lg bg-[var(--surface-brand)] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:brightness-110 sm:px-8 sm:py-3 sm:text-base"
        >
          <BsBroadcastPin size={20} />
          {heroData.ctaText}
        </a>
      </div>

      <div className="mt-10 w-full md:mt-15">
        <Marquee
          pauseOnHover
          className="flex h-full items-center bg-transparent [--duration:40s]"
        >
          {videoIds.map((id) => (
            <div
              key={id}
              className="video-card relative mx-2 w-[350px] cursor-pointer overflow-hidden rounded-xl shadow-md transition-all hover:scale-101 md:w-[450px] lg:w-[550px]"
              onClick={() => setActiveVideo(id)}
            >
              <img
                src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                alt="YouTube Video Thumbnail"
                loading="lazy"
                className="aspect-video w-full object-cover"
              />
              <div className="video-card-hover:bg-black/20 absolute inset-0 flex items-center justify-center bg-black/30">
                <svg
                  viewBox="0 0 544 384"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="video-card-hover:fill-[#ff0000] w-14 fill-gray-700 md:w-18"
                >
                  <path d="M533.655 60.083C527.374 36.433 508.882 17.842 485.233 11.561C441.885 -2.86102e-06 272 0 272 0C272 0 102.114 -2.86102e-06 58.767 11.561C35.118 17.842 16.626 36.433 10.345 60.083C-9.53674e-07 103.229 0 192 0 192C0 192 -9.53674e-07 280.771 10.345 323.917C16.626 347.567 35.118 366.158 58.767 372.439C102.114 384 272 384 272 384C272 384 441.885 384 485.233 372.439C508.882 366.158 527.374 347.567 533.655 323.917C544 280.771 544 192 544 192C544 192 544 103.229 533.655 60.083ZM216 272V112L358.857 192L216 272Z" />
                  <path
                    d="M216.448 113.102L358 192.5L216.448 272L216.448 113.102Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {activeVideo && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative aspect-video w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&modestbranding=1&rel=0&showinfo=0`}
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

      <style>{`
        .video-card:hover .video-card-hover\\:bg-black\\/20 {
          background-color: rgba(0, 0, 0, 0.2);
        }
        
        .video-card:hover .video-card-hover\\:fill-\\[\\#ff0000\\] {
          fill: #ff0000;
        }
      `}</style>
    </section>
  );
};

export default Hero;
