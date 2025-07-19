import React, { useState } from 'react';
import { Menu, X, User, Briefcase, Award, Mail, Trophy } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [score, setScore] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setScore(prev => prev + 10); // Gamification: Award points for navigation
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-slate-900/20 backdrop-blur-xl border-b border-cyan-400/30 z-50 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            {/* <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"> */}
              {/* <span className="text-white font-bold text-sm">⚡</span> */}
            {/* </div> */}
            <span className="font-bold text-xl text-white">Hey I'm Naveen 👋</span>
          </div>

          {/* Gamification Score */}
          <div className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-400/30">
            <Trophy className="w-4 h-4 text-orange-400" />
            <span className="text-orange-300 font-semibold text-sm">Explorer Score: {score}</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center space-x-1 text-cyan-200 hover:text-white transition-all duration-300 hover:bg-cyan-500/20 px-3 py-2 rounded-lg backdrop-blur-sm border border-transparent hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/20"
            >
              <User size={16} />
              <span>About</span>
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="flex items-center space-x-1 text-cyan-200 hover:text-white transition-all duration-300 hover:bg-blue-500/20 px-3 py-2 rounded-lg backdrop-blur-sm border border-transparent hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/20"
            >
              <Briefcase size={16} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="flex items-center space-x-1 text-cyan-200 hover:text-white transition-all duration-300 hover:bg-orange-500/20 px-3 py-2 rounded-lg backdrop-blur-sm border border-transparent hover:border-orange-400/30 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <Award size={16} />
              <span>Skills</span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center space-x-1 text-cyan-200 hover:text-white transition-all duration-300 hover:bg-teal-500/20 px-3 py-2 rounded-lg backdrop-blur-sm border border-transparent hover:border-teal-400/30 hover:shadow-lg hover:shadow-teal-500/20"
            >
              <Mail size={16} />
              <span>Contact</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-cyan-500/20 transition-all duration-300 text-white backdrop-blur-sm border border-transparent hover:border-cyan-400/30"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-400/30 bg-slate-900/30 backdrop-blur-xl">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="flex items-center space-x-2 text-cyan-200 hover:text-white transition-all duration-300 hover:bg-cyan-500/20 px-3 py-2 rounded-lg border border-transparent hover:border-cyan-400/30"
              >
                <User size={16} />
                <span>About</span>
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="flex items-center space-x-2 text-cyan-200 hover:text-white transition-all duration-300 hover:bg-blue-500/20 px-3 py-2 rounded-lg border border-transparent hover:border-blue-400/30"
              >
                <Briefcase size={16} />
                <span>Experience</span>
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="flex items-center space-x-2 text-cyan-200 hover:text-white transition-all duration-300 hover:bg-orange-500/20 px-3 py-2 rounded-lg border border-transparent hover:border-orange-400/30"
              >
                <Award size={16} />
                <span>Skills</span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center space-x-2 text-cyan-200 hover:text-white transition-all duration-300 hover:bg-teal-500/20 px-3 py-2 rounded-lg border border-transparent hover:border-teal-400/30"
              >
                <Mail size={16} />
                <span>Contact</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;