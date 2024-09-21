import React, { useState, useEffect } from 'react';

const DevelopmentNotice = () => {
  const [showOpenSpace, setShowOpenSpace] = useState(false);
  const [showBlackSplash, setShowBlackSplash] = useState(false);
  const [showPlatform, setShowPlatform] = useState(false);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowOpenSpace(true), 500);
    setTimeout(() => setShowBlackSplash(true), 1500);
    setTimeout(() => setShowPlatform(true), 2500);
    setTimeout(() => setShowButton(true), 3000);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden">
      <div className={`text-6xl font-bold transition-all duration-1000 ${showOpenSpace ? 'opacity-100' : 'opacity-0'} ${showBlackSplash ? 'text-white' : 'text-black'} z-20`}>
        /Open-Space
      </div>
      <div className={`absolute inset-0 bg-black transition-transform duration-1000 ease-in-out ${showBlackSplash ? 'translate-y-0' : 'translate-y-full'}`} />
      <div className={`text-white text-2xl mt-8 z-20 transition-opacity duration-1000 ${showPlatform ? 'opacity-100' : 'opacity-0'}`}>
        The Platform is Under Development
      </div>
      <button 
        className={`mt-8 border border-white py-2 px-6 rounded-full text-lg text-white hover:bg-white hover:text-black transition-all duration-1000 z-20 ${showButton ? 'opacity-100' : 'opacity-0'}`}
        onClick={() => window.scrollTo({top: window.innerHeight, behavior: 'smooth'})}
      >
        Know More
      </button>
    </div>
  );
};

export default DevelopmentNotice;