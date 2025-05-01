import { FaExternalLinkAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export interface ProductCardProps {
  imageUrl: string;
  title: string;
  description: string;
  websiteUrl: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  className?: string;
}

export const ProductCard = ({
  imageUrl,
  title,
  description,
  websiteUrl,
  socialLinks,
  className = '',
}: ProductCardProps) => {
  return (
    <div
      className={`flex size-full max-w-[460px] flex-col overflow-hidden rounded-xl bg-[var(--surface-secondary)] ${className}`}
    >
      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full"
      >
        <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0  hover:opacity-100">
          <div className="rounded-full bg-black/10 p-2">
            <FaExternalLinkAlt className="text-xl text-white" />
          </div>
        </div>
      </a>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="line-clamp-1 text-base font-bold text-[var(--text-primary)] md:text-lg">
            {title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-[var(--text-secondary)] md:text-base">
            {description}
          </p>
        </div>
        {socialLinks && (
          <div className="mt-4 flex space-x-4">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FaXTwitter className="text-xl" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400"
              >
                <FaLinkedin className="text-xl" />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                <FaGithub className="text-xl" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
