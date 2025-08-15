// src/components/Portfolio/SkillsSection.tsx
import React from 'react';
import type { SkillsSectionProps, SkillCategory } from '../../types/portfolioTypes';
import { Code, LayoutList, Smartphone } from 'lucide-react';

const SkillsSection: React.FC<SkillsSectionProps> = ({ skillCategories }) => {
  const getTechIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'html': return <span className="text-orange-500 font-bold">HTML</span>;
      case 'css': return <span className="text-blue-500 font-bold">CSS</span>;
      case 'js': return <span className="text-yellow-500 font-bold">JS</span>;
      case 'react': return <span className="text-blue-400 font-bold">REACT</span>;
      default: return null;
    }
  };

  return (
    <section id="skills" className="relative bg-gray-900 text-gray-300 py-16 sm:py-24 overflow-hidden">
      {/* Background patterns - same as About Me or different subtle one */}
      <div className="absolute inset-0 z-0 opacity-5" style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg width="100%25" height="100%25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpattern id="pg" width="10" height="10" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 0 0 L 10 0 L 10 1 L 0 1 L 0 0 Z M 0 9 L 10 9 L 10 10 L 0 10 L 0 9 Z M 9 0 L 9 10 L 10 10 L 10 0 L 9 0 Z M 0 0 L 0 10 L 1 10 L 1 0 L 0 0 Z" fill="%232d3748"/%3E%3C/pattern%3E%3Crect width="100%25" height="100%25" fill="url(%23pg)"/%3E%3C/svg%3E')` }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 mb-8 flex items-center justify-center">
          <span className="bg-gray-800 p-3 rounded-xl shadow-md border border-gray-700 mr-4">
            Skills
          </span>
          <Code size={40} className="text-gray-600" />
        </h2>
        <p className="text-lg text-gray-400 mb-12">I am always striving to learn new and interesting things.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-700 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-green-400 mb-4 flex items-center justify-center">
                {category.id === 'web-dev' && <LayoutList size={30} className="mr-3" />}
                {category.id === 'app-dev' && <Smartphone size={30} className="mr-3" />}
                {category.name}
              </h3>
              <p className="text-base text-gray-400 mb-8">{category.description}</p>
              <div className="flex flex-wrap justify-center gap-6">
                {category.technologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-2 shadow-inner border border-gray-600">
                      {getTechIcon(tech.icon)}
                    </div>
                    <p className="text-sm text-gray-300 font-medium">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
