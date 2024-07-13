"use client";
import React from "react";
import FirstPageOutlinedIcon from "@mui/icons-material/FirstPageOutlined";
import LastPageOutlinedIcon from "@mui/icons-material/LastPageOutlined";
import PauseOutlinedIcon from "@mui/icons-material/PauseOutlined";
import PlayCircleFilledWhiteOutlinedIcon from "@mui/icons-material/PlayCircleFilledWhiteOutlined";

const MusicPlayerFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full flex justify-between items-center p-3 bg-orange-300 text-white border-t-2 border-black">
      <div className="flex gap-4">
        {/* Previous Track Button */}
        <button>
          <FirstPageOutlinedIcon fontSize="large" />
        </button>
        {/* Play Button */}
        <button>
          <PlayCircleFilledWhiteOutlinedIcon fontSize="large" />
        </button>
        {/* Pause Button */}
        <button>
          <PauseOutlinedIcon fontSize="large" />
        </button>
        {/* Next Track Button */}
        <button>
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
