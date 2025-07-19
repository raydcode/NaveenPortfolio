import React, { useState } from 'react';
import { Calendar, MapPin, Trophy, Users2, Star, Award, Zap, Target } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Meraki Sport & Entertainment",
      role: "Social Media Manager",
      period: "October 2024 - Present",
      location: "Current Position",
      description: "Managing social media for multiple sports clients, crafting tailored content to boost engagement and brand presence.",
      achievements: [
        "Lead Social Media Manager for Punjab FC with 30% increase in digital engagement",
        "End-to-end content lead for PWR (Pickleball World Rankings) - India's first biggest Pickleball Tournament",
        "Managing Roundglass Sport academies (Hockey, Golf, Tennis)",
        "Contributing to Gujarat Titans IPL 2025 campaigns"
      ],
      color: "from-cyan-500 to-blue-600",
      level: "Senior",
      xp: 850
    },
    {
      company: "Sportwalk",
      role: "Social Media Manager & Content Creator",
      period: "March 2023 - May 2024",
      location: "Sports Industry",
      description: "Managed social media strategies for key franchises and fantasy sports apps, overseeing major campaigns.",
      achievements: [
        "Managed The Bharat Army (2+ million followers) - increased from 1.1M to 1.2M during Cricket World Cup 2023",
        "Created viral meme content with 3M impressions during India vs England match",
        "IPL 2024 Awards campaign attracted 100,000 participants",
        "Social Media Manager for Siechem Madurai Panthers (TNPL 2023)",
        "Managed Fan2Play and Sportasy fantasy sports apps",
        "Show Producer for live fan reactions and real-time updates"
      ],
      color: "from-blue-500 to-indigo-600",
      level: "Expert",
      xp: 1200
    },
    {
      company: "Wipro Technology",
      role: "Technical Support Engineer",
      period: "November 2021 - March 2023",
      location: "IT Services",
      description: "Handled client coordination & software troubleshooting, developed communication and project tracking skills.",
      achievements: [
        "Ensured system reliability and security through comprehensive maintenance",
        "Delivered efficient remote technical support",
        "Proactively analyzed customer complaints and identified trends",
        "Developed strong communication and project management skills"
      ],
      color: "from-teal-500 to-green-600",
      level: "Professional",
      xp: 650
    }
  ];

  const majorProjects = [
    {
      title: "The Bharat Army",
      description: "Team India's largest supporter group with 2+ million followers",
      impact: "1.1M to 1.2M followers growth during Cricket World Cup 2023",
      icon: <Trophy className="w-6 h-6" />,
      rarity: "Legendary",
      color: "from-orange-500/20 to-red-500/20",
      border: "border-orange-400/30"
    },
    {
      title: "Siechem Madurai Panthers",
      description: "TNPL cricket franchise social media management",
      impact: "Complete social media strategy and real-time match coverage",
      icon: <Users2 className="w-6 h-6" />,
      rarity: "Epic",
      color: "from-blue-500/20 to-cyan-500/20",
      border: "border-blue-400/30"
    },
    {
      title: "Fantasy Sports Apps",
      description: "Fan2Play and Sportasy content management",
      impact: "Comprehensive content calendars and user engagement",
      icon: <Target className="w-6 h-6" />,
      rarity: "Rare",
      color: "from-teal-500/20 to-green-500/20",
      border: "border-teal-400/30"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A journey through sports marketing, digital strategy, and technical excellence
          </p>
        </div>


        {/* Experience Timeline */}
        <div className="space-y-12 mb-20">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-slate-900/30 backdrop-blur-xl rounded-2xl border border-cyan-400/20 p-8 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${exp.color}`}></div>
                      <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                      <div className="flex items-center space-x-2 ml-auto">
                        <div className={`px-3 py-1 bg-gradient-to-r ${exp.color} rounded-full text-white text-xs font-semibold`}>
                          {exp.level}
                        </div>
                        <div className="flex items-center space-x-1 bg-orange-500/20 px-2 py-1 rounded-full border border-orange-400/30">
                          <Star className="w-3 h-3 text-orange-400" />
                          <span className="text-orange-300 text-xs font-semibold">{exp.xp} XP</span>
                        </div>
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-white/80 mb-2">{exp.role}</h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-white/60 mb-4">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-white/70 mb-6 leading-relaxed">{exp.description}</p>
                
                <div className="space-y-2">
                  <h5 className="font-semibold text-white mb-3">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${exp.color} mt-2 flex-shrink-0`}></div>
                        <span className="text-white/70">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Major Projects */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Major Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {majorProjects.map((project, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${project.color} backdrop-blur-xl rounded-xl p-6 border ${project.border} hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 group`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2 bg-gradient-to-r ${project.color} backdrop-blur-sm rounded-lg text-cyan-400 border ${project.border} group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-white">{project.title}</h4>
                  <div className={`ml-auto px-2 py-1 bg-gradient-to-r ${project.color} rounded-full border ${project.border}`}>
                    <span className="text-xs font-semibold text-white">{project.rarity}</span>
                  </div>
                </div>
                <p className="text-white/70 mb-3">{project.description}</p>
                <p className="text-sm font-medium text-cyan-400">{project.impact}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;