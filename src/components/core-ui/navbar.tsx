'use client';

import { useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { FaRegStar } from 'react-icons/fa';
import {
  IoBookOutline,
  IoCloseOutline,
  IoCode,
  IoMenuOutline,
  IoPlayOutline,
} from 'react-icons/io5';
import { useLocation } from 'react-router-dom';

import { ChaiCodeText, ChaiLogo } from '@/components/ui/icons';
import ThemeToggler from '@/components/ui/theme-toggler';
import { navlinks } from '@/constants';

interface NavItem {
  title: string;
  link: string;
}

const iconSize = 18;

const getIconForNavItem = (_item: NavItem, index: number) => {
  const commonProps = { width: iconSize, height: iconSize };
  switch (index) {
    case 0:
      return <IoCode {...commonProps} />;
    case 1:
      return <IoPlayOutline {...commonProps} />;
    case 2:
      return <IoBookOutline {...commonProps} />;
    case 3:
      return <FaRegStar {...commonProps} />;
    default:
      return null;
  }
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isExternal = (link: string) => !link.startsWith('/');

  return (
    <>
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between bg-[var(--surface-primary)] px-6 py-4 md:px-8 md:py-6 lg:px-12 2xl:px-0">
        <div className="flex cursor-pointer items-center space-x-2">
          <a
            aria-label="Go to ChaiCode homepage"
            href="/"
            className="flex items-center gap-0.5"
          >
            <ChaiLogo />
            <ChaiCodeText />
          </a>
        </div>

        <ul className="hidden items-center space-x-4 text-base text-[var(--text-secondary)] md:flex lg:space-x-8 lg:text-lg">
          {navlinks.map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ y: -2, scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <a
                href={item.link}
                target={isExternal(item.link) ? '_blank' : undefined}
                rel={isExternal(item.link) ? 'noopener noreferrer' : undefined}
                className={`flex items-center gap-1.5 ${
                  location.pathname === item.link
                    ? 'text-[var(--text-brand)]'
                    : 'hover:text-[var(--text-primary)]'
                }`}
                aria-label={item.title}
              >
                {getIconForNavItem(item, index)}
                {item.title}
              </a>
            </motion.li>
          ))}
        </ul>

        <div className="flex items-center md:gap-2 lg:gap-4">
          <ThemeToggler />
          <a
            href="https://courses.chaicode.com/learn/account/signin"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block"
          >
            <button className="cursor-pointer rounded-lg bg-[var(--surface-brand)] px-3 py-1.5 text-sm font-medium text-white transition-all duration-200 ease-in-out hover:bg-[var(--surface-brand-hover)] md:px-5 md:text-base">
              Login
            </button>
          </a>

          <button
            className="p-1 text-[var(--text-secondary)] md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoCloseOutline size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <IoMenuOutline size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="fixed inset-0 top-16 z-50 flex flex-col bg-[var(--surface-primary)] px-6 py-4 md:hidden"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 0.25,
                ease: 'easeInOut',
              }}
            >
              <motion.ul
                className="mt-4 flex flex-col space-y-4 bg-[var(--surface-primary)] text-lg text-[var(--text-secondary)]"
                initial="closed"
                animate="open"
                exit="closed"
                variants={{
                  open: {
                    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
                  },
                  closed: {
                    transition: {
                      staggerChildren: 0.05,
                      staggerDirection: -1,
                    },
                  },
                }}
              >
                {navlinks.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={{
                      open: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.2 },
                      },
                      closed: {
                        opacity: 0,
                        y: -20,
                        transition: { duration: 0.2 },
                      },
                    }}
                  >
                    <a
                      href={item.link}
                      target={isExternal(item.link) ? '_blank' : undefined}
                      rel={
                        isExternal(item.link)
                          ? 'noopener noreferrer'
                          : undefined
                      }
                      className={`flex items-center gap-2 py-2 transition-transform hover:translate-x-1 ${
                        location.pathname === item.link
                          ? 'text-[var(--text-brand)]'
                          : ''
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {getIconForNavItem(item, index)}
                      {item.title}
                    </a>
                  </motion.li>
                ))}
                <motion.li
                  className="pt-4"
                  variants={{
                    open: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.3, delay: 0.3 },
                    },
                    closed: {
                      opacity: 0,
                      y: -20,
                      transition: { duration: 0.3 },
                    },
                  }}
                >
                  <a
                    href="https://courses.chaicode.com/learn/account/signin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <button className="mb-4 w-full cursor-pointer rounded-lg bg-[var(--surface-brand)] px-5 py-3 text-base font-medium text-white hover:bg-[var(--surface-brand-hover)]">
                      Login
                    </button>
                  </a>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="bg-background/60 fixed inset-x-0 top-[64px] bottom-0 z-40 backdrop-blur-sm md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
