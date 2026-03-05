"use client";

import { useEffect, useRef, useState } from "react";
import WaveSurfer from "wavesurfer.js";

interface Props {
  audio: string;
  label?: string;
  mutedStyle?: boolean;
}

let activePlayer: any = null; // control global para auto-pause

export default function WaveformPlayer({
  audio,
  label,
  mutedStyle,
}: Props) {
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const waveInstance = useRef<any>(null);

  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState("0:00");
  const [duration, setDuration] = useState("0:00");

  useEffect(() => {
    if (!waveformRef.current) return;
    if (waveInstance.current) return;

    const ws = WaveSurfer.create({
        container: waveformRef.current,
        waveColor: mutedStyle
            ? "rgba(150,150,150,0.3)"
            : "rgba(180,180,180,0.4)",

        progressColor: mutedStyle
            ? "#3333FF"                 // Before normal
            : "#0961EA",                // After más intenso

        cursorColor: mutedStyle
            ? "#3333FF"
            : "#0961EA",

        height: 60,
        barWidth: 2,
        responsive: true,
    });


    ws.load(audio);

    ws.on("ready", () => {
      setDuration(formatTime(ws.getDuration()));
    });

    ws.on("audioprocess", () => {
      setCurrentTime(formatTime(ws.getCurrentTime()));
    });

    ws.on("seek", () => {
      setCurrentTime(formatTime(ws.getCurrentTime()));
    });

    ws.on("play", () => {
      // pausar el anterior si existe
      if (activePlayer && activePlayer !== ws) {
        activePlayer.pause();
      }
      activePlayer = ws;
      setPlaying(true);
    });

    ws.on("pause", () => {
      setPlaying(false);
    });

    ws.on("finish", () => {
      setPlaying(false);
    });

    waveInstance.current = ws;

    return () => {
      ws.destroy();
      waveInstance.current = null;
    };
  }, [audio, mutedStyle]);

  const togglePlay = () => {
    if (!waveInstance.current) return;
    waveInstance.current.playPause();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div className="space-y-2">
      {/* Label + tiempo */}
      <div className="flex justify-between text-xs uppercase tracking-widest text-primary/70">
        <span>{label}</span>
        <span>
          {currentTime} / {duration}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* BOTON PLAY AMARILLO */}
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full border border-[#E8D834] flex items-center justify-center text-[#E8D834] hover:bg-[#E8D834] hover:text-black transition"
        >
          {playing ? (
            <div className="flex gap-1">
              <div className="w-1 h-4 bg-current" />
              <div className="w-1 h-4 bg-current" />
            </div>
          ) : (
            <div className="w-0 h-0 border-l-[8px] border-l-current border-y-[5px] border-y-transparent ml-1" />
          )}
        </button>

        <div className="flex-1">
          <div ref={waveformRef} />
        </div>
      </div>
    </div>
  );
}
