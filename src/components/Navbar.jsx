"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-20 py-4 px-6 flex items-center justify-between">
      <Link
        href="/"
        className="flex items-center select-none"
        draggable="false"
      >
        <Image
          src="/gamebit-logo.webp"
          alt="Gamebit Logo"
          width={30}
          height={30}
          className="mr-2"
        />
      </Link>

      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="#games"
          className="text-gray-300 hover:text-white font-bold transition hover:scale-105 duration-700"
        >
          Our Games
        </Link>
        <Link
          href="#about"
          className="text-gray-300 hover:text-white font-bold transition hover:scale-105 duration-700"
        >
          About Us
        </Link>
        <Link
          href="#acquisition"
          className="text-gray-300 hover:text-white font-bold transition hover:scale-105 duration-700"
        >
          Game Acquisitions
        </Link>
      </nav>

      <button
        className="md:hidden text-white p-2"
        onClick={() => setMobileMenuOpen(true)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden">
          <div className="fixed right-0 top-0 h-full w-[300px] bg-gray-900 p-4 shadow-lg">
            <div className="flex items-center justify-between mb-5 pb-3">
              <div className="flex items-center">
                <Image
                  src="/gamebit.webp"
                  alt="Gamebit Logo"
                  width={100}
                  height={20}
                  className="mr-2"
                />
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-400 hover:text-white"
                aria-label="Close menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col space-y-1">
              <Link
                href="#games"
                className="text-gray-300 py-3 px-4 rounded-md hover:bg-gray-800 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Games
              </Link>
              <Link
                href="#about"
                className="text-white py-3 px-4 rounded-md hover:bg-gray-800 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="#acquisition"
                className="text-gray-300 py-3 px-4 rounded-md hover:bg-gray-800 hover:text-white transition"
                onClick={() => setMobileMenuOpen(false)}
              >
                Game Acquisitions
              </Link>
            </nav>
            <div className="absolute bottom-4 left-4 right-4 pt-4 border-t border-gray-800">
              <Link href={"#contact"}>
                <button
                  className="w-full bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
