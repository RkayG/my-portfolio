import React from 'react';
import Navbar from '../NavBar';
import type { HeroSectionProps } from '../../types/portfolioTypes';
import { Mail, MapPin, Phone, CalendarDays, Download, Award } from 'lucide-react';

const HeroSection: React.FC<HeroSectionProps> = ({ profile, stats }) => {
  const Medal = ({ color, stat, label, rank }: { color: string, stat: string, label: string, rank: string }) => {
    const colorClasses = {
      gold: 'from-yellow-400 via-yellow-500 to-yellow-600 shadow-yellow-500/30',
      silver: 'from-gray-300 via-gray-400 to-gray-500 shadow-gray-400/30',
      bronze: 'from-orange-400 via-orange-500 to-orange-600 shadow-orange-500/30'
    };
    
    return (
      <div className="relative group">
        {/* Medal Container */}
        <div className="bg-gray-800/80 backdrop-blur-sm p-1 rounded-full shadow-2xl border border-gray-600/30 transform hover:scale-110 transition-all duration-300">
          {/* Outer medal ring */}
          <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} p-1 shadow-lg`}>
            {/* Inner medal face */}
            <div className="w-full h-full rounded-full bg-gray-900/90 flex flex-col items-center justify-center relative overflow-hidden">
              {/* Medal pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full bg-gradient-to-br from-white/20 to-transparent rounded-full"></div>
                <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full"></div>
                <div className="absolute bottom-3 right-3 w-1 h-1 bg-white/20 rounded-full"></div>
              </div>
              
              {/* Award icon */}
              <Award size={16} className={`text-${color === 'gold' ? 'yellow' : color === 'silver' ? 'gray' : 'orange'}-400 mb-1 z-10`} />
              
              {/* Stat number */}
              <div className={`text-lg font-bold text-${color === 'gold' ? 'yellow' : color === 'silver' ? 'gray' : 'orange'}-400 z-10`}>
                {stat}+
              </div>
            </div>
          </div>
        </div>
        
        {/* Ribbon/Banner */}
        <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} px-3 py-1 rounded-full text-xs font-bold text-gray-900 shadow-lg min-w-max`}>
          {rank}
        </div>
        
        {/* Label below */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-400 leading-tight font-medium">{label}</p>
        </div>
        
        {/* Hover tooltip */}
        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-30 border border-gray-600">
          Achievement Unlocked!
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45 border-r border-b border-gray-600"></div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <section id="home" className="relative border-y border-white bg-gray-900 text-white py-16 pt-32 sm:py-24 lg:py-32 overflow-hidden min-h-screen-75 flex items-center justify-center">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg width="100%25" height="100%25" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cpattern id="pg" width="10" height="10" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 0 0 L 10 0 L 10 1 L 0 1 L 0 0 Z M 0 9 L 10 9 L 10 10 L 0 10 L 0 9 Z M 9 0 L 9 10 L 10 10 L 10 0 L 9 0 Z M 0 0 L 0 10 L 1 10 L 1 0 L 0 0 Z" fill="%232d3748"/%3E%3C/pattern%3E%3Crect width="100%25" height="100%25" fill="url(%23pg)"/%3E%3C/svg%3E')` }}></div>

      {/* Floating background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 left-10 w-24 h-24 bg-green-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-2000"></div>
        
        {/* Medal sparkles */}
        <div className="absolute top-32 right-32 w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse delay-500"></div>
        <div className="absolute top-48 right-20 w-1 h-1 bg-yellow-400/40 rounded-full animate-pulse delay-1500"></div>
        <div className="absolute top-64 right-40 w-1.5 h-1.5 bg-yellow-400/20 rounded-full animate-pulse delay-3000"></div>
      </div>

      <div className="relative z-10 border border-white w-2/3 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Main Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="text-lg sm:text-xl text-gray-400 font-medium mb-4">
              Hey,
            </p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-2">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                I'm {profile.name.split(' ')[0]},
              </span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-blue-400 mb-8">
              {profile.title}
            </h2>
            <div className="flex items-center justify-center lg:justify-start">
              <span className="text-xl text-green-400 font-medium">Let's Talk 🚀</span>
            </div>
          </div>

          {/* Right Column: Profile Card */}
          <div className="flex-col justify-between">
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-700/50 max-w-sm w-full transform hover:scale-105 transition-all duration-300 hover:shadow-blue-500/20">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <img
                    src={profile.profilePic}
                    alt={profile.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-400/30 shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = `https://placehold.co/80x80/60A5FA/FFFFFF?text=${profile.name.charAt(0)}`;
                    }}
                  />
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-gray-800"></div>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{profile.name}</h3>
                <p className="text-green-400 font-medium mb-4">{profile.title}</p>
                
                <div className="text-sm text-gray-400 space-y-3 mb-6 w-full">
                  <p className="flex items-center justify-center">
                    <Mail size={14} className="mr-2 text-blue-400" />
                    <span className="truncate">{profile.email}</span>
                  </p>
                  <p className="flex items-center justify-center">
                    <MapPin size={14} className="mr-2 text-blue-400" />
                    {profile.location}
                  </p>
                  <p className="flex items-center justify-center">
                    <Phone size={14} className="mr-2 text-blue-400" />
                    {profile.phone}
                  </p>
                  <p className="flex items-center justify-center">
                    <CalendarDays size={14} className="mr-2 text-blue-400" />
                    {profile.availability}
                  </p>
                </div>
                
                <a
                  href={profile.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-blue-500/25 w-full justify-center"
                >
                  <Download size={18} className="mr-2" /> Download CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Medal Stats - Desktop positioning */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col space-y-6 z-20">
          <Medal 
            color="gold" 
            stat={stats.programmingLanguages.toString()} 
            label="Programming Languages" 
            rank="EXPERT"
          />
          <Medal 
            color="silver" 
            stat={stats.developmentTools.toString()} 
            label="Development Tools" 
            rank="ADVANCED"
          />
          <Medal 
            color="bronze" 
            stat={stats.yearsExperience.toString()} 
            label="Years Experience" 
            rank="VETERAN"
          />
        </div>
        </div>

        {/* Mobile medals - shown on smaller screens */}
        <div className="xl:hidden mt-12 flex justify-center space-x-6 overflow-x-auto pb-4">
          <div className="flex-shrink-0">
            <Medal 
              color="gold" 
              stat={stats.programmingLanguages.toString()} 
              label="Languages" 
              rank="EXPERT"
            />
          </div>
          <div className="flex-shrink-0">
            <Medal 
              color="silver" 
              stat={stats.developmentTools.toString()} 
              label="Tools" 
              rank="ADVANCED"
            />
          </div>
          <div className="flex-shrink-0">
            <Medal 
              color="bronze" 
              stat={stats.yearsExperience.toString()} 
              label="Experience" 
              rank="VETERAN"
            />
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default HeroSection;