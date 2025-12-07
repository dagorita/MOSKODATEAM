
export const renderFooter = () => {
  const footer = document.createElement('footer');
  footer.className = "bg-arcade-dark border-t border-gray-800 py-8 text-center";

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
      <h3 class="font-retro text-white text-lg">MOSKODATEAM</h3>
      <p class="text-gray-500 font-mono text-sm">
        Preserving the bit-crushed memories of the 80s.
      </p>
      <div class="flex items-center gap-2 text-xs text-gray-600 mt-4">
        <span>MADE WITH</span>
        <i data-lucide="heart" class="text-arcade-neon fill-arcade-neon w-3 h-3"></i>
        <span>IN VANILLA JS & TAILWIND</span>
      </div>
      <div class="text-[10px] text-gray-700 font-mono mt-4">
        © ${new Date().getFullYear()} MOSKODATEAM. INSERT COIN.
      </div>
    </div>
  `;
  
  return footer;
};
