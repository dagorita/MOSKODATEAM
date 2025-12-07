import React from 'react';
import { AppView } from '../types';
import { ArrowRight, Zap } from 'lucide-react';

interface HeroProps {
  onStart: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 text-center">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-arcade-neon rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-arcade-cyan rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse delay-700"></div>

      <div className="relative z-10 max-w-4xl mx-auto space-y-8">
        <div className="inline-block border border-arcade-yellow text-arcade-yellow px-4 py-1 font-retro text-xs animate-bounce">
          INSERT COIN TO START
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black font-sci-fi text-transparent bg-clip-text bg-gradient-to-r from-arcade-cyan via-white to-arcade-neon drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
          WELCOME TO THE <br /> ARCADE ERA
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sci-fi">
          Join the <span className="text-arcade-neon font-bold">MOSKODATEAM</span> resistance. 
          Relive the glory days of 8-bit heroes, high scores, and neon nights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button 
            onClick={onStart}
            className="group relative px-8 py-4 bg-arcade-neon text-white font-retro text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,255,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Games <ArrowRight size={16} />
            </span>
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 skew-x-12 transition-transform duration-500"></div>
          </button>
          
          <div className="flex items-center justify-center gap-2 px-8 py-4 border border-arcade-cyan text-arcade-cyan font-retro text-sm uppercase tracking-wider hover:bg-arcade-cyan/10 transition-colors cursor-default">
            <Zap size={16} className="animate-pulse-fast" />
            <span>System Ready</span>
          </div>
        </div>
      </div>

      {/* Grid Floor */}
      <div 
        className="absolute bottom-0 w-full h-32 opacity-30 pointer-events-none"
        style={{
          background: 'linear-gradient(transparent 0%, #ff00ff 100%)',
          transform: 'perspective(500px) rotateX(60deg) translateY(100px)',
          backgroundSize: '40px 40px',
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(255, 0, 255, .3) 25%, rgba(255, 0, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .3) 75%, rgba(255, 0, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, .3) 25%, rgba(255, 0, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .3) 75%, rgba(255, 0, 255, .3) 76%, transparent 77%, transparent)'
        }}
      ></div>
    </div>
  );
};