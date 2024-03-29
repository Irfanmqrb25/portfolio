import * as React from "react";
import SideBar from "@/components/Sidebar";
import "./globals.css";
import "animate.css";
import { Montserrat } from "next/font/google";
import clsx from "clsx";
import Providers from "./Providers";

export const metadata = {
  metadataBase: new URL("https://irfanmuqorib.vercel.app"),
  title: "Irfan Muqorib",
  icons: "/assets/profile.png",
  description: "Irfan Muqorib's personal website.",
  openGraph: {
    title: "Irfan Muqorib",
    description: "Irfan Muqorib's personal website.",
    url: "https://irfanmuqorib.vercel.app",
    siteName: "Irfan Muqorib",
    locale: "id-ID",
    type: "website",
  },
};

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          <div
            className={clsx(
              "flex flex-col md:flex-row md:ml-20 lg:ml-52 2xl:ml-64 md:mt-20 md:mr-10 xl:mr-40 md:space-x-10",
              montserrat.variable
            )}
          >
            <SideBar />
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
