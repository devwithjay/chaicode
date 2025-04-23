import { navlinks } from '@/constants';
import { StarIcon, FileTextIcon, CodeIcon, VideoIcon } from '@radix-ui/react-icons';

import { ChaiCodeText, ChaiLogo } from './icons';
import ThemeToggler from './theme-toggler';

interface NavItem {
  title: string;
  link: string;
}

const iconSize = 20;

const getIconForNavItem = (_item: NavItem, index: number) => {
  const commonProps = { width: iconSize, height: iconSize };

  switch (index) {
    case 0:
      return <CodeIcon {...commonProps} />;
    case 1:
      return <VideoIcon {...commonProps} />;
    case 2:
      return <FileTextIcon {...commonProps} />;
    case 3:
      return <StarIcon {...commonProps} />;
    default:
      return null;
  }
};

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-[var(--surface-primary)] px-12 py-6">
      <div className="flex cursor-pointer items-center space-x-2">
        <a href="/" className="flex items-center gap-0.5">
          <ChaiLogo />
          <ChaiCodeText />
        </a>
      </div>

      <ul className="flex items-center space-x-8 text-lg text-[var(--text-secondary)]">
        {navlinks.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-transform hover:scale-[1.03]"
            > {getIconForNavItem(item, index)}
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <ThemeToggler />
        <a
          href="https://courses.chaicode.com/learn/account/signin"
          target="_blank"
        >
          <button className="cursor-pointer rounded-[8px] bg-[var(--surface-brand)] px-5 py-2 text-[16px] font-medium text-[var(--text-primary)] hover:scale-102 hover:bg-[var(--surface-brand-hover)]">
            Login
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
