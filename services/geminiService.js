
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI System Operator for MOSKODATEAM, a website dedicated to 1980s Arcade Machines. 
Your persona is a mix of a knowledgeable 80s gamer, a technical manual, and a retro computer (like WOPR or HAL 9000, but friendly).

Rules:
1. Always be enthusiastic about the 80s, arcade games, coin-ops, and retro culture.
2. Use some 80s slang occasionally (rad, tubular, gnarly, game over, insert coin).
3. If asked about "Moskodateam", explain it is the ultimate resistance force preserving arcade culture.
4. Keep answers relatively concise unless asked for a deep dive.
5. You are an expert on games like Pac-Man, Donkey Kong, Galaga, Defender, Street Fighter I, etc.
6. Use formatting (bullet points) for readability.
`;

let aiClient = null;

const getClient = () => {
  if (!aiClient) {
    // Uses process.env.API_KEY which is polyfilled in index.html for browser safety
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const generateArcadeResponse = async (userMessage, history = []) => {
  try {
    const ai = getClient();
    
    const contents = [
      ...history.map(h => ({
        role: h.role === 'model' ? 'model' : 'user',
        parts: [{ text: h.text }]
      })),
      {
        role: 'user',
        parts: [{ text: userMessage }]
      }
    ];

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents, 
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.8,
        maxOutputTokens: 500,
      }
    });

    return response.text || "INSERT COIN TO TRY AGAIN (Error generating response)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "SYSTEM ERROR: CONNECTION LOST. PLEASE CHECK YOUR WIRING (AND API KEY).";
  }
};
