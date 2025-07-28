import { ArrowDown, Linkedin, Twitter, Instagram, Zap, Star, Trophy, Lightbulb } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const achievements = [
    { icon: <Trophy className="w-5 h-5" />, text: "2M+ Followers Managed", color: "text-orange-400" },
    { icon: <Zap className="w-5 h-5" />, text: "3M Impressions", color: "text-cyan-400" },
    { icon: <Star className="w-5 h-5" />, text: "100K+ Campaign Participants", color: "text-blue-400" }
  ];
  return (
    <motion.section
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 pt-16 relative overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Achievement Badges */}
        <div className="absolute top-32 right-20 animate-bounce delay-300">
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-full p-3 border border-orange-400/30 shadow-lg shadow-orange-500/20">
            <Lightbulb className="w-6 h-6 text-orange-400" />
          </div>
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-700">
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-full p-3 border border-cyan-400/30 shadow-lg shadow-cyan-500/20">
            <Zap className="w-6 h-6 text-cyan-400" />
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center relative z-10">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/30 backdrop-blur-sm border border-cyan-400/30 hover:scale-110 hover:shadow-cyan-500/50 transition-all duration-500 hover:rotate-6 overflow-hidden">
              <img
                src="/IMG-20240531-WA0065.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Main Content */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent animate-pulse">
              Naveen Balaji
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-white/90 mb-8">
            Social & Digital Media Strategist
          </h2>
          
          <p className="text-lg md:text-xl text-white/70 max-w-4xl mx-auto mb-12 leading-relaxed">
            Experienced Social Media Manager skilled at boosting brand visibility, developing strategies, 
            creating engaging content, and managing real-time updates for high-profile sports franchises 
            and major events.
          </p>

          {/* Achievement Badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-slate-900/30 backdrop-blur-xl px-4 py-2 rounded-full border border-white/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <span className={achievement.color}>{achievement.icon}</span>
                <span className="text-white/80 text-sm font-medium">{achievement.text}</span>
              </div>
            ))}
          </div>
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a               href="https://in.linkedin.com/in/naveenbalaji8"
              className="p-3 bg-slate-900/30 backdrop-blur-xl rounded-full border border-cyan-400/30 shadow-lg shadow-cyan-500/20 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-110 hover:bg-cyan-500/20 group"
            >
              <Linkedin className="w-6 h-6 text-cyan-400 group-hover:text-white" />
            </a>
            <a
        href="https://twitter.com/monknaveen"
              className="p-3 bg-slate-900/30 backdrop-blur-xl rounded-full border border-blue-400/30 shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-110 hover:bg-blue-500/20 group"
            >
              <Twitter className="w-6 h-6 text-blue-400 group-hover:text-white" />
            </a>
            <a
        href="https://www.instagram.com/naveen_monk/"
              className="p-3 bg-slate-900/30 backdrop-blur-xl rounded-full border border-orange-400/30 shadow-lg shadow-orange-500/20 hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:scale-110 hover:bg-orange-500/20 group"
            >
              <Instagram className="w-6 h-6 text-orange-400 group-hover:text-white" />
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={scrollToAbout}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-cyan-400/30 hover:from-cyan-400 hover:to-blue-500"
          >
            <span>Explore My Work</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;