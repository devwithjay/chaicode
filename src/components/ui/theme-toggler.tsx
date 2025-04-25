import { useEffect, useState } from 'react';

import moonIcon from '@assets/icons/moonIcon.svg';
import sunIcon from '@assets/icons/sunIcon.svg';

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
    <div className="mr-2 flex items-start justify-end max-lg:mr-5 max-lg:flex-1">
      <img
        src={theme === 'dark' ? sunIcon : moonIcon}
        alt="ThemeToggler"
        width={24}
        height={24}
        onClick={handleThemeSwitch}
        className="cursor-pointer align-top"
        style={rotationStyle}
      />
    </div>
  );
};

export default ThemeToggler;
