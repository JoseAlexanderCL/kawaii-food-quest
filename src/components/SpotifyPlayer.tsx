import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { KawaiiButton } from "@/components/KawaiiButton";

interface SpotifyPlayerProps {
  playlistId?: string;
}

export const SpotifyPlayer = ({ playlistId }: SpotifyPlayerProps) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [playing, setPlaying] = useState(false);

  const id = playlistId ?? import.meta.env.VITE_SPOTIFY_PLAYLIST_ID;
  if (!id) return null;

  const toggle = () => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    iframe.contentWindow?.postMessage(
      { command: playing ? "pause" : "play" },
      "https://open.spotify.com"
    );
    setPlaying(!playing);
  };

  return (
    <div className="fixed bottom-4 right-4 w-[300px] h-[80px]">
      <iframe
        ref={iframeRef}
        src={`https://open.spotify.com/embed/playlist/${id}`}
        width="300"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify player"
      ></iframe>
      <div className="mt-2 flex justify-end">
        <KawaiiButton
          size="sm"
          onClick={toggle}
          aria-label={playing ? "Pausar playlist" : "Reproducir playlist"}
        >
          {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </KawaiiButton>
      </div>
    </div>
  );
};
