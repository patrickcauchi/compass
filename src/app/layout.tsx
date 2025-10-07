
import "../styles/globals.css";
import Header from "../components/Header";
import React from "react";

export const metadata = {
  title: "Compass",
  description: "Compass app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-950 text-gray-200">
      <body className="font-sans antialiased min-h-screen flex flex-col items-center">
        <Header />
        <main
          className="
            pt-24 pb-20
            flex flex-col items-center
            w-full max-w-4xl
            px-4 space-y-12
          "
        >
          {children}
        </main>
      </body>
    </html>
  );
}
