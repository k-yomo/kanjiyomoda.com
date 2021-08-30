import React, { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { IoMdGlasses } from 'react-icons/io';

export default memo(function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header>
      <div className="relative bg-white dark:bg-black mx-auto px-6 border-b-[1px] border-gray-200 dark:border-gray-800">
        <div className="flex justify-between items-center h-20 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <a className="tracking-wider hover:underline">
                k-yomo&apos;s tech blog
              </a>
            </Link>
          </div>

          <div className="flex items-center justify-end flex-1">
            {mounted && (
              <IoMdGlasses
                className="cursor-pointer dark:text-white hover:text-gray-500 dark:hover:text-gray-300"
                size={36}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
});
