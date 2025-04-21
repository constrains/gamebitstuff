'use client'

import Image from "next/image";
import { NotepadText } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState("")


  const handleCopy = () => {
    const currentUrl = "0strain";

    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => {
        console.error('Failed to copy URL: ', err);
      });
  };

  return (
    <section className="py-12" id="contact">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-md mx-auto bg-[#000000] border border-gray-800 rounded-lg p-6 shadow-[0_0_15px_2px_rgba(255,255,255,0.1)] fadeUp">
          <div className="flex items-center">
            <div
              className="h-16 w-16 rounded-full overflow-hidden mr-4 select-none pointer-events-none"
              draggable="false"
            >
              <Image
                src="/avatar.webp"
                alt="Profile"
                width={64}
                height={64}
                className="w-full h-full object-cover "
              />
            </div>
            <div>
              <div className="flex items-center mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-sky-400 mr-2"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <h3 className="text-xl md:text-2xl font-bold">
                  Lets get going
                </h3>
              </div>
              <p className="text-sm md:text-base">
                Add me on discord to talk to me
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-center">
            <button onClick={handleCopy} className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md flex items-center cursor-pointer hover:scale-105 transition-all duration-500">
              <NotepadText />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
