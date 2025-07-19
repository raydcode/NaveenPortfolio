import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const AISection = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <section id="ai-creations" className="py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AI <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Creations</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of AI-generated creative works and digital art explorations
          </p>
          <div className="w-full max-w-2xl mx-auto mt-8">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full h-72 rounded-2xl overflow-hidden shadow-lg"
            >
              <SwiperSlide>
                <img src="/Portfolio Pics/AI Creations/AI Generated.png" alt="AI 1" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Portfolio Pics/AI Creations/AI Generated 1.png" alt="AI 2" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Portfolio Pics/AI Creations/AI Generated 2.png" alt="AI 3" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Portfolio Pics/AI Creations/AI Generated 3.png" alt="AI 4" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/Portfolio Pics/AI Creations/AI Generated 4.png" alt="AI 5" className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-center mt-2">
              <button
                onClick={() => setShowModal(true)}
                className="px-4 py-2 bg-cyan-600 text-white rounded-full shadow hover:bg-cyan-700 transition-all duration-300"
              >
                View All AI Creations
              </button>
            </div>
            {showModal && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
                <div className="bg-white rounded-2xl p-6 max-w-4xl w-full relative">
                  <button
                    onClick={() => setShowModal(false)}
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
                  >
                    &times;
                  </button>
                  <h3 className="text-xl font-bold mb-4 text-center text-cyan-700">All AI Creations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <img src="/Portfolio Pics/AI Creations/AI Generated.png" alt="AI 1" className="object-contain w-full h-64 rounded-lg shadow bg-black" />
                    <img src="/Portfolio Pics/AI Creations/AI Generated 1.png" alt="AI 2" className="object-contain w-full h-64 rounded-lg shadow bg-black" />
                    <img src="/Portfolio Pics/AI Creations/AI Generated 2.png" alt="AI 3" className="object-contain w-full h-64 rounded-lg shadow bg-black" />
                    <img src="/Portfolio Pics/AI Creations/AI Generated 3.png" alt="AI 4" className="object-contain w-full h-64 rounded-lg shadow bg-black" />
                    <img src="/Portfolio Pics/AI Creations/AI Generated 4.png" alt="AI 5" className="object-contain w-full h-64 rounded-lg shadow bg-black" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection; 