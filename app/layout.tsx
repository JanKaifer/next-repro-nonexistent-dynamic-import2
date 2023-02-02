"use client";

import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("mounted");
    return () => {
      console.log("unmounted");
    };
  }, []);
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
