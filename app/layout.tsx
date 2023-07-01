import "../css/tailwind.css";

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
  return (
    <html
      lang="en"
      className={`${oswald.variable} h-full antialiased dark js-focus-visible`}
    >
      <body className="flex h-full flex-col bg-zinc-50 dark:bg-black">
        {children}
      </body>
    </html>
  );
}
