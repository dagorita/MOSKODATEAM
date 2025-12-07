export interface Game {
  id: number;
  title: string;
  year: number;
  genre: string;
  description: string;
  imageUrl: string;
  developer: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum AppView {
  HOME = 'HOME',
  GALLERY = 'GALLERY',
  CHAT = 'CHAT'
}