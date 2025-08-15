// src/components/Portfolio/Header.tsx
import React, { useState } from 'react';
import { Search, Menu, X, Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import type { HeaderProps, SocialLink } from '../../types/portfolioTypes';

const Header: React.FC<HeaderProps> = ({ socialLinks }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'instagram': return <Instagram size={20} />;
      case 'twitter': return <Twitter size={20} />;
      case 'github': return <Github size={20} />;
      case 'linkedin': return <Linkedin size={20} />;
      default: return null;
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-gray-900 py-4 px-4 sm:px-6 lg:px-8 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo/Name */}
        <div className="flex items-center text-white text-xl font-bold">
          <span className="text-blue-400">&lt;/&gt;</span>
          <span className="ml-2">SinanTekmak</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#home" className="text-gray-300 hover:text-blue-400 transition-colors">Home</a>
          <a href="#blogs" className="text-gray-300 hover:text-blue-400 transition-colors">Blogs</a>
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="bg-gray-700 text-gray-300 rounded-full py-1.5 pl-8 pr-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <Search size={16} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
          {socialLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
              {getSocialIcon(link.icon)}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-blue-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-50 flex flex-col items-center justify-center space-y-8">
          <button
            className="absolute top-4 right-4 text-gray-300 hover:text-blue-400"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={32} />
          </button>
          <a href="#home" className="text-white text-3xl font-bold hover:text-blue-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#blogs" className="text-white text-3xl font-bold hover:text-blue-400 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Blogs</a>
          <div className="flex space-x-6 mt-8">
            {socialLinks.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;