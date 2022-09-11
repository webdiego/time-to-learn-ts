import React from 'react';
import DrawerMenu from '@components/DrawerMenu';
import MenuIcon from '../public/icons/menu.svg';
import Image from 'next/image';
interface TLayout {
  title?: string;
  children: React.ReactNode;
}
export default function Layout({ children, title }: TLayout) {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen(() => !isOpen);
  };

  return (
    <div className=" max-w-7xl mx-auto py-10 px-5">
      <div className="flex items-end justify-end">
        <Image src={MenuIcon} alt="menu" onClick={toggleDrawer} className="cursor-pointer" />
      </div>
      {title && <h2 className="text-5xl font-bold">{title}</h2>}
      {children}
      <DrawerMenu {...{ isOpen, toggleDrawer }} />
    </div>
  );
}
