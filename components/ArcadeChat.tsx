
import { generateArcadeResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

export const createArcadeChat = () => {
  const container = document.createElement('div');
  container.className = "max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-80px)] flex flex-col";

  // State
  let messages: ChatMessage[] = [
    {
      id: 'init-1',
      role: 'model',
      text: 'GREETINGS, PLAYER 1. I AM THE MOSKODATEAM SYSTEM OPERATOR. ASK ME ANYTHING ABOUT 80S ARCADE HISTORY, CHEAT CODES, OR CLASSIC CABINETS.',
      timestamp: new Date()
    }
  ];
  let isLoading = false;

  // Render helpers
  const renderMessages = () => {
    const list = container.querySelector('#chat-list');
    if (!list) return;

    list.innerHTML = messages.map(msg => `
      <div class="flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}">
        <div class="w-10 h-10 rounded-none flex items-center justify-center border-2 shrink-0 ${msg.role === 'model' ? 'border-arcade-cyan bg-arcade-cyan/10 text-arcade-cyan' : 'border-arcade-neon bg-arcade-neon/10 text-arcade-neon'}">
          <i data-lucide="${msg.role === 'model' ? 'bot' : 'user'}" class="w-5 h-5"></i>
        </div>
        
        <div class="max-w-[80%] p-4 rounded-sm border ${msg.role === 'model' ? 'bg-gray-900/80 border-arcade-cyan/30 text-cyan-50 shadow-[0_0_10px_rgba(0,255,255,0.1)]' : 'bg-fuchsia-900/20 border-arcade-neon/30 text-fuchsia-50 shadow-[0_0_10px_rgba(255,0,255,0.1)]'}">
          <p class="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">${msg.text}</p>
          <span class="block mt-2 text-[10px] opacity-50 uppercase font-retro">${msg.timestamp.toLocaleTimeString()}</span>
        </div>
      </div>
    `).join('');

    if (isLoading) {
      list.innerHTML += `
        <div class="flex items-center gap-4">
           <div class="w-10 h-10 border-2 border-arcade-cyan bg-arcade-cyan/10 text-arcade-cyan flex items-center justify-center">
             <i data-lucide="bot" class="w-5 h-5"></i>
           </div>
           <div class="text-arcade-cyan font-retro text-xs animate-pulse">
             PROCESSING_DATA...
           </div>
        </div>
      `;
    }

    // Refresh icons
    // @ts-ignore
    if(window.lucide) window.lucide.createIcons();
    
    // Scroll
    list.scrollTop = list.scrollHeight;
  };

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: text,
      timestamp: new Date()
    };
    messages.push(userMsg);
    isLoading = true;
    renderMessages();
    
    // Clear input
    const input = container.querySelector('input') as HTMLInputElement;
    if(input) input.value = '';

    try {
        const history = messages.map(m => ({ role: m.role, text: m.text }));
        const responseText = await generateArcadeResponse(userMsg.text, history);
        
        const aiMsg: ChatMessage = {
            id: (Date.now() + 1).toString(),
            role: 'model',
            text: responseText,
            timestamp: new Date()
        };
        messages.push(aiMsg);
    } catch (e) {
        console.error(e);
    } finally {
        isLoading = false;
        renderMessages();
    }
  };

  // Build UI
  container.innerHTML = `
    <div class="flex items-center gap-3 mb-4 bg-arcade-grid p-4 rounded-t-lg border-b border-arcade-neon/30">
      <i data-lucide="terminal" class="text-arcade-neon w-6 h-6 animate-pulse"></i>
      <h2 class="text-xl font-retro text-white">SYSTEM_OP_TERMINAL_V2.5</h2>
    </div>

    <div id="chat-list" class="flex-1 overflow-y-auto bg-black/50 border-x border-arcade-grid p-4 space-y-6 scrollbar-thin scrollbar-thumb-arcade-neon scrollbar-track-transparent">
    </div>

    <form id="chat-form" class="bg-arcade-grid p-4 rounded-b-lg border-t border-arcade-neon/30 flex gap-4">
      <input
        type="text"
        placeholder="ENTER COMMAND OR QUESTION..."
        class="flex-1 bg-black border border-gray-700 text-arcade-yellow font-mono p-3 focus:outline-none focus:border-arcade-neon focus:ring-1 focus:ring-arcade-neon placeholder-gray-600"
      />
      <button 
        type="submit"
        class="bg-arcade-neon text-white px-6 py-2 font-retro text-xs hover:bg-fuchsia-600 transition-colors border-b-4 border-fuchsia-800 active:border-b-0 active:translate-y-1 cursor-pointer"
      >
        <i data-lucide="send" class="w-4 h-4"></i>
      </button>
    </form>
  `;

  // Bind Events
  container.querySelector('#chat-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = container.querySelector('input') as HTMLInputElement;
    handleSend(input.value);
  });

  return {
    element: container,
    onMount: renderMessages
  };
};
