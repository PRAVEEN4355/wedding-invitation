export interface WeddingEvent {
  id: string;
  number: string;
  title: string;
  tamilTitle?: string;
  date: string;
  day: string;
  time: string;
  theme: 'haldi' | 'reception' | 'muhurtham';
  themeColor: string;
  description: string;
  isoDateStart: string;
  isoDateEnd: string;
  location: string;
  dressCode?: string;
}

export interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isStarted: boolean;
  isEnded: boolean;
}

export type MusicOption = 'traditional' | 'romantic';

export interface MusicTrack {
  id: MusicOption;
  name: string;
  subtitle: string;
  instrument: string;
  tempo: number;
}

