import React from 'react';
import { 
  Instagram, 
  Twitter, 
  Facebook, 
  Youtube, 
  Linkedin,
  Palette,
  BarChart3,
  Megaphone,
  Brain,
  Camera,
  PenTool,
  Star,
  Trophy,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Social Platforms",
      icon: <Instagram className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-600",
      level: "Master",
      xp: 950,
      skills: [
        { name: "Instagram", level: 95 },
        { name: "Twitter", level: 90 },
        { name: "Facebook", level: 85 },
        { name: "YouTube", level: 80 },
        { name: "LinkedIn", level: 85 },
        { name: "Threads", level: 75 }
      ]
    },
    {
      title: "Design & Video Tools",
      icon: <Palette className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      level: "Expert",
      xp: 820,
      skills: [
        { name: "Adobe Photoshop", level: 80 },
        { name: "Adobe Premiere Pro", level: 75 },
        { name: "Canva", level: 95 },
        { name: "CapCut", level: 90 },
        { name: "PicsArt", level: 85 },
        { name: "InShot", level: 80 }
      ]
    },
    {
      title: "Analytics & Advertising",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-teal-500 to-green-600",
      level: "Expert",
      xp: 780,
      skills: [
        { name: "Meta Business Suite", level: 85 },
        { name: "Social Media Analytics", level: 90 },
        { name: "Campaign Reporting", level: 85 },
        { name: "Engagement Tracking", level: 90 }
      ]
    },
    {
      title: "Content Creation",
      icon: <PenTool className="w-6 h-6" />,
      color: "from-orange-500 to-red-600",
      level: "Legendary",
      xp: 1000,
      skills: [
        { name: "Copywriting", level: 95 },
        { name: "Content Ideation", level: 90 },
        { name: "Campaign Strategy", level: 85 },
        { name: "Brand Voice Development", level: 80 }
      ]
    },
    {
      title: "AI Tools",
      icon: <Brain className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-600",
      level: "Advanced",
      xp: 720,
      skills: [
        { name: "ChatGPT", level: 90 },
        { name: "Midjourney", level: 85 },
        { name: "Runway AI", level: 75 },
        { name: "Notion AI", level: 80 }
      ]
    },
    {
      title: "Community Management",
      icon: <Megaphone className="w-6 h-6" />,
      color: "from-emerald-500 to-teal-600",
      level: "Expert",
      xp: 880,
      skills: [
        { name: "Instagram Broadcast", level: 85 },
        { name: "WhatsApp Community", level: 80 },
        { name: "Client Handling", level: 90 },
        { name: "Team Coordination", level: 85 }
      ]
    }
  ];

  const certifications = [
    { name: "Google Garage Digital Marketing Certified", rarity: "Epic", color: "from-blue-500/20 to-cyan-500/20", border: "border-blue-400/30" },
    { name: "Digital Marketing from Rajasthan Royals", rarity: "Legendary", color: "from-orange-500/20 to-red-500/20", border: "border-orange-400/30" }
  ];

  const getLevelColor = (level: string) => {
    switch(level) {
      case "Legendary": return "text-orange-400";
      case "Master": return "text-cyan-400";
      case "Expert": return "text-blue-400";
      case "Advanced": return "text-purple-400";
      default: return "text-teal-400";
    }
  };
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-indigo-900 via-slate-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A comprehensive toolkit for modern digital marketing and social media management
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-slate-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className={`text-sm font-semibold ${getLevelColor(category.level)}`}>{category.level}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-orange-400" />
                      <span className="text-orange-300 text-xs">{category.xp} XP</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/80 font-medium">{skill.name}</span>
                      <span className="text-white/60 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-800/50 rounded-full h-2 backdrop-blur-sm">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-slate-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-gradient-to-r ${cert.color} backdrop-blur-xl rounded-xl p-6 border ${cert.border} hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 group flex items-center space-x-4`}
              >
                <div className={`p-3 bg-gradient-to-r ${cert.color} rounded-lg border ${cert.border} group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <Trophy className="w-6 h-6 text-cyan-400" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <span className="text-white font-medium mb-2 md:mb-0">{cert.name}</span>
                  <div className={`inline-block ml-0 md:ml-2 px-2 py-1 bg-gradient-to-r ${cert.color} rounded-full border ${cert.border} mt-2 md:mt-0 self-start md:self-auto`}>
                    <span className="text-xs font-semibold text-white">{cert.rarity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Focus */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Industry Focus</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Brand Marketing', 'Brand Management', 'Digital Campaigns', 'Creative Strategy', 'Audience Growth', 'Content Producer'].map((industry, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-medium hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-cyan-400/30"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;