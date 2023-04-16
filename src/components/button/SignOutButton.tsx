"use client";
import React from "react";
import { signOut } from "next-auth/react";
import { VscSignOut } from "react-icons/vsc";

const SignOutButton = () => {
  return (
    <button
      onClick={() => signOut()}
      className="flex space-x-1 items-center mx-auto ml-0 p-1 rounded-sm cursor-pointer text-xs"
    >
      <VscSignOut className="text-sm mr-1" />
      Sign out
    </button>
  );
};

export default SignOutButton;
