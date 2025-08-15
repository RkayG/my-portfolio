import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { label: 'Products', href: '#products' },
    { label: 'Templates', href: '#templates' },
    { label: 'Marketplace', href: '#marketplace' },
    { label: 'Learn', href: '#learn' },
    { label: 'Pricing', href: '#pricing' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (href: string) => {
    // Handle navigation logic here
    console.log(`Navigating to: ${href}`);
    setIsMenuOpen(false);
  };

  const handleAuthClick = (action: 'login' | 'signup') => {
    // Handle authentication logic here
    console.log(`${action} clicked`);
    setIsMenuOpen(false);
  };

  return (
    <div className={`w-full py-6 ${className}`}>
      {/* Background gradient for demo */}
      <div className="fixed inset-0  -z-10"></div>
      
      <nav className="bg-white/95 backdrop-blur-md lg:rounded-full  rounded-4xl px-6 py-3 max-w-6xl mx-auto shadow-lg border border-white/20">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="flex items-center text-xl font-bold text-gray-800 hover:text-green-600 transition-colors duration-200"
            >
              Gladness R.
              <span className="text-green-600 ml-1">✦</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* <button
              onClick={() => handleAuthClick('login')}
              className="text-gray-700 hover:text-green-600 font-medium px-4 py-2 rounded-full transition-colors duration-200"
            >
              Log in
            </button> */}
            <button
              onClick={() => handleAuthClick('signup')}
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-6 py-2 rounded-full transition-colors duration-200 shadow-md"
            >
              Hire me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-700 hover:text-green-600 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 border-t border-gray-200/50 mt-4">
            {/* Mobile Navigation Links */}
            <div className="space-y-2 mb-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="block px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Auth Buttons */}
            <div className="space-y-2 pt-2 border-t border-gray-200/50">
              {/* <button
                onClick={() => handleAuthClick('login')}
                className="w-full text-left px-4 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-all duration-200"
              >
                Log in
              </button> */}
              <button
                onClick={() => handleAuthClick('signup')}
                className="w-full bg-gray-800 hover:bg-gray-900 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 shadow-md"
              >
                Hire me
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;