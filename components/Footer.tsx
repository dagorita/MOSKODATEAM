import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-arcade-dark border-t border-gray-800 py-8 text-center">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
        <h3 className="font-retro text-white text-lg">MOSKODATEAM</h3>
        <p className="text-gray-500 font-mono text-sm">
          Preserving the bit-crushed memories of the 80s.
        </p>
        <div className="flex items-center gap-2 text-xs text-gray-600 mt-4">
          <span>MADE WITH</span>
          <Heart size={12} className="text-arcade-neon fill-arcade-neon" />
          <span>IN REACT & TAILWIND</span>
        </div>
        <div className="text-[10px] text-gray-700 font-mono mt-4">
          © {new Date().getFullYear()} MOSKODATEAM. INSERT COIN.
        </div>
      </div>
    </footer>
  );
};