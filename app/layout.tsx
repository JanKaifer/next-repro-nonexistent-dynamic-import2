"use client";

import { useEffect } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    console.log("mounted Layout");
    return () => {
      console.log("unmounted Layout");
    };
  });
  return (
    <html>
      <head />
      <body>{children}</body>
    </html>
  );
}
