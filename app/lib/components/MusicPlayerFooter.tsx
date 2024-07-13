"use client";
import { useMusicPlayer } from "@/context/musicPlayerContext";
import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const MusicPlayerFooter = () => {
  const { trackUrl } = useMusicPlayer();

  return (
    <footer className="fixed bottom-0 w-full flex justify-between items-center p-3 bg-orange-300 text-white border-t-2 border-black">
      <AudioPlayer
        autoPlay
        src={trackUrl}
        onPlay={(e) => console.log("onPlay")}
        className="rounded-md bg-violet-300 border-black border-2 shadow-none"
      />
    </footer>
  );
};

export default MusicPlayerFooter;
