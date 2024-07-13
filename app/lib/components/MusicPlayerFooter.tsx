"use client";
import React from "react";
import FirstPageOutlinedIcon from "@mui/icons-material/FirstPageOutlined";
import LastPageOutlinedIcon from "@mui/icons-material/LastPageOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const MusicPlayerFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full flex justify-between items-center p-3 bg-orange-300 text-white border-t-2 border-black">
      <div className="flex gap-4">
        {/* Previous Track Button */}
        <button className="shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none bg-orange-400 hover:bg-orange-500 active:bg-orange-600 rounded-xl">
          <FirstPageOutlinedIcon fontSize="large" />
        </button>
        {/* Play Button */}
        <button className="shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none bg-orange-400 hover:bg-orange-500 active:bg-orange-600 rounded-xl">
          <PlayArrowIcon fontSize="large" />
        </button>
        {/* Pause Button */}
        <button className="shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none bg-orange-400 hover:bg-orange-500 active:bg-orange-600 rounded-xl">
          <PauseOutlinedIcon fontSize="large" />
        </button>
        {/* Next Track Button */}
        <button className="shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none bg-orange-400 hover:bg-orange-500 active:bg-orange-600 rounded-xl">
          <LastPageOutlinedIcon fontSize="large" />
        </button>
      </div>
      <div className="flex border-black py-2 px-3 gap-3 justify-center items-center border-2 rounded-full bg-gray-700 active:bg-gray-900">
        <span>Now Playing: </span>
        <strong>Song Title - Artist Name</strong>
      </div>
    </footer>
  );
};

export default MusicPlayerFooter;
