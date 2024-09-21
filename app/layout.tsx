import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Viditor",
  description: "Ai Video Editor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased scroll-smooth bg-slate-950`}
      >
        {children}
      </body>
    </html>
  );
}
