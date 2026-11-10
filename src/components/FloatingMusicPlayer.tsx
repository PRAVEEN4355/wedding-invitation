import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingAudio } from '../utils/audioEngine';
import { MusicOption } from '../types/wedding';
import { Volume2, VolumeX, Play, Pause, ChevronUp, ChevronDown, Disc, Music, Upload, Check } from 'lucide-react';

export const FloatingMusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<MusicOption>('traditional');
  const [volume, setVolume] = useState(0.75);
  const [isExpanded, setIsExpanded] = useState(false);
  const [customSongName, setCustomSongName] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Sync state with audio engine
    const syncState = () => {
      setIsPlaying(weddingAudio.getIsPlaying());
      setIsMuted(weddingAudio.getIsMuted());
      setCurrentTrack(weddingAudio.getCurrentTrack());
      setVolume(weddingAudio.getVolume());
      setCustomSongName(weddingAudio.getCustomTrackName());
    };

    const unsubscribe = weddingAudio.subscribe(syncState);
    syncState();
    return () => unsubscribe();
  }, []);

  const handleTogglePlay = () => {
    weddingAudio.toggle(currentTrack);
  };

  const handleToggleMute = () => {
    weddingAudio.toggleMute();
  };

  const handleTrackChange = (track: MusicOption) => {
    weddingAudio.switchTrack(track);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    weddingAudio.setVolume(val);
  };

  const handleBlowShankham = () => {
    weddingAudio.playShankham();
  };

  const handleRingBell = () => {
    weddingAudio.playTempleBell();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      weddingAudio.setCustomAudio(file);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end select-none">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-84 max-w-[92vw] p-5 rounded-3xl bg-white/95 border-2 border-[#C49A47] shadow-[0_15px_45px_rgba(104,28,50,0.18)] backdrop-blur-md text-[#3D141F]"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-[#C49A47]/30 mb-3">
              <span className="text-xs font-serif font-bold uppercase tracking-wider text-[#681C32] flex items-center gap-1.5">
                <Music className="w-3.5 h-3.5 text-[#C49A47]" /> Tamil Movie Wedding BGM
              </span>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-[#6B3A48] hover:text-[#380E1B] p-1 cursor-pointer"
                title="Collapse"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Tamil Movie Track Selection */}
            <div className="space-y-2 mb-3">
              {/* Track 1: Alaipayuthey Mangalyam */}
              <button
                onClick={() => handleTrackChange('traditional')}
                className={`w-full p-2.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  currentTrack === 'traditional' && !customSongName
                    ? 'bg-[#FFF5DA] border-[#C49A47] text-[#681C32] shadow-xs'
                    : 'bg-[#FAF4EA] border-[#C49A47]/30 text-[#4A1224] hover:bg-[#FFF9ED]'
                }`}
              >
                <div>
                  <p className="font-serif text-xs font-bold flex items-center gap-1.5">
                    <span>🎬</span> Tamil Wedding BGM
                  </p>
                  <p className="text-[10px] font-sans text-[#8C6721] font-medium">
                    Auspicious Nadaswaram & Traditional Wedding Music
                  </p>
                </div>
                {currentTrack === 'traditional' && !customSongName && isPlaying && (
                  <div className="flex items-end space-x-0.5 h-3.5">
                    <span className="w-1 h-2 bg-[#C49A47] animate-pulse" />
                    <span className="w-1 h-3.5 bg-[#681C32] animate-bounce" />
                    <span className="w-1 h-1.5 bg-[#C49A47] animate-pulse" />
                  </div>
                )}
              </button>

              {/* Track 2: Kalyana Maalai */}
              <button
                onClick={() => handleTrackChange('romantic')}
                className={`w-full p-2.5 rounded-2xl border text-left transition-all flex items-center justify-between cursor-pointer ${
                  currentTrack === 'romantic' && !customSongName
                    ? 'bg-[#FFF5DA] border-[#C49A47] text-[#681C32] shadow-xs'
                    : 'bg-[#FAF4EA] border-[#C49A47]/30 text-[#4A1224] hover:bg-[#FFF9ED]'
                }`}
              >
                <div>
                  <p className="font-serif text-xs font-bold flex items-center gap-1.5">
                    <span>🪈</span> Kalyana Maalai
                  </p>
                  <p className="text-[10px] font-sans text-[#8C6721] font-medium">
                    Ilayaraja • Evergreen Wedding Flute
                  </p>
                </div>
                {currentTrack === 'romantic' && !customSongName && isPlaying && (
                  <div className="flex items-end space-x-0.5 h-3.5">
                    <span className="w-1 h-2 bg-[#C49A47] animate-pulse" />
                    <span className="w-1 h-3.5 bg-[#681C32] animate-bounce" />
                    <span className="w-1 h-1.5 bg-[#C49A47] animate-pulse" />
                  </div>
                )}
              </button>

              {/* Custom Track (if loaded) */}
              {customSongName && (
                <div className="p-2.5 rounded-2xl border bg-[#FFF5DA] border-[#C49A47] text-[#681C32] flex items-center justify-between shadow-xs">
                  <div className="truncate max-w-[200px]">
                    <p className="font-serif text-xs font-bold flex items-center gap-1.5 truncate">
                      <span>🎶</span> {customSongName}
                    </p>
                    <p className="text-[10px] font-sans text-emerald-700 font-semibold flex items-center gap-1">
                      <Check className="w-3 h-3" /> Custom Tamil Song Active
                    </p>
                  </div>
                  {isPlaying && (
                    <div className="flex items-end space-x-0.5 h-3.5">
                      <span className="w-1 h-2 bg-[#C49A47] animate-pulse" />
                      <span className="w-1 h-3.5 bg-[#681C32] animate-bounce" />
                      <span className="w-1 h-1.5 bg-[#C49A47] animate-pulse" />
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Custom Song Picker */}
            <div className="mb-3 pt-2 border-t border-[#C49A47]/20">
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="w-full py-2 px-3 rounded-xl bg-[#FFF9ED] hover:bg-[#FFF5DA] border border-[#C49A47] text-[#681C32] text-xs font-serif font-bold flex items-center justify-center space-x-1.5 transition-all cursor-pointer shadow-2xs hover:scale-[1.01]"
              >
                <Upload className="w-3.5 h-3.5 text-[#C49A47]" />
                <span>Choose Song from Device (.mp3)</span>
              </button>
            </div>

            {/* Auspicious Chimes & Conch Shell */}
            <div className="grid grid-cols-2 gap-2 mb-3 pt-2 border-t border-[#C49A47]/20">
              <button
                onClick={handleBlowShankham}
                className="py-1.5 px-2 rounded-xl bg-[#FFF5DA] hover:bg-[#FFEEC2] border border-[#C49A47] text-[#681C32] text-[11px] font-serif font-bold flex items-center justify-center space-x-1 transition-all cursor-pointer shadow-2xs"
              >
                <span>🐚</span>
                <span>Shankham</span>
              </button>
              <button
                onClick={handleRingBell}
                className="py-1.5 px-2 rounded-xl bg-[#FFF5DA] hover:bg-[#FFEEC2] border border-[#C49A47] text-[#681C32] text-[11px] font-serif font-bold flex items-center justify-center space-x-1 transition-all cursor-pointer shadow-2xs"
              >
                <span>🔔</span>
                <span>Temple Bell</span>
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center space-x-3 pt-2 border-t border-[#C49A47]/20">
              <button
                onClick={handleToggleMute}
                className="text-[#681C32] hover:text-[#C49A47] transition-colors p-1 cursor-pointer"
                title={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-red-500" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="w-full accent-[#681C32] bg-[#FAF4EA] h-1.5 rounded-lg cursor-pointer"
                title="Volume"
              />
              <span className="text-[10px] font-mono text-[#681C32] w-8 text-right font-bold">
                {isMuted ? '0%' : `${Math.round(volume * 100)}%`}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Main Pill Button in Light Sandalwood & Gold */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center space-x-2 p-2 rounded-full bg-white/95 border-2 border-[#C49A47] shadow-[0_8px_25px_rgba(104,28,50,0.15)] backdrop-blur-md cursor-pointer"
      >
        <button
          onClick={handleTogglePlay}
          className="w-10 h-10 rounded-full bg-gradient-to-br from-[#681C32] via-[#85233F] to-[#681C32] text-white flex items-center justify-center shadow-md hover:brightness-110 transition-all cursor-pointer border border-[#C49A47]"
          title={isPlaying ? "Pause Tamil movie music" : "Play Tamil movie wedding BGM"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 fill-current" />
          ) : (
            <Play className="w-5 h-5 fill-current ml-0.5" />
          )}
        </button>

        <div
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-2 cursor-pointer flex items-center space-x-2.5"
        >
          <div className="relative">
            <Disc className={`w-6 h-6 text-[#C49A47] ${isPlaying ? 'animate-spin-slow' : 'opacity-70'}`} />
          </div>

          <div className="hidden sm:block text-left">
            <span className="text-[10px] font-sans text-[#8C6721] uppercase tracking-wider block font-bold leading-tight">
              {isPlaying ? 'Playing BGM' : 'Tamil Movie BGM'}
            </span>
            <span className="text-xs font-serif text-[#681C32] block font-bold truncate max-w-[130px]">
              {customSongName ? customSongName : (currentTrack === 'traditional' ? 'Tamil Wedding BGM' : 'Kalyana Maalai')}
            </span>
          </div>

          {isPlaying && (
            <div className="flex items-end space-x-0.5 h-4">
              <span className="w-1 h-2.5 bg-[#C49A47] animate-pulse" />
              <span className="w-1 h-4 bg-[#681C32] animate-bounce" />
              <span className="w-1 h-2 bg-[#C49A47] animate-pulse" />
            </div>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsExpanded(!isExpanded);
            }}
            className="text-[#681C32] hover:text-[#C49A47] p-1 cursor-pointer"
            title="Music Settings"
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>
        </div>
      </motion.div>
    </div>
  );
};
