"use client";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const MainScreenHeader: React.FC = () => {
  return (
    <div className="sticky top-0 p-2 h-20 bg-gray-200 border-b border-gray-400 z-10 flex items-center justify-start">
      <div>
        <AccountCircleIcon />
      </div>
      <div className="flex flex-col p-2">
        <p className="text-sm">Unknown</p>
      </div>
    </div>
  );
};

export default MainScreenHeader;
