"use client";

import React from "react";
import { handleSignIn } from "./helper";
import { useRouter } from "next/navigation";

const LoginButton: React.FC = () => {
  const router = useRouter();

  return (
    <button
      className="p-4 border-black-rounded border-2 rounded-md hover:bg-gray-100"
      onClick={() => handleSignIn(router)}>
      Sign In With Google
    </button>
  );
};

export default LoginButton;
