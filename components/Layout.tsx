import React from 'react';
import DrawerMenu from '@components/DrawerMenu';
import MenuIcon from '../public/icons/menu.svg';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import Sun from '@components/icons/Sun';
import Moon from '@components/icons/Moon';
import Menu from '@components/icons/Menu';
interface TLayout {
  title?: string;
  children: React.ReactNode;
}

export default function Layout({ children, title }: TLayout) {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, setTheme } = useTheme();

  const toggleDrawer = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <>
      <div className="px-5 bg-gray-100 dark:bg-slate-700 sticky top-0 py-5 border-b-[2px] border-blue-500 text-black dark:text-white">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex justify-center items-center ">
            <div onClick={toggleDrawer} className="cursor-pointer mr-8">
              <Menu />
            </div>

            <Image src="/ts-logo.svg" alt="ts" width={40} height={40} />
            <p className="ml-2 font-medium text-xs self-end">{title}</p>
          </div>

          <div
            className="cursor-pointer"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Moon /> : <Sun />}
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-slate-800 min-h-screen">
        <div className="py-10 px-5 max-w-7xl mx-auto ">
          {title && <h2 className="text-5xl font-bold my-5">{title}</h2>}
          {children}
        </div>
      </div>
      <DrawerMenu {...{ isOpen, toggleDrawer, theme }} />
    </>
  );
}
