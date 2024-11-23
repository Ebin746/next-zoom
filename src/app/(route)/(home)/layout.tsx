import React, { ReactNode } from 'react';
import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Homelayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className="relative min-h-screen bg-gray-100">
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-dark-1 shadow-md">
        <Navbar />
      </div>

      {/* Content Layout */}
      <div className="flex flex-col lg:flex-row mt-16">
        {/* Sidebar Section */}
        <aside
          className="hidden lg:block lg:w-1/4 bg-dark-1 shadow-md overflow-y-auto z-40"
        >
          <Sidebar />
        </aside>

        {/* Main Content Section */}
        <section className="flex-grow w-full lg:w-3/4 max-h-full bg-dark-2 pt-12 lg:p-8 z-10">
          <div>{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Homelayout;
