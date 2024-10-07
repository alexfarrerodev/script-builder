// app/layout.tsx
"use client"; // Client component policy usage

import React, { useState, useEffect } from "react";
import { metadata } from "./metadata"; // Imports metadata from a new file
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link"; // Importar el componente Link

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsHeaderVisible(currentScrollY < prevScrollY || currentScrollY === 0);
    setPrevScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Black bar */}
        <header
          style={{
            backgroundColor: "rgba(10, 10, 10, 0.85)", // Color negro con 80% de opacidad            
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            transition: "transform 0.3s ease ,  backdrop-filter 0.3s ease",
            transform: isHeaderVisible ? "translateY(0)" : "translateY(-100%)",
            zIndex: 1000, // Put in the first layer
            backdropFilter: "blur(12px)"
          }}
        >
          <div className="flex ">
            <div className="w-1/3 mb-1">
              <div className="flex justify-end mr-12">
                <Link href="/" className="flex items-center max-w-xs transition mr-5 transform duration-150 hover:scale-95 text-white text-xl font-normal px-4 py-2 rounded-full">
                  <img src="/icon_page.png" alt="ico" className="transition transform duration-150 hover:scale-95 w-8.5 h-7 mr-2" />
                  ScriptMaker
                </Link>
              </div>
            </div>
            <div className="w-1/3 mt-1">
              <div className="flex items-center justify-center space-x-5">
                <ul className="flex items-center space-x-4">
                  <li className="flex items-center">
                    <Link href="/" className="transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full">
                      Docs
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link href="/faq" className="transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full">
                      FAQ
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link href="/" className="transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full">
                      Script builder
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link href="/about" className="transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full">
                      About
                    </Link>
                  </li>
                  <li className="flex items-center">
                    <Link href="/start" className="transition transform duration-150 hover:scale-95 text-white hover:bg-white hover:text-black font-medium px-4 py-2 rounded-full">
                      Start
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/3 mt-2">
              <div className="flex justify-end mr-[365px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-white text-gray-800 py-0.5  text-center rounded-full border border-white-300 focus:outline-none focus:ring-2 focus:ring-white-500"
                />
                <span className="flex -left-2  transform mt-1 text-gray-500 -ml-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 4a6 6 0 100 12 6 6 0 000-12zM16 16l4 4"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* primary container */}
        <main style={{ marginTop: "60px" }}>{children}</main>

        {/* foot page bar */}
        <footer style={{ backgroundColor: "#0a0a0a", padding: "1rem", marginTop: "auto" }}>
          <p style={{ color: "#fff", textAlign: "center" }}>© 2024 Alex Farrero script_maker dev</p>
        </footer>
      </body>
    </html>
  );
}
