import { FaPlay } from "@/icons";
import React from "react";

const PlayButton = () => {
  return (
    <button className="transition opacity-0 rounded-full flex items-center bg-green-500 p-4 drop-shadow-md translate translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-100">
      <FaPlay className="text-black" />
    </button>
  );
};

export default PlayButton;
