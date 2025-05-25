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
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    const handleProgress = () => {
      if (audio.buffered.length > 0) {
        const progress = (audio.buffered.end(0) / audio.duration) * 100;
        setLoadProgress(progress);
      }
    };

    const handleCanPlay = () => {
      setIsLoaded(true);
      setIsLoading(false);
    };

    const handleCanPlayThrough = () => {
      setIsLoading(false);
      // Only auto-play if user hasn't interacted yet and connection is good
      interface NetworkInformation {
        effectiveType?: string;
      }
      const navConnection = (
        navigator as Navigator & { connection?: NetworkInformation }
      ).connection;
      if (navConnection && navConnection.effectiveType === "4g") {
        audio
          .play()
          .then(() => setIsPlaying(true))
          .catch(() => console.log("Auto-play prevented"));
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    const handleError = (e: unknown) => {
      console.error("Audio loading error:", e);
      setIsLoading(false);
    };

    audio.addEventListener("loadstart", handleLoadStart);
    audio.addEventListener("progress", handleProgress);
    audio.addEventListener("canplay", handleCanPlay);
    audio.addEventListener("canplaythrough", handleCanPlayThrough);
    audio.addEventListener("ended", handleEnded);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("loadstart", handleLoadStart);
      audio.removeEventListener("progress", handleProgress);
      audio.removeEventListener("canplay", handleCanPlay);
      audio.removeEventListener("canplaythrough", handleCanPlayThrough);
      audio.removeEventListener("ended", handleEnded);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio || !isLoaded) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => console.error("Error playing audio:", error));
    }
  };

  return (
    <>
      {/* Optimized audio element */}
      <audio ref={audioRef} loop={false} preload="metadata" src={audioSrc} />

      {/* Music Player Button */}
      <div className="fixed right-4 sm:right-8 top-1/2 transform -translate-y-1/2 z-50">
        <div className="relative">
          {/* Loading progress ring */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 transform -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r="45"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r="45"
                  stroke="white"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray={`${loadProgress * 2.83} 283`}
                  className="transition-all duration-300"
                />
              </svg>
            </div>
          )}

          {/* Play/Pause Button */}
          <button
            onClick={togglePlay}
            disabled={!isLoaded || isLoading}
            className="relative z-10 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white border-4 border-black rounded-full flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:transform hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-black"></div>
            ) : isPlaying ? (
              <Pause className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white fill-white" />
            ) : (
              <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white fill-white ml-1" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
