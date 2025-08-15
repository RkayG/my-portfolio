import React from 'react';
import { Instagram, Twitter, Github, Linkedin } from 'lucide-react';
import type { SocialSidebarProps, SocialLink } from '../../types/portfolioTypes';

const SocialSidebar: React.FC<SocialSidebarProps> = ({ socialLinks }) => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'instagram': return <Instagram size={24} />;
      case 'twitter': return <Twitter size={24} />;
      case 'github': return <Github size={24} />;
      case 'linkedin': return <Linkedin size={24} />;
      default: return null;
    }
  };

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-6 bg-gray-800 p-3 rounded-r-lg shadow-lg z-30 hidden lg:flex">
      {socialLinks.map((link) => (
        <a
          key={link.url}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
          aria-label={link.icon}
        >
          {getSocialIcon(link.icon)}
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;
