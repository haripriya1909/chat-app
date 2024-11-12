"use client";
import React, { useState } from "react";
// import React, { use, useEffect } from "react";
import { IconButton } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import AttachFileIcon from "@mui/icons-material/AttachFile";


const MessageInput: React.FC = () => {
  const [messageText, setMessageText] = useState("");
  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("message sent");
  };
  return (
    <div className="sticky bottom-0 z-10 h-20 bg-gray-200 border-t bordder-gray-400 flex flex-1 items-center justify-between py-6 px-4 ">
      <IconButton>
        <MoodIcon />
      </IconButton>
      <IconButton>
        <AttachFileIcon />
      </IconButton>
      <form onSubmit={sendMessage} className="w-full">
        <input
          type="text"
          className="w-full rounded-lg p-2 outline-none"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}></input>
      </form>
    </div>
  );
};

export default MessageInput;
