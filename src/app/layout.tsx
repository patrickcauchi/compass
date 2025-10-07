
import "../styles/globals.css";
import Header from "../components/Header";
import React from "react";

export const metadata = {
  title: "Compass",
  description: "Compass app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-white min-h-screen">
        <Header />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
