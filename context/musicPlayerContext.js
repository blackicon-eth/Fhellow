// musicPlayerContext.js
"use client";
import React, { createContext, useContext, useState } from "react";

const MusicPlayerContext = createContext();

export const useMusicPlayer = () => useContext(MusicPlayerContext);

export const MusicPlayerProvider = ({ children }) => {
  const [trackUrl, setTrackUrl] = useState("https://samplelib.com/lib/preview/mp3/sample-15s.mp3");

  const changeTrack = (newUrl) => {
    setTrackUrl(newUrl);
  };

  return <MusicPlayerContext.Provider value={{ trackUrl, changeTrack }}>{children}</MusicPlayerContext.Provider>;
};
