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
      className={`flex flex-col overflow-hidden rounded-xl  ${className} h-[340px]`}
    >
      <a
        href={websiteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block h-48 w-full overflow-hidden"
      >
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 hover:opacity-100">
          <div className="rounded-full bg-black/10 p-2">
            <FaExternalLinkAlt className="text-xl text-white" />
          </div>
        </div>
      </a>

      <div className="flex flex-1 flex-col bg-[var(--surface-secondary)] p-4">
        <h3 className="mb-2 text-lg font-bold text-[var(--text-primary)] md:text-xl">
          {title}
        </h3>

        <p className="mb-4 flex-1 text-sm text-[var(--text-secondary)] line-clamp-2 md:text-md">
          {description}
        </p>

        {socialLinks && (
          <div className="mt-auto flex space-x-4">
            {socialLinks.twitter && (
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="Twitter"
              >
                <FaXTwitter className="text-xl" />
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-blue-500 dark:hover:text-blue-400"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-xl" />
              </a>
            )}
            {socialLinks.github && (
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 transition-colors hover:text-gray-700 dark:hover:text-gray-300"
                aria-label="GitHub"
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