'use client';

import {
  FaDiscord,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

interface WhyChaiCodeCardProps {
  title: string;
  description: string;
}

export const WhyChaiCodeCard = ({
  title,
  description,
}: WhyChaiCodeCardProps) => {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-[var(--border-primary)] bg-[var(--surface-secondary)] p-6 shadow-md hover:shadow-lg ">
      <div className="flex flex-col gap-4">
        <h3 className="text-[20px] font-semibold text-[var(--text-brand)] md:text-[22px]">
          {title}
        </h3>
        <p className="text-base text-[var(--text-primary)] md:text-lg">
          {description}
        </p>
      </div>
    </div>
  );
};

interface WhyChaiCodeFeaturedProps {
  name: string;
  description: string;
  approachTitle: string;
  approachDescription: string;
  imageUrl: string;
  socialLinks: {
    github?: string;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
    youtube?: string;
    discord?: string;
  };
}

export const WhyChaiCodeFeatured = ({
  name,
  description,
  approachTitle,
  approachDescription,
  imageUrl,
  socialLinks,
}: WhyChaiCodeFeaturedProps) => {
  const socialIcons = {
    github: FaGithub,
    twitter: FaXTwitter,
    linkedin: FaLinkedin,
    instagram: FaInstagram,
    youtube: FaYoutube,
    discord: FaDiscord,
  };

  return (
    <div className="flex h-full flex-col gap-6 rounded-xl border border-[var(--border-primary)] bg-[var(--surface-secondary)] shadow-md hover:shadow-lg">
      <div className="w-full overflow-hidden rounded-t-xl">
        <img src={imageUrl} alt={name} className="h-auto w-full object-cover" />
      </div>
      <div className="flex flex-grow flex-col px-6 pb-6">
        <h3 className="mb-3 text-[24px] font-bold text-[var(--text-brand)] md:mb-4 md:text-[26px]">
          {name}
        </h3>
        <p className="mb-4 text-base text-[var(--text-primary)] md:mb-6 md:text-lg">
          {description}
        </p>
        <h4 className="mb-2 text-lg font-semibold text-[var(--text-brand)] md:mb-3 md:text-xl">
          {approachTitle}
        </h4>
        <p className="text-base text-[var(--text-primary)] md:text-lg">
          {approachDescription}
        </p>
        <div className="mt-auto flex flex-wrap gap-4 pt-6 md:pt-8">
          {Object.entries(socialLinks).map(([platform, url]) => {
            if (!url) return null;
            const Icon = socialIcons[platform as keyof typeof socialIcons];
            return (
              <a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-brand)] hover:scale-103 hover:text-[var(--text-brand-hover)]"
              >
                <Icon className="size-6 lg:size-7" />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
