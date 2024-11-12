"use client";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import OpenInNew from "@mui/icons-material/OpenInNew";

const SearchHeader = () => {
  return (
    <div className="flex sticky justify-between items-center bg-gray-200 px-6 py-8 h-20 overflow-hidden gap-2">
      <div className="flex items-start bg-white px-4 py-2 border-gray-400 border-r-16 gap-4 rounded-lg w-full">
        <SearchIcon className="text-gray-600" />
        <input
          className="border-none outline-none bg-white w-full"
          placeholder="Search a chat"
          type="text"
        />
      </div>
      <OpenInNew fontSize="small" />
    </div>
  );
};

export default React.memo(SearchHeader);
