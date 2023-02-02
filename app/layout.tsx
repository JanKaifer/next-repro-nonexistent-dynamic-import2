"use client";

import { useEffect } from "react";

const Component = () => {
  useEffect(() => {
    console.log("mounted Component");
    return () => {
      console.log("unmounted Component");
    };
  });
  return <div>Component</div>;
};
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
      <body>
        <div>{children}</div>
        <Component />
      </body>
    </html>
  );
}
