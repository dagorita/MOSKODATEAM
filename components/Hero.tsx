
export const renderHero = (onStart: () => void) => {
  const hero = document.createElement('div');
  hero.className = "relative overflow-hidden flex flex-col items-center justify-center min-h-[calc(100vh-64px)] p-6 text-center";

  hero.innerHTML = `
    <!-- Background Decor -->
    <div class="absolute inset-0 z-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black"></div>
    <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-arcade-neon rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse"></div>
    <div class="absolute bottom-1/4 right-1/4 w-72 h-72 bg-arcade-cyan rounded-full mix-blend-screen filter blur-[128px] opacity-20 animate-pulse delay-700"></div>

    <div class="relative z-10 max-w-4xl mx-auto space-y-8">
      <div class="inline-block border border-arcade-yellow text-arcade-yellow px-4 py-1 font-retro text-xs animate-bounce">
        INSERT COIN TO START
      </div>
      
      <h1 class="text-5xl md:text-7xl font-black font-sci-fi text-transparent bg-clip-text bg-gradient-to-r from-arcade-cyan via-white to-arcade-neon drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
        WELCOME TO THE <br /> ARCADE ERA
      </h1>
      
      <p class="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto font-sci-fi">
        Join the <span class="text-arcade-neon font-bold">MOSKODATEAM</span> resistance. 
        Relive the glory days of 8-bit heroes, high scores, and neon nights.
      </p>

      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <button 
          id="hero-start-btn"
          class="group relative px-8 py-4 bg-arcade-neon text-white font-retro text-sm uppercase tracking-wider overflow-hidden transition-all hover:bg-fuchsia-600 shadow-[0_0_20px_rgba(255,0,255,0.4)] hover:shadow-[0_0_40px_rgba(255,0,255,0.6)] cursor-pointer"
        >
          <span class="relative z-10 flex items-center gap-2">
            Explore Games <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </span>
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/20 skew-x-12 transition-transform duration-500"></div>
        </button>
        
        <div class="flex items-center justify-center gap-2 px-8 py-4 border border-arcade-cyan text-arcade-cyan font-retro text-sm uppercase tracking-wider hover:bg-arcade-cyan/10 transition-colors cursor-default">
          <i data-lucide="zap" class="w-4 h-4 animate-pulse-fast"></i>
          <span>System Ready</span>
        </div>
      </div>
    </div>

    <!-- Grid Floor -->
    <div 
      class="absolute bottom-0 w-full h-32 opacity-30 pointer-events-none"
      style="background: linear-gradient(transparent 0%, #ff00ff 100%); transform: perspective(500px) rotateX(60deg) translateY(100px); background-size: 40px 40px; background-image: linear-gradient(0deg, transparent 24%, rgba(255, 0, 255, .3) 25%, rgba(255, 0, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .3) 75%, rgba(255, 0, 255, .3) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, .3) 25%, rgba(255, 0, 255, .3) 26%, transparent 27%, transparent 74%, rgba(255, 0, 255, .3) 75%, rgba(255, 0, 255, .3) 76%, transparent 77%, transparent);"
    ></div>
  `;

  hero.querySelector('#hero-start-btn')?.addEventListener('click', onStart);

  return hero;
};
