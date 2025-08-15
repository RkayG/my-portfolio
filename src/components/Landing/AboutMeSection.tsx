// src/components/Portfolio/AboutMeSection.tsx
import React from 'react';
import type { AboutMeSectionProps } from '../../types/portfolioTypes';
import { Code } from 'lucide-react';

const AboutMeSection: React.FC<AboutMeSectionProps> = ({ aboutText, profileImage }) => {
  return (
    <section id="about" className="relative bg-gray-900 text-gray-300 py-16 sm:py-24 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg width="100%25" height="100%25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpattern id="pg" width="10" height="10" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 0 0 L 10 0 L 10 1 L 0 1 L 0 0 Z M 0 9 L 10 9 L 10 10 L 0 10 L 0 9 Z M 9 0 L 9 10 L 10 10 L 10 0 L 9 0 Z M 0 0 L 0 10 L 1 10 L 1 0 L 0 0 Z" fill="%232d3748"/%3E%3C/pattern%3E%3Crect width="100%25" height="100%25" fill="url(%23pg)"/%3E%3C/svg%3E')` }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* About Me Text Content */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-8 flex items-center">
            <span className="bg-gray-800 p-3 rounded-xl shadow-md border border-gray-700 mr-4">
              About Me
            </span>
          </h2>
          <div className="bg-gray-800 p-6 rounded-xl shadow-md border border-gray-700 text-lg leading-relaxed space-y-4">
            <p>
              Hello! 👋 My name is Sinan and I specialize in web development that utilizes **HTML, CSS, JS, React, and Node.js**.
            </p>
            <p>
              I am a highly motivated individual and detail oriented, dedicated to writing clean, efficient, and well-documented code. I am passionate about **front-end development** and creating beautiful, user-friendly interfaces.
            </p>
            <p>
              Outside of coding, I enjoy **learning new** technologies, and pushing to learn new hands-on to be up to date. I'm always looking for new challenges that will allow me to expand my skillset.
            </p>
            <p>
              I thrive on problem-solving and believe in continuous learning. I am driven by results and enjoy working in collaborative environments.
            </p>
          </div>
        </div>

        {/* About Me Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={profileImage}
            alt="Sinan working"
            className="w-full max-w-md h-auto rounded-xl shadow-2xl border-4 border-gray-700 object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/400x300/60A5FA/FFFFFF?text=About+Me+Image`;
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
