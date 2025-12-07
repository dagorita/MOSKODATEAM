import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { generateArcadeResponse } from '../services/geminiService';
import { Send, Bot, User, Terminal } from 'lucide-react';

export const ArcadeChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'model',
      text: 'GREETINGS, PLAYER 1. I AM THE MOSKODATEAM SYSTEM OPERATOR. ASK ME ANYTHING ABOUT 80S ARCADE HISTORY, CHEAT CODES, OR CLASSIC CABINETS.',
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputText.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      // Prepare history for context
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      
      const responseText = await generateArcadeResponse(userMsg.text, history);
      
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 h-[calc(100vh-80px)] flex flex-col">
      <div className="flex items-center gap-3 mb-4 bg-arcade-grid p-4 rounded-t-lg border-b border-arcade-neon/30">
        <Terminal className="text-arcade-neon w-6 h-6 animate-pulse" />
        <h2 className="text-xl font-retro text-white">SYSTEM_OP_TERMINAL_V2.5</h2>
      </div>

      <div className="flex-1 overflow-y-auto bg-black/50 border-x border-arcade-grid p-4 space-y-6 scrollbar-thin scrollbar-thumb-arcade-neon scrollbar-track-transparent">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex items-start gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`
              w-10 h-10 rounded-none flex items-center justify-center border-2 shrink-0
              ${msg.role === 'model' ? 'border-arcade-cyan bg-arcade-cyan/10 text-arcade-cyan' : 'border-arcade-neon bg-arcade-neon/10 text-arcade-neon'}
            `}>
              {msg.role === 'model' ? <Bot size={20} /> : <User size={20} />}
            </div>
            
            <div className={`
              max-w-[80%] p-4 rounded-sm border
              ${msg.role === 'model' 
                ? 'bg-gray-900/80 border-arcade-cyan/30 text-cyan-50 shadow-[0_0_10px_rgba(0,255,255,0.1)]' 
                : 'bg-fuchsia-900/20 border-arcade-neon/30 text-fuchsia-50 shadow-[0_0_10px_rgba(255,0,255,0.1)]'}
            `}>
              <p className="font-mono text-sm md:text-base leading-relaxed whitespace-pre-wrap">
                {msg.text}
              </p>
              <span className="block mt-2 text-[10px] opacity-50 uppercase font-retro">
                {msg.timestamp.toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center gap-4">
             <div className="w-10 h-10 border-2 border-arcade-cyan bg-arcade-cyan/10 text-arcade-cyan flex items-center justify-center">
               <Bot size={20} />
             </div>
             <div className="text-arcade-cyan font-retro text-xs animate-pulse">
               PROCESSING_DATA...
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form onSubmit={handleSendMessage} className="bg-arcade-grid p-4 rounded-b-lg border-t border-arcade-neon/30 flex gap-4">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="ENTER COMMAND OR QUESTION..."
          className="flex-1 bg-black border border-gray-700 text-arcade-yellow font-mono p-3 focus:outline-none focus:border-arcade-neon focus:ring-1 focus:ring-arcade-neon placeholder-gray-600"
        />
        <button 
          type="submit"
          disabled={isLoading || !inputText.trim()}
          className="bg-arcade-neon text-white px-6 py-2 font-retro text-xs hover:bg-fuchsia-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors border-b-4 border-fuchsia-800 active:border-b-0 active:translate-y-1"
        >
          <Send size={18} />
        </button>
      </form>
    </div>
  );
};