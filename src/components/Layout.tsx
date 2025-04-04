
import React from 'react';
import Header from './Header';
import MainNav from './MainNav';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pb-16 sm:pb-0">
        {children}
      </main>
      <MainNav />
    </div>
  );
};

export default Layout;
