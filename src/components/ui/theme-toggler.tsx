import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from '@/assets/icons';

const ThemeToggler = () => {
  const getInitialTheme = () => {
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches;
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [rotationCount, setRotationCount] = useState(0);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const handleThemeSwitch = () => {
    setRotationCount((prev) => prev + 1);
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const rotationStyle = {
    transition: 'transform 600ms ease',
    transform: `rotate(${rotationCount * 360}deg)`,
  };

  return (
    <div className="mr-2 flex items-center justify-center max-lg:flex-1">
      <img
        src={theme === 'dark' ? SunIcon : MoonIcon}
        alt="ThemeToggler"
        onClick={handleThemeSwitch}
        className="cursor-pointer size-5 md:size-6"
        style={rotationStyle}
      />
    </div>
  );
};

export default ThemeToggler;
