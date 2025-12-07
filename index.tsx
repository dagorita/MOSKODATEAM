
import { renderNavbar } from './components/Navbar';
import { renderHero } from './components/Hero';
import { renderGameGallery } from './components/GameGallery';
import { createArcadeChat } from './components/ArcadeChat';
import { renderFooter } from './components/Footer';
import { AppView } from './types';

// Global State
let currentView = AppView.HOME;
let chatComponent = null; // Store chat instance to preserve state

// DOM Root
const appRoot = document.getElementById('app');

function render() {
  if (!appRoot) return;
  appRoot.innerHTML = '';

  // 1. Header
  const navbar = renderNavbar(currentView, (newView) => {
    currentView = newView;
    render();
  });
  appRoot.appendChild(navbar);

  // 2. Main Content
  const main = document.createElement('main');
  main.className = 'flex-grow';
  
  switch (currentView) {
    case AppView.HOME:
      main.appendChild(renderHero(() => {
        currentView = AppView.GALLERY;
        render();
      }));
      break;
    case AppView.GALLERY:
      main.appendChild(renderGameGallery());
      break;
    case AppView.CHAT:
      if (!chatComponent) {
        chatComponent = createArcadeChat();
      }
      main.appendChild(chatComponent.element);
      // Re-attach events or scroll if needed
      chatComponent.onMount();
      break;
  }
  appRoot.appendChild(main);

  // 3. Footer
  appRoot.appendChild(renderFooter());

  // Initialize Icons
  // @ts-ignore
  if (window.lucide) {
    // @ts-ignore
    window.lucide.createIcons();
  }
}

// Initial Render
render();
