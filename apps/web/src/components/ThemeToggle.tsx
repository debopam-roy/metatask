'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import Icon from './Icon';

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

    return (
            <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="p-2 rounded-full bg-light-200 dark:bg-dark-600 hover:bg-light-300 dark:hover:bg-dark-500 transition-colors duration-200"
      aria-label="Toggle theme"
            >
      {theme === 'light' ? (
        <Icon name="moon" className="h-5 w-5 text-primary-800 dark:text-light-100" />
      ) : (
        <Icon name="sun" className="h-5 w-5 text-primary-800 dark:text-light-100" />
      )}
            </button>
    );
} 