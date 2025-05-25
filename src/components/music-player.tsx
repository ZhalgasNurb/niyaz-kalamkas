"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface MusicPlayerProps {
  audioSrc?: string;
}

export default function MusicPlayer({
  audioSrc = "/placeholder-music.mp3",
}: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      // Auto-play on page load (with user interaction requirement)
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Auto-play failed, user needs to interact first
          console.log("Auto-play prevented by browser");
        });
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
  };

  return (
    <>
      {/* Hidden audio element */}
      <audio ref={audioRef} loop preload="auto" src={audioSrc} />

      {/* Music Player Button */}
      <div className="fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="relative">
          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            disabled={!isLoaded}
            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white fill-white" />
            ) : (
              <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
            )}
          </button>

          {/* Loading indicator */}
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
