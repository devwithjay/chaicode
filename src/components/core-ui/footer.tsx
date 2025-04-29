'use client';

import {
  FaDiscord,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from 'react-icons/fa';
import { SiX } from 'react-icons/si';

import { ChaiCodeText, ChaiLogo } from '@/components/ui/icons';
import { footerData } from '@/constants';

const getSocialIcon = (label: string) => {
  const icons: Record<string, React.ReactNode> = {
    Twitter: <SiX className="size-[18px] md:size-[20px] lg:size-[22px]" />,
    GitHub: <FaGithub className="size-[18px] md:size-[20px] lg:size-[22px]" />,
    LinkedIn: (
      <FaLinkedin className="size-[18px] md:size-[20px] lg:size-[22px]" />
    ),
    Instagram: (
      <FaInstagram className="size-[18px] md:size-[20px] lg:size-[22px]" />
    ),
    Facebook: (
      <FaFacebook className="size-[18px] md:size-[20px] lg:size-[22px]" />
    ),
    YouTube: (
      <FaYoutube className="size-[18px] md:size-[20px] lg:size-[22px]" />
    ),
    Discord: (
      <FaDiscord className="size-[18px] md:size-[20px] lg:size-[22px]" />
    ),
  };

  return icons[label] || label;
};

export function Footer() {
  return (
    <footer className="w-full bg-[var(--surface-primary)] px-6 py-12 md:px-12">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:gap-10 md:flex-row">
        <div className="flex flex-col gap-4">
          <div>
            <a href="/" className="flex items-center gap-0.5">
              <ChaiLogo />
              <ChaiCodeText />
            </a>
          </div>
          <p className="mb-1 text-[12px] text-[var(--text-secondary)] sm:text-[14px] md:text-[15px] lg:text-[16px]">
            {footerData.about.tagline}
          </p>
          <div className="flex gap-4">
            {footerData.about.socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-brand)]"
                aria-label={social.label}
              >
                {getSocialIcon(social.label)}
              </a>
            ))}
          </div>
          <p className="mt-2 text-xs text-[var(--text-secondary)] sm:mt-4 md:text-sm">
            {footerData.about.copyright}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          <div className="flex flex-col gap-2">
            <h4 className="mb-1.5 text-sm font-semibold text-[var(--text-primary)] sm:text-lg md:mb-3">
              {footerData.products.title}
            </h4>
            {footerData.products.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-brand)] sm:text-sm md:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="mb-1.5 text-sm font-semibold text-[var(--text-primary)] sm:text-lg md:mb-3">
              {footerData.resources.title}
            </h4>
            {footerData.resources.links.map((link) => (
              <a
                key={link.name}
                href={link.url}
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-brand)] sm:text-sm md:text-base"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
