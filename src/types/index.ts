export interface College {
  id: string;
  name: string;
  location: string;
  city: string;
  state: string;
  rating: number;
  fees: string;
  course: string;
  placements: string;
  image: string;
  website: string;
  established: number;
  type: string;
  nirf_ranking?: number;
}

export interface ChatMessage {
  id: string;
  content: string;
  type: 'user' | 'ai';
  timestamp: Date;
  colleges?: College[];
}

export interface ChatSession {
  id: string;
  title: string;
  messages: ChatMessage[];
  lastActivity: Date;
}