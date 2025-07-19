import React, { useState } from 'react';
import { Trophy, Target, TrendingUp, Users, Award, Zap, Star, Medal, Crown } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Campaigns = () => {
  const campaigns = [
    {
      title: "Cricket World Cup 2023",
      description: "Managed The Bharat Army's social media during the tournament, creating viral content and real-time updates.",
      impact: "3M impressions on viral meme content, 100K follower growth",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-orange-500 to-red-600",
      tags: ["Cricket", "Viral Content", "Real-time Updates"],
      rarity: "Legendary",
      xp: 500
    },
    {
      title: "IPL 2024 Awards Campaign",
      description: "Orchestrated comprehensive awards campaign with fan voting, quizzes, and interactive content.",
      impact: "100,000 participants, extensive team and player interactions",
      icon: <Award className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-600",
      tags: ["IPL", "Fan Engagement", "Awards"],
      rarity: "Epic",
      xp: 400
    },
    {
      title: "The Bharat Army Ultimate Predictor",
      description: "Interactive prediction campaign engaging fans across multiple cricket tournaments.",
      impact: "Increased user signups and email collection for future marketing",
      icon: <Target className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      tags: ["Predictions", "User Engagement", "Data Collection"],
      rarity: "Rare",
      xp: 300
    },
    {
      title: "TNPL 2023 - Siechem Madurai Panthers",
      description: "Complete social media management including matchday content, player features, and fan engagement.",
      impact: "Dynamic online presence throughout the tournament",
      icon: <Users className="w-8 h-8" />,
      color: "from-teal-500 to-green-600",
      tags: ["TNPL", "Team Management", "Content Creation"],
      rarity: "Epic",
      xp: 350
    },
    {
      title: "National Sports Day Quiz",
      description: "Educational and engaging quiz campaign celebrating Indian sports achievements.",
      impact: "High engagement rates and brand awareness",
      icon: <Zap className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-600",
      tags: ["Education", "Sports", "Quiz"],
      rarity: "Common",
      xp: 200
    },
    {
      title: "PWR DUPR India Masters",
      description: "India's first biggest Pickleball Tournament - complete content strategy and audience education.",
      impact: "Successfully introduced pickleball to Indian audience",
      icon: <TrendingUp className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      tags: ["Pickleball", "Tournament", "Education"],
      rarity: "Epic",
      xp: 450
    }
  ];

  const campaignStats = [
    { number: "3M+", label: "Impressions Generated", icon: <TrendingUp className="w-6 h-6" />, color: "from-cyan-500/20 to-blue-500/20", border: "border-cyan-400/30" },
    { number: "100K+", label: "Campaign Participants", icon: <Users className="w-6 h-6" />, color: "from-blue-500/20 to-indigo-500/20", border: "border-blue-400/30" },
    { number: "2M+", label: "Followers Managed", icon: <Target className="w-6 h-6" />, color: "from-teal-500/20 to-green-500/20", border: "border-teal-400/30" },
    { number: "50+", label: "Successful Campaigns", icon: <Trophy className="w-6 h-6" />, color: "from-orange-500/20 to-red-500/20", border: "border-orange-400/30" }
  ];

  const getRarityIcon = (rarity: string) => {
    switch(rarity) {
      case "Legendary": return <Crown className="w-4 h-4 text-orange-400" />;
      case "Epic": return <Star className="w-4 h-4 text-purple-400" />;
      case "Rare": return <Medal className="w-4 h-4 text-blue-400" />;
      default: return <Trophy className="w-4 h-4 text-gray-400" />;
    }
  };

  const getRarityColor = (rarity: string) => {
    switch(rarity) {
      case "Legendary": return "text-orange-400 border-orange-400/30 bg-orange-500/20";
      case "Epic": return "text-purple-400 border-purple-400/30 bg-purple-500/20";
      case "Rare": return "text-blue-400 border-blue-400/30 bg-blue-500/20";
      default: return "text-gray-400 border-gray-400/30 bg-gray-500/20";
    }
  };
  const [showModal, setShowModal] = useState(false);
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden">
      {/* Background Elements */}
      <div >
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Campaign <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Strategic campaigns that drive engagement, increase followers, and create viral moments
          </p>
          <div className="w-full max-w-2xl mx-auto mt-8">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full h-100 rounded-2xl overflow-hidden shadow-lg"
            >
              <SwiperSlide>
                <img src="/Portfolio Pics/Campaigns/PFC Campaign 1.png" alt="Campaign 1" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Portfolio Pics/Campaigns/PFC Campaign.png" alt="Campaign 2" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Portfolio Pics/Campaigns/Punjab FC Campaign.png" alt="Campaign 3" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Portfolio Pics/Campaigns/Screenshot 2024-08-05 151232.png" alt="Campaign 4" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Portfolio Pics/Campaigns/Screenshot 2024-08-05 150817.png" alt="Campaign 5" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Portfolio Pics/Campaigns/BA Awards.jpg" alt="Campaign 6" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
            </Swiper>

      <div className="flex justify-center mt-4" 
        // style={{ zIndex: 1000, position: 'relative' }}
        >
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-cyan-600 text-white rounded-full shadow hover:bg-cyan-700 transition-all duration-300"
            aria-label="View All Campaigns"
          //  style={{ zIndex: 1000 }}
          >
            View All Campaigns
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-2">
            <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto flex flex-col">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-3xl font-bold z-10 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                style={{ lineHeight: 1 }}
                aria-label="Close"
              >
                &times;
              </button>
              <h3 className="text-xl font-bold mb-4 text-center text-cyan-700 mt-8 sm:mt-0">All Campaign Photos</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <img src="/Portfolio Pics/Campaigns/PFC Campaign 1.png" alt="Campaign 1" className="object-contain w-full h-48 sm:h-64 rounded-lg shadow bg-black" />
                <img src="/Portfolio Pics/Campaigns/PFC Campaign.png" alt="Campaign 2" className="object-contain w-full h-48 sm:h-64 rounded-lg shadow bg-black" />
                <img src="/Portfolio Pics/Campaigns/Punjab FC Campaign.png" alt="Campaign 3" className="object-contain w-full h-48 sm:h-64 rounded-lg shadow bg-black" />
                <img src="/Portfolio Pics/Campaigns/Screenshot 2024-08-05 151232.png" alt="Campaign 4" className="object-contain w-full h-48 sm:h-64 rounded-lg shadow bg-black" />
                <img src="/Portfolio Pics/Campaigns/Screenshot 2024-08-05 150817.png" alt="Campaign 5" className="object-contain w-full h-48 sm:h-64 rounded-lg shadow bg-black" />
                <img src="/Portfolio Pics/Campaigns/BA Awards.jpg" alt="Campaign 6" className="object-contain w-full h-48 sm:h-64 rounded-lg shadow bg-black" />
              </div>
            </div>
          </div>
        )}
          </div>

      
        </div>
     
      

       

        {/* Campaign Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {campaignStats.map((stat, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${stat.color} backdrop-blur-xl rounded-xl p-6 text-center border ${stat.border} hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:scale-105 group`}
            >
              <div className="flex justify-center mb-3 text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>  

        {/* Campaigns Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="bg-slate-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${campaign.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {campaign.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-xl font-bold text-white">{campaign.title}</h3>
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full border ${getRarityColor(campaign.rarity)}`}>
                      {getRarityIcon(campaign.rarity)}
                      <span className="text-xs font-semibold">{campaign.rarity}</span>
                    </div>
                  </div>
                  <p className="text-white/70 leading-relaxed">{campaign.description}</p>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="font-semibold text-white mb-2">Impact:</h4>
                <p className="text-cyan-400 font-medium">{campaign.impact}</p>
              </div>
              
              {/* XP Reward */}
              <div className="mb-6 flex items-center space-x-2">
                <div className="flex items-center space-x-1 bg-orange-500/20 px-3 py-1 rounded-full border border-orange-400/30">
                  <Star className="w-4 h-4 text-orange-400" />
                  <span className="text-orange-300 text-sm font-semibold">+{campaign.xp} XP</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {campaign.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-slate-800/50 text-white/80 rounded-full text-sm font-medium backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Campaign Process */}
        <div className="mt-20 bg-slate-900/30 backdrop-blur-xl rounded-2xl p-8 border border-cyan-400/20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Campaign Development Process</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Strategy", desc: "Develop comprehensive campaign strategy and content calendar" },
              { step: "2", title: "Create", desc: "Design static posts, video reels, and interactive content" },
              { step: "3", title: "Execute", desc: "Multi-channel approach including newsletters and influencer marketing" },
              { step: "4", title: "Analyze", desc: "Track engagement, collect user data, and optimize for future campaigns" }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 shadow-lg shadow-cyan-500/30 hover:scale-110 transition-transform duration-300">
                  {process.step}
                </div>
                <h4 className="font-semibold text-white mb-2">{process.title}</h4>
                <p className="text-white/70 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;