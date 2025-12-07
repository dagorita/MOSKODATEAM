
import { renderNavbar } from './components/Navbar.js';
import { renderHero } from './components/Hero.js';
import { renderGameGallery } from './components/GameGallery.js';
import { createArcadeChat } from './components/ArcadeChat.js';
import { renderFooter } from './components/Footer.js';
import { AppView } from './types.js';

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
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Initial Render
render();
