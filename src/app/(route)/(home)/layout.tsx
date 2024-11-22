import React, { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Homelayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="relative min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex">
        {/* Sidebar Section */}
        <Sidebar />
        
        {/* Main Content Section */}
        <section className="flex-grow py-6 px-4 bg-dark-2">
          <div>{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Homelayout;
