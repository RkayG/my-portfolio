// src/pages/PortfolioPage.tsx
import React from 'react';
import Header from '../components/Landing/PortfolioHeader';
import SocialSidebar from '../components/Landing/SocialSidebar';
import HeroSection from '../components/Landing/PortfolioHeroSection';
import AboutMeSection from '../components/Landing/AboutMeSection';
import SkillsSection from '../components/Landing/SkillsSection';
import type { SocialLink, ProfileInfo, DeveloperStats, SkillCategory } from '../types/portfolioTypes';

const LandingPage: React.FC = () => {
  // Mock Data
  const socialLinks: SocialLink[] = [
    { icon: 'Instagram', url: 'https://instagram.com/sinantekmak' },
    { icon: 'Twitter', url: 'https://twitter.com/sinantekmak' },
    { icon: 'Github', url: 'https://github.com/sinantekmak' },
    { icon: 'Linkedin', url: 'https://linkedin.com/in/sinantekmak' },
  ];

  const profileInfo: ProfileInfo = {
    name: 'Sinan',
    title: 'Full-Stack Developer',
    email: 'sinan_dev@email.com',
    location: 'Istanbul, Turkey',
    phone: '+90 5XX XXX XX XX',
    availability: 'Full Time / Freelancer',
    profilePic: 'https://placehold.co/96x96/60A5FA/FFFFFF?text=Sinan', // Placeholder image
    cvUrl: '/path/to/your/cv.pdf', // Placeholder CV link
  };

  const developerStats: DeveloperStats = {
    programmingLanguages: 4,
    developmentTools: 6,
    yearsExperience: 8,
  };

  const skillCategories: SkillCategory[] = [
    {
      id: 'web-dev',
      name: 'Web Development',
      description: 'I build responsive, modern, and high-performance web applications.',
      technologies: [
        { icon: 'html', name: 'HTML' },
        { icon: 'css', name: 'CSS' },
        { icon: 'js', name: 'JS' },
        { icon: 'react', name: 'REACT' },
      ],
    },
    {
      id: 'app-dev',
      name: 'App Development',
      description: 'Developing mobile-first applications with intuitive user interfaces.',
      technologies: [
        { icon: 'swift', name: 'Swift' }, // Example for app dev, adjust as needed
        { icon: 'java', name: 'Java' },   // Example for app dev, adjust as needed
        { icon: 'flutter', name: 'Flutter' }, // Example for app dev, adjust as needed
      ],
    },
  ];

  return (
    <div
      className="bg-gray-950 min-h-screen text-gray-200 font-sans"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg width=\"100%25\" height=\"100%25\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpattern id=\"pg\" width=\"10\" height=\"10\" patternUnits=\"userSpaceOnUse\"%3E%3Cpath d=\"M 0 0 L 10 0 L 10 1 L 0 1 L 0 0 Z M 0 9 L 10 9 L 10 10 L 0 10 L 0 9 Z M 9 0 L 9 10 L 10 10 L 10 0 L 9 0 Z M 0 0 L 0 10 L 1 10 L 1 0 L 0 0 Z\" fill=\"%232d3748\"/%3E%3C/pattern%3E%3Crect width=\"100%25\" height=\"100%25\" fill=\"url(%23pg)\"/%3E%3C/svg%3E')"
      }}
    >
 
      <SocialSidebar socialLinks={socialLinks} />
      <main className=""> {/* Adjust pt to account for fixed header height */}
        <HeroSection profile={profileInfo} stats={developerStats} />
        <AboutMeSection
          aboutText="Your detailed 'About Me' content goes here, explaining your passion, skills, and experience in web and software development. Mention your preferred technologies, work ethic, and what you enjoy outside of coding."
          profileImage="https://placehold.co/800x600/60A5FA/FFFFFF?text=About+Me+Image" // Placeholder image for About Me
        />
        <SkillsSection skillCategories={skillCategories} />
      </main>
      {/* You can add a Footer component here if needed */}
    </div>
  );
};

export default LandingPage;
