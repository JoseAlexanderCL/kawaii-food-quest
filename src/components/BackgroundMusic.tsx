import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { KawaiiButton } from "@/components/KawaiiButton";

export const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => setPlaying(false));
    }
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play();
      setPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-4 right-4">
      <audio ref={audioRef} src="/bg-music.mp3" loop autoPlay />
      <KawaiiButton size="sm" onClick={toggle} aria-label={playing ? "Pausar música" : "Reproducir música"}>
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </KawaiiButton>
    </div>
  );
};
