import React from 'react';
import { Gamepad2, MessageSquare, Home } from 'lucide-react';
import { AppView } from '../types';

interface NavbarProps {
  currentView: AppView;
  onChangeView: (view: AppView) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onChangeView }) => {
  const getButtonClass = (view: AppView) => {
    const isActive = currentView === view;
    return `flex items-center gap-2 px-4 py-2 font-retro text-xs md:text-sm transition-all duration-300 border-2 ${
      isActive 
        ? 'border-arcade-neon text-arcade-neon bg-arcade-neon/10 shadow-[0_0_15px_rgba(255,0,255,0.5)]' 
        : 'border-transparent text-gray-400 hover:text-arcade-cyan hover:border-arcade-cyan/50'
    }`;
  };

  return (
    <nav className="sticky top-0 z-40 bg-arcade-dark/90 backdrop-blur-md border-b border-arcade-grid w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 cursor-pointer group" onClick={() => onChangeView(AppView.HOME)}>
            <h1 className="text-xl md:text-2xl font-retro text-white tracking-tighter">
              MOSKODA<span className="text-arcade-cyan group-hover:animate-pulse">TEAM</span>
            </h1>
          </div>
          
          <div className="flex space-x-2 md:space-x-4">
            <button 
              onClick={() => onChangeView(AppView.HOME)} 
              className={getButtonClass(AppView.HOME)}
            >
              <Home size={16} />
              <span className="hidden md:inline">BASE</span>
            </button>
            <button 
              onClick={() => onChangeView(AppView.GALLERY)} 
              className={getButtonClass(AppView.GALLERY)}
            >
              <Gamepad2 size={16} />
              <span className="hidden md:inline">GAMES</span>
            </button>
            <button 
              onClick={() => onChangeView(AppView.CHAT)} 
              className={getButtonClass(AppView.CHAT)}
            >
              <MessageSquare size={16} />
              <span className="hidden md:inline">AI_OP</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};