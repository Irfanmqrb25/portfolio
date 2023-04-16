"use client";
import React from "react";
import Image from "next/image";
import GoogleIcon from "../../assets/google-icon.svg";
import { signIn } from "next-auth/react";

const SignInButton = () => {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex border px-2 items-center space-x-2 justify-center tracking-wider rounded-md w-full md:w-[250px] bg-slate-800 text-white cursor-pointer"
    >
      <Image src={GoogleIcon} alt="google icon" className="w-[40px] mr-2" />
      Sign in with Google
    </button>
  );
};

export default SignInButton;
