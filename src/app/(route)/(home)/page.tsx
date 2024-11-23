"use client";
import React from 'react';

const HomePage = () => {
  return (
    <div className="block size-full bg-slate-400 text-white">
      {/* Header */}
      <header className="bg-dark-1 p-6 shadow-md">
        <h1 className="text-3xl font-semibold text-center md:text-left">
          Welcome to the Home Page
        </h1>
        <p className="text-lg mt-2 text-center md:text-left">
          Explore our features and get started!
        </p>
      </header>

      {/* Main Content */}
      <main className="p-4 space-y-8 md:p-8">
        <section className="bg-dark-2 p-4 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            Featured Section
          </h2>
          <p className="text-lg text-center md:text-left">
            This is where you can highlight the key features of your site or application.
          </p>
        </section>

        <section className="bg-dark-2 p-4 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
            Explore More
          </h2>
          <p className="text-lg text-center md:text-left">
            Here, you can provide additional details or direct users to more content or pages.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-dark-1 p-6 text-center mt-8">
        <p className="text-lg">&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
