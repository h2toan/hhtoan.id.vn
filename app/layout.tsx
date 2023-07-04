"use client";
import Container from "../components/layout/Container";
import ContentWrapper from "../components/layout/ContentWrapper";
import MainContent from "../components/layout/MainContent";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

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

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <html
      lang="en"
      className={`${oswald.variable} h-full antialiased ${theme}`}
    >
      <head></head>
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        <Container></Container>
        <ContentWrapper>
          <Header
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
          ></Header>
          <MainContent>{children}</MainContent>
          <Footer setActiveIndex={setActiveIndex}></Footer>
        </ContentWrapper>
      </body>
    </html>
  );
}
