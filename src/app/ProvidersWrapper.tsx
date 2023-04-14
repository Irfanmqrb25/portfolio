"use client";
import { SessionProvider } from "next-auth/react";

export const metadata = {
  title: "Irfan Muqorib",
  icons: "/assets/profile.png",
};

export default function ProvidersWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
