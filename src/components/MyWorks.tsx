import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const categories = [
  // {
  //   key: 'sportwalk',
  //   label: 'Sportwalk - 1st Job',
  //   images: [
  //     '/Portfolio Pics/Sportwalk - 1st Job/IMG-20240531-WA0065.jpg',
  //     '/Portfolio Pics/Sportwalk - 1st Job/Sportwalk.jpg',
  //   ],
  // },
  {
    key: 'fantasy-apps',
    label: 'Fantasy Apps',
    images: [
      '/Portfolio Pics/Sportwalk - 1st Job/Fantasy Apps/Fan2Play.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/Fantasy Apps/Fantasy Apps.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/Fantasy Apps/Sportasy.jpg',
    ],
  },
  {
    key: 'bharat-army',
    label: 'The Bharat Army',
    images: [
      '/Portfolio Pics/Sportwalk - 1st Job/The Bharat Army/IMG-20240211-WA0051.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/The Bharat Army/IMG_20240317_210013.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/The Bharat Army/Bharat Army.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/The Bharat Army/BA Content Creator.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/The Bharat Army/Bharat Army Content Creator.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/The Bharat Army/Duck meme.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/The Bharat Army/Picsart_24-07-31_17-39-40-842.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/The Bharat Army/InShot_20240808_013706245.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/The Bharat Army/Snapinsta.app_420887620_404469082020649_3015503938183528805_n_1080.jpg',
    ],
  },
  {
    key: 'sportwalk-inhouse',
    label: 'Sportwalk In-House',
    images: [
      '/Portfolio Pics/Sportwalk - 1st Job/Sportwalk In-House/Screenshot 2024-08-05 151116.png',
      '/Portfolio Pics/Sportwalk - 1st Job/Sportwalk In-House/SW 2.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/Sportwalk In-House/SW 3.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/Sportwalk In-House/Screenshot_6.jpg',
    ],
  },
  {
    key: 'siechem-madurai-panthers',
    label: 'Siechem Madurai Panthers',
    images: [
      '/Portfolio Pics/Sportwalk - 1st Job/Siechem Madurai Panthers/SMP Logo.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/Siechem Madurai Panthers/With Washington Sundar.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/Siechem Madurai Panthers/Screenshot_4.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/Siechem Madurai Panthers/Screenshot_5.jpg',
      '/Portfolio Pics/Sportwalk - 1st Job/Siechem Madurai Panthers/Screenshot_3.jpg',
    ],
  },
  {
    key: 'punjab-fc',
    label: 'Punjab FC',
    images: [
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Punjab FC/PFC Naveen.jpg',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Punjab FC/Punjab_FC_official_logo.svg.png',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Punjab FC/PFC 2.png',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Punjab FC/PFC 1.png',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Punjab FC/PFC.png',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Punjab FC/PFC Images.png',
    ],
  },
  {
    key: 'roundglass-sports',
    label: 'Roundglass Sports',
    images: [
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Roundglass Sports/rglogosocialshare.jpeg',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Roundglass Sports/RG 3.png',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Roundglass Sports/RG 1.png',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Roundglass Sports/RG.png',
    ],
  },
  {
    key: 'pwr',
    label: 'Pickleball World Rankings (PWR)',
    images: [
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Pickleball World Rankings (PWR)/PWR Logo.webp',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Pickleball World Rankings (PWR)/PWR 4.png',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Pickleball World Rankings (PWR)/PWR 3.png',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Pickleball World Rankings (PWR)/PWR 2.png',
      '/Portfolio Pics/Meraki Sport & Entertainment - 2nd Job/Pickleball World Rankings (PWR)/PWR 1.png',
    ],
  },
  {
    key: 'chennai-blitz',
    label: 'Chennai Blitz Auction - Freelance',
    images: [
      '/Portfolio Pics/Chennai Blitz Auction - Freelance/CB Story 1.png',
      '/Portfolio Pics/Chennai Blitz Auction - Freelance/CB Story.png',
      '/Portfolio Pics/Chennai Blitz Auction - Freelance/CB 4.png',
      '/Portfolio Pics/Chennai Blitz Auction - Freelance/CB 3.png',
      '/Portfolio Pics/Chennai Blitz Auction - Freelance/CB 2.png',
      '/Portfolio Pics/Chennai Blitz Auction - Freelance/CB 1.png',
    ],
  },
];

const allImages = categories.flatMap((cat) => cat.images);

const MyWorks = () => {
  const [showModal, setShowModal] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <section id="my-works" className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Works</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore a gallery of my professional work across all categories and campaigns.
          </p>
        </div>
        <div className="w-full max-w-3xl mx-auto mb-6">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="w-full h-96 rounded-2xl overflow-hidden shadow-lg"
          >
            {allImages.map((img, idx) => (
              <SwiperSlide key={img+idx}>
                <img src={img} alt={`Work ${idx+1}`} className="object-contain w-full h-96 bg-black" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setShowModal(true)}
            className="px-4 py-2 bg-cyan-600 text-white rounded-full shadow hover:bg-cyan-700 transition-all duration-300"
          >
            View by Category
          </button>
        </div>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 px-2">
            <div className="bg-white rounded-2xl p-4 sm:p-6 max-w-4xl w-full relative max-h-[90vh] overflow-y-auto flex flex-col">
              <button
                onClick={() => {
                  setShowModal(false);
                  setActiveCategory(null);
                }}
                className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-3xl font-bold z-10 bg-white/80 rounded-full w-10 h-10 flex items-center justify-center shadow-md"
                style={{ lineHeight: 1 }}
                aria-label="Close"
              >
                &times;
              </button>
              {!activeCategory ? (
                <>
                  <h3 className="text-xl font-bold mb-4 text-center text-cyan-700 mt-8 sm:mt-0">Select a Category</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {categories.map((cat) => (
                      <button
                        key={cat.key}
                        onClick={() => setActiveCategory(cat.key)}
                        className="p-4 sm:p-6 bg-cyan-100 rounded-xl shadow hover:bg-cyan-200 text-cyan-900 font-semibold text-lg transition-all duration-200"
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setActiveCategory(null)}
                    className="mb-4 px-3 py-1 bg-cyan-200 text-cyan-900 rounded-full text-sm font-semibold hover:bg-cyan-300 mt-8 sm:mt-0"
                  >
                    ← Back to Categories
                  </button>
                  <h3 className="text-xl font-bold mb-4 text-center text-cyan-700">{categories.find((c) => c.key === activeCategory)?.label}</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {categories.find((c) => c.key === activeCategory)?.images.map((img, idx) => (
                      <img key={img+idx} src={img} alt={activeCategory+idx} className="object-contain w-full h-48 sm:h-64 rounded-lg shadow bg-black" />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyWorks; 