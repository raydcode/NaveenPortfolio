import React, { useState } from 'react';
import { TrendingUp, Users, Target, Zap, Award, Star, Trophy, Medal } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const About = () => {
  const highlights = [
    {
      icon: <TrendingUp className="w-8 h-8 text-cyan-400" />,
      title: "Brand Growth",
      description: "Increased The Bharat Army followers from 1.1M to 1.2M during Cricket World Cup 2023",
      level: "Expert",
      points: 95
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Engagement Expert",
      description: "IPL 2024 Awards campaign attracted 100,000 participants with viral content strategies",
      level: "Master",
      points: 98
    },
    {
      icon: <Target className="w-8 h-8 text-teal-400" />,
      title: "Strategic Planning",
      description: "Developed comprehensive content calendars and executed campaigns for major sporting events",
      level: "Expert",
      points: 92
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-400" />,
      title: "Viral Content",
      description: "Created viral meme content with 3M impressions during India vs England Cricket World Cup match",
      level: "Legendary",
      points: 100
    }
  ];

  const achievements = [
    { icon: <Trophy className="w-6 h-6" />, title: "Sports Marketing Pro", color: "text-orange-400", bg: "from-orange-500/20 to-red-500/20", border: "border-orange-400/30" },
    { icon: <Star className="w-6 h-6" />, title: "Viral Content Creator", color: "text-cyan-400", bg: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-400/30" },
    { icon: <Medal className="w-6 h-6" />, title: "Campaign Master", color: "text-blue-400", bg: "from-blue-500/20 to-indigo-500/20", border: "border-blue-400/30" },
    { icon: <Award className="w-6 h-6" />, title: "Brand Growth Expert", color: "text-teal-400", bg: "from-teal-500/20 to-green-500/20", border: "border-teal-400/30" }
  ];
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="about" className="py-14 sm:py-20 bg-gradient-to-br from-blue-900 via-slate-900 to-teal-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-6 sm:top-10 right-4 sm:right-20 w-40 h-40 sm:w-64 sm:h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-20 w-52 h-52 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-28 h-28 sm:w-48 sm:h-48 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-base sm:text-xl text-white/70 max-w-3xl mx-auto">
            A passionate digital strategist with expertise in amplifying brand presence and driving impactful social media campaigns
          </p>
        </div>

        {/* Achievement Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-10 sm:mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`bg-gradient-to-r ${achievement.bg} backdrop-blur-xl rounded-xl p-2 sm:p-4 border ${achievement.border} hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 text-center group`}
            >
              <div className={`${achievement.color} mb-1 sm:mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300`}>
                {achievement.icon}
              </div>
              <h4 className="text-white font-semibold text-xs sm:text-sm">{achievement.title}</h4>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center mb-10 sm:mb-16">
          <div className="bg-slate-900/30 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-cyan-400/20 hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">My Journey</h3>
            <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              I'm a seasoned Social Media Manager with experience in enhancing brand visibility and engaging 
              audiences across various platforms. I specialize in developing and executing comprehensive social 
              media strategies for high-profile sports franchises and major events.
            </p>
            <p className="text-white/70 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              My expertise lies in crafting strategic content plans, maintaining detailed content calendars, 
              and delivering real-time updates. I'm recognized for innovative content creation and effective 
              fan engagement, with a strong ability to amplify brand presence.
            </p>
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              From managing The Bharat Army's 2+ million followers to creating viral content during major 
              cricket tournaments, I bring creativity, strategy, and results to every project.
            </p>
          </div>
          
          <div className="relative w-full">
            <div className="w-full h-60 sm:h-96 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl flex items-center justify-center border border-cyan-400/30 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-500 overflow-hidden">
              <Swiper
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[Autoplay]}
                className="w-full h-60 sm:h-96"
              >
                <SwiperSlide>
                  <img src="/Portfolio Pics/Image for Homepage/IMG_20230201_185800_425.jpg" alt="Portfolio 1" className="object-contain w-full h-full rounded-2xl bg-black" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/Portfolio Pics/Image for Homepage/IMG_0120.jpg" alt="Portfolio 2" className="object-contain w-full h-full rounded-2xl bg-black" />
                </SwiperSlide>
                <SwiperSlide>
                  <img src="/Portfolio Pics/Image for Homepage/Picsart_23-09-15_01-39-21-257.jpg" alt="Portfolio 3" className="object-contain w-full h-full rounded-2xl bg-black" />
                </SwiperSlide>
              </Swiper>
            </div>
            <p className="text-white/70 font-medium text-center mt-2 sm:mt-4 text-sm sm:text-base">Professional Portfolio Gallery</p>
            <div className="flex justify-center mt-2">
              <button
                onClick={() => setShowModal(true)}
                className="px-3 py-2 sm:px-4 sm:py-2 bg-cyan-600 text-white rounded-full shadow hover:bg-cyan-700 transition-all duration-300 text-sm sm:text-base"
              >
                View All Photos
              </button>
            </div>
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-2 sm:px-0">
                <div className="bg-white rounded-2xl p-3 sm:p-6 max-w-full sm:max-w-4xl w-full relative overflow-y-auto max-h-[90vh]">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
                  >
                    &times;
                  </button>
                  <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-4 text-center text-cyan-700">All Portfolio Photos</h3>
                  <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
                    <img src="/Portfolio Pics/Image for Homepage/IMG_20230201_185800_425.jpg" alt="Portfolio 1" className="object-contain w-full h-40 sm:h-64 rounded-lg shadow bg-black" />
                    <img src="/Portfolio Pics/Image for Homepage/IMG_0120.jpg" alt="Portfolio 2" className="object-contain w-full h-40 sm:h-64 rounded-lg shadow bg-black" />
                    <img src="/Portfolio Pics/Image for Homepage/Picsart_23-09-15_01-39-21-257.jpg" alt="Portfolio 3" className="object-contain w-full h-40 sm:h-64 rounded-lg shadow bg-black" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-slate-900/30 backdrop-blur-xl p-4 sm:p-6 rounded-xl border border-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="mb-2 sm:mb-4 group-hover:scale-110 transition-transform duration-300">{highlight.icon}</div>
              <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{highlight.title}</h4>
              <p className="text-white/70 text-xs sm:text-sm">{highlight.description}</p>
              
              {/* Gamification Elements */}
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/10">
                <div className="flex justify-between items-center mb-1 sm:mb-2">
                  <span className="text-xs font-medium text-cyan-400">{highlight.level}</span>
                  <span className="text-xs text-white/60">{highlight.points}/100</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                    style={{ width: `${highlight.points}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;