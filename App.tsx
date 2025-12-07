import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { GameGallery } from './components/GameGallery';
import { ArcadeChat } from './components/ArcadeChat';
import { Footer } from './components/Footer';
import { AppView } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.HOME);

  const renderView = () => {
    switch (currentView) {
      case AppView.HOME:
        return <Hero onStart={() => setCurrentView(AppView.GALLERY)} />;
      case AppView.GALLERY:
        return <GameGallery />;
      case AppView.CHAT:
        return <ArcadeChat />;
      default:
        return <Hero onStart={() => setCurrentView(AppView.GALLERY)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-arcade-dark text-white crt-flicker">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />
    </div>
  );
};

export default App;