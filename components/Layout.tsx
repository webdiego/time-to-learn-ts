import React from 'react';
interface TLayout {
  title: string;
  children: React.ReactNode;
}
export default function Layout({ children, title }: TLayout) {
  return (
    <div className="max-w-7xl mx-auto py-10 px-5">
      <h2 className="text-5xl font-bold">{title}</h2>
      {children}
    </div>
  );
}
