// src/types/portfolioTypes.ts

export interface SocialLink {
  icon: string; // Lucide icon name or similar (e.g., 'Instagram', 'Twitter')
  url: string;
}

export interface ProfileInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  phone: string;
  availability: string;
  profilePic: string;
  cvUrl: string;
}

export interface DeveloperStats {
  programmingLanguages: number;
  developmentTools: number;
  yearsExperience: number;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  technologies: { icon: string; name: string }[];
}

export interface HeaderProps {
  socialLinks: SocialLink[];
}

export interface SocialSidebarProps {
  socialLinks: SocialLink[];
}

export interface HeroSectionProps {
  profile: ProfileInfo;
  stats: DeveloperStats;
}

export interface AboutMeSectionProps {
  aboutText: string;
  profileImage: string;
}

export interface SkillsSectionProps {
  skillCategories: SkillCategory[];
}