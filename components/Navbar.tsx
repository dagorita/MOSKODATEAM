
import { AppView } from '../types';

export const renderNavbar = (currentView: AppView, onChangeView: (view: AppView) => void) => {
  const nav = document.createElement('nav');
  nav.className = "sticky top-0 z-40 bg-arcade-dark/90 backdrop-blur-md border-b border-arcade-grid w-full";

  const getButtonClass = (view: AppView) => {
    const isActive = currentView === view;
    return `flex items-center gap-2 px-4 py-2 font-retro text-xs md:text-sm transition-all duration-300 border-2 cursor-pointer ${
      isActive 
        ? 'border-arcade-neon text-arcade-neon bg-arcade-neon/10 shadow-[0_0_15px_rgba(255,0,255,0.5)]' 
        : 'border-transparent text-gray-400 hover:text-arcade-cyan hover:border-arcade-cyan/50'
    }`;
  };

  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0 cursor-pointer group" id="nav-brand">
          <h1 class="text-xl md:text-2xl font-retro text-white tracking-tighter">
            MOSKODA<span class="text-arcade-cyan group-hover:animate-pulse">TEAM</span>
          </h1>
        </div>
        
        <div class="flex space-x-2 md:space-x-4">
          <button id="nav-home" class="${getButtonClass(AppView.HOME)}">
            <i data-lucide="home" class="w-4 h-4"></i>
            <span class="hidden md:inline">BASE</span>
          </button>
          <button id="nav-gallery" class="${getButtonClass(AppView.GALLERY)}">
            <i data-lucide="gamepad-2" class="w-4 h-4"></i>
            <span class="hidden md:inline">GAMES</span>
          </button>
          <button id="nav-chat" class="${getButtonClass(AppView.CHAT)}">
            <i data-lucide="message-square" class="w-4 h-4"></i>
            <span class="hidden md:inline">AI_OP</span>
          </button>
        </div>
      </div>
    </div>
  `;

  // Event Listeners
  nav.querySelector('#nav-brand')?.addEventListener('click', () => onChangeView(AppView.HOME));
  nav.querySelector('#nav-home')?.addEventListener('click', () => onChangeView(AppView.HOME));
  nav.querySelector('#nav-gallery')?.addEventListener('click', () => onChangeView(AppView.GALLERY));
  nav.querySelector('#nav-chat')?.addEventListener('click', () => onChangeView(AppView.CHAT));

  return nav;
};
