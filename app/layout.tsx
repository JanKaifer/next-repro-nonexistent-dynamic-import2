import { Component } from "./component";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body>
        <Component />
        {children}
      </body>
    </html>
  );
}
