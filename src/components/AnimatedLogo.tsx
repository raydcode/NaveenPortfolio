import React from 'react';

const AnimatedLogo = () => {
  return (
    <span
      className="animated-logo font-bold text-xl md:text-2xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent animate-gradient-move transition-all duration-700 ease-in-out inline-flex items-center gap-2 hover:animate-logo-bounce"
      style={{ opacity: 0, animation: 'logoActionIn 1.2s cubic-bezier(0.68,-0.55,0.27,1.55) forwards' }}
    >
      Hey I&apos;m Naveen <span role="img" aria-label="lightning">⚡️</span>
    </span>
  );
};

export default AnimatedLogo;

// Add the following CSS to your global styles (e.g., index.css):
// @keyframes logoActionIn {
//   0% { opacity: 0; transform: scale(0.7) rotate(-10deg); }
//   60% { opacity: 1; transform: scale(1.1) rotate(5deg); }
//   80% { transform: scale(0.95) rotate(-2deg); }
//   100% { opacity: 1; transform: scale(1) rotate(0deg); }
// }
// .animate-logo-bounce {
//   animation: logoBounce 0.7s cubic-bezier(0.68,-0.55,0.27,1.55);
// }
// @keyframes logoBounce {
//   0%, 100% { transform: translateY(0); }
//   30% { transform: translateY(-10px) scale(1.05); }
//   50% { transform: translateY(2px) scale(0.98); }
//   70% { transform: translateY(-4px) scale(1.02); }
// } 