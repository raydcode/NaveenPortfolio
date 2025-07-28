
import React from 'react';
import { Heart, Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/50 backdrop-blur-xl border-t border-cyan-400/20 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              {/* <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-sm">NB</span>
              </div> */}
              <span className="font-bold text-xl">Hey I'm Naveen </span>
              {/* <div className="flex items-center space-x-1 bg-orange-500/20 px-2 py-1 rounded-full border border-orange-400/30">
                {/* <Trophy className="w-3 h-3 text-orange-400" /> */}
                {/* <span className="text-orange-300 text-xs font-semibold">Pro</span> */}
              {/* </div> */} 
            </div>
            <p className="text-white/60 leading-relaxed">
              Social & Digital Media Strategist passionate about creating engaging content 
              and driving brand growth through innovative campaigns.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-cyan-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="space-y-2 mb-6">
              <p className="text-white/60">naveenbalaji786@gmail.com</p>
              <p className="text-white/60">+91 87786 46349</p>
            </div>
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-cyan-400/30 hover:bg-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5 text-cyan-400" />
              </a>
              <a
                href="https://in.linkedin.com/in/naveenbalaji8"
                className="p-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-blue-400/30 hover:bg-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:scale-110"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
              </a>
              <a
              href="https://x.com/monknaveen"
                className="p-2 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-orange-400/30 hover:bg-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-5 h-5 text-orange-400" /><a href="https://www.instagram.com/naveen_monk/"></a>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cyan-400/20 mt-8 pt-8 text-center">
          <p className="text-white/60 flex items-center justify-center space-x-1">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>by Naveen Balaji © 2025</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;