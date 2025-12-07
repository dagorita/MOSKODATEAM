import React from 'react';
import { Game } from '../types';
import { Star, Trophy } from 'lucide-react';

const GAMES_DATA: Game[] = [
  {
    id: 1,
    title: "PAC-MAN",
    year: 1980,
    genre: "Maze",
    developer: "Namco",
    description: "Navigate the maze, eat dots, and avoid the ghosts: Blinky, Pinky, Inky, and Clyde.",
    imageUrl: "https://picsum.photos/seed/pacman/400/300"
  },
  {
    id: 2,
    title: "DONKEY KONG",
    year: 1981,
    genre: "Platform",
    developer: "Nintendo",
    description: "Help Jumpman (Mario) save Pauline from the giant ape. The birth of a legend.",
    imageUrl: "https://picsum.photos/seed/donkeykong/400/300"
  },
  {
    id: 3,
    title: "GALAGA",
    year: 1981,
    genre: "Shooter",
    developer: "Namco",
    description: "Defend the galaxy in this fixed shooter. Capture your fighter to double your firepower!",
    imageUrl: "https://picsum.photos/seed/galaga/400/300"
  },
  {
    id: 4,
    title: "STREET FIGHTER",
    year: 1987,
    genre: "Fighting",
    developer: "Capcom",
    description: "The original martial arts tournament. Ryu and Ken begin their journey here.",
    imageUrl: "https://picsum.photos/seed/sf1/400/300"
  },
  {
    id: 5,
    title: "OUTRUN",
    year: 1986,
    genre: "Racing",
    developer: "Sega",
    description: "Drive your Ferrari Testarossa through beautiful landscapes with magical sound.",
    imageUrl: "https://picsum.photos/seed/outrun/400/300"
  },
  {
    id: 6,
    title: "CONTRA",
    year: 1987,
    genre: "Run and Gun",
    developer: "Konami",
    description: "Hardcore action. Up, Up, Down, Down, Left, Right, Left, Right, B, A, Start.",
    imageUrl: "https://picsum.photos/seed/contra/400/300"
  }
];

export const GameGallery: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex items-center gap-4 mb-12">
        <Trophy className="text-arcade-yellow w-8 h-8 md:w-12 md:h-12" />
        <h2 className="text-3xl md:text-5xl font-sci-fi font-bold text-white uppercase tracking-widest border-b-4 border-arcade-neon pb-2">
          Hall of Fame
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {GAMES_DATA.map((game) => (
          <div 
            key={game.id}
            className="group relative bg-arcade-grid border border-gray-800 hover:border-arcade-cyan transition-all duration-300 overflow-hidden rounded-lg hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={game.imageUrl} 
                alt={game.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
              <div className="absolute top-2 right-2 bg-black/80 text-arcade-yellow px-2 py-1 font-retro text-xs border border-arcade-yellow rounded">
                {game.year}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4 relative">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-sci-fi font-bold text-white group-hover:text-arcade-cyan transition-colors">
                  {game.title}
                </h3>
                <Star className="w-5 h-5 text-gray-600 group-hover:text-arcade-yellow transition-colors" />
              </div>
              
              <div className="flex gap-2 text-xs font-mono text-gray-400">
                <span className="bg-white/10 px-2 py-1 rounded">{game.developer}</span>
                <span className="bg-arcade-neon/20 text-arcade-neon px-2 py-1 rounded border border-arcade-neon/30">{game.genre}</span>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-gray-700 pl-3 group-hover:border-arcade-neon transition-colors">
                {game.description}
              </p>

              <button className="w-full mt-4 py-2 border border-white/20 text-white font-retro text-xs hover:bg-white hover:text-black transition-colors uppercase">
                View Details
              </button>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-arcade-neon opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>
    </div>
  );
};