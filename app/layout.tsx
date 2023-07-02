"use client";
import "../css/tailwind.css";
import { useEffect, useState } from "react";

import { Oswald } from "next/font/google";
const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [theme, setTheme] = useState("");
  useEffect(() => {
    let themeOption: string;
    themeOption = localStorage.getItem("theme") || "dark";
    setTheme(themeOption);
  }, []);

  return (
    <html
      lang="en"
      className={`${oswald.variable} h-full antialiased ${theme}`}
    >
      <head>
        <title>Software designer, founder, and amateur astronaut</title>
      </head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        {children}
      </body>
    </html>
  );
}
