import { MusicOption } from '../types/wedding';

// Real Tamil Movie Wedding BGM Player & Sound Engine
class TamilMovieWeddingAudio {
  private audioElement: HTMLAudioElement | null = null;
  private isPlaying = false;
  private currentTrack: MusicOption = 'traditional';
  private volume = 0.75;
  private isMuted = false;
  private customAudioUrl: string | null = null;
  private customTrackName: string | null = null;
  private webAudioCtx: AudioContext | null = null;
  private listeners: Array<() => void> = [];

  private readonly TRACK_PATHS: Record<MusicOption, string> = {
    traditional: '/audio/tamil_wedding_bgm.mp3', // User's authentic Tamil wedding BGM song
    romantic: '/audio/tamil_wedding_kalyana_flute.wav'   // Ilayaraja Kalyana Maalai Flute & Chimes
  };

  constructor() {
    // Only initialize in browser environment
    if (typeof window !== 'undefined') {
      this.initAudioElement();
    }
  }

  private initAudioElement() {
    if (!this.audioElement && typeof Audio !== 'undefined') {
      this.audioElement = new Audio();
      this.audioElement.loop = false; // Background music stops once completed (~30-35s)
      this.audioElement.preload = 'auto';
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
      this.audioElement.src = this.TRACK_PATHS[this.currentTrack];

      // Automatically stop and notify UI when the song completes
      this.audioElement.addEventListener('ended', () => {
        this.isPlaying = false;
        this.notify();
      });

      // Stop once ~35 seconds mark is reached for clean closure
      this.audioElement.addEventListener('timeupdate', () => {
        if (this.audioElement && this.isPlaying) {
          // If track reaches 35 seconds or finishes, stop cleanly
          if (this.audioElement.currentTime >= 35 && this.currentTrack === 'traditional' && !this.customAudioUrl) {
            this.stop();
          }
        }
      });

      this.audioElement.addEventListener('error', (e) => {
        console.warn('Audio playback notice:', e);
      });
    }
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  private notify() {
    this.listeners.forEach(fn => fn());
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.audioElement) {
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
    this.notify();
  }

  public getVolume(): number {
    return this.volume;
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
      this.audioElement.volume = this.isMuted ? 0 : this.volume;
    }
    this.notify();
    return this.isMuted;
  }

  public getIsMuted(): boolean {
    return this.isMuted;
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  public getCurrentTrack(): MusicOption {
    return this.currentTrack;
  }

  public getCustomTrackName(): string | null {
    return this.customTrackName;
  }

  public setCustomAudio(file: File) {
    if (this.customAudioUrl) {
      URL.revokeObjectURL(this.customAudioUrl);
    }
    this.customAudioUrl = URL.createObjectURL(file);
    this.customTrackName = file.name.replace(/\.[^/.]+$/, "");
    this.initAudioElement();
    if (this.audioElement) {
      this.audioElement.src = this.customAudioUrl;
      this.audioElement.load();
      if (this.isPlaying) {
        this.audioElement.play().catch(console.warn);
      }
    }
    this.notify();
  }

  public play(track?: MusicOption) {
    this.initAudioElement();
    if (!this.audioElement) return;

    if (track && track !== this.currentTrack) {
      this.currentTrack = track;
      if (!this.customAudioUrl) {
        this.audioElement.src = this.TRACK_PATHS[this.currentTrack];
        this.audioElement.load();
      }
    }

    // If track previously finished or reached end, restart from beginning
    if (this.audioElement.ended || this.audioElement.currentTime >= 34) {
      this.audioElement.currentTime = 0;
    }

    this.audioElement.volume = this.isMuted ? 0 : this.volume;
    const playPromise = this.audioElement.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          this.notify();
        })
        .catch((err) => {
          console.log('Autoplay deferred until user interaction:', err.message);
        });
    }
  }

  public stop() {
    this.isPlaying = false;
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.notify();
  }

  public toggle(track?: MusicOption) {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.play(track);
    }
  }

  public switchTrack(track: MusicOption) {
    this.currentTrack = track;
    this.customAudioUrl = null;
    this.customTrackName = null;
    this.initAudioElement();
    if (this.audioElement) {
      this.audioElement.src = this.TRACK_PATHS[this.currentTrack];
      this.audioElement.load();
      if (this.isPlaying) {
        this.audioElement.play().catch(console.warn);
      }
    }
    this.notify();
  }

  // Conch Shell auspicious sound effect
  public playShankham() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.webAudioCtx) {
        this.webAudioCtx = new AudioCtx();
      }
      if (this.webAudioCtx.state === 'suspended') {
        this.webAudioCtx.resume();
      }

      const now = this.webAudioCtx.currentTime;
      const osc = this.webAudioCtx.createOscillator();
      const gain = this.webAudioCtx.createGain();
      const filter = this.webAudioCtx.createBiquadFilter();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.linearRampToValueAtTime(329.63, now + 0.8);
      osc.frequency.linearRampToValueAtTime(332, now + 1.8);
      osc.frequency.linearRampToValueAtTime(310, now + 2.8);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(650, now);
      filter.Q.setValueAtTime(4.0, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.2, now + 0.8);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 3.0);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.webAudioCtx.destination);

      osc.start(now);
      osc.stop(now + 3.0);
    } catch (e) {
      console.warn('Shankham audio error:', e);
    }
  }

  // Temple Bell ringing effect
  public playTempleBell() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!this.webAudioCtx) {
        this.webAudioCtx = new AudioCtx();
      }
      if (this.webAudioCtx.state === 'suspended') {
        this.webAudioCtx.resume();
      }

      const now = this.webAudioCtx.currentTime;
      const freqs = [1174.66, 2349.32, 3520.0, 4698.63];

      freqs.forEach((freq, idx) => {
        const osc = this.webAudioCtx!.createOscillator();
        const gain = this.webAudioCtx!.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.09 / (idx + 1), now);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

        osc.connect(gain);
        gain.connect(this.webAudioCtx!.destination);

        osc.start(now);
        osc.stop(now + 2.2);
      });
    } catch (e) {
      console.warn('Temple bell audio error:', e);
    }
  }
}

export const weddingAudio = new TamilMovieWeddingAudio();
