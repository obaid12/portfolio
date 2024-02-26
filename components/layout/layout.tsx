import React from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner';
import { useRouter } from 'next/router';
import Experience from '../Experience';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  // Exclude layout from the homepage
  if (router.pathname === '/') {
    return <>{children}</>;
  }

  // Apply layout to other pages
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 text-white py-4">
        <div className="container mx-auto px-4">
          <Banner />
        </div>

      </div>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </>
  );
};

export default Layout;





