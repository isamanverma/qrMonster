import { Github, Linkedin } from "lucide-react";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full bg-white px-6 py-4 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/qr-code.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-md transition-transform duration-300 hover:scale-105"
          />
          <p className="hidden text-2xl font-medium text-gray-800 sm:block">
            QRMonster
          </p>
        </Link>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          {/* GitHub */}
          <Link
            href="https://github.com/isamanverma"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:border-gray-700 hover:text-gray-900 sm:border-0 sm:px-2 sm:py-2"
          >
            <Github size={20} />
            <span className="hidden sm:inline">GitHub</span>
          </Link>

          {/* LinkedIn */}
          <Link
            href="https://www.linkedin.com/in/aman-kumar-verma-/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-md border border-blue-300 px-4 py-2 text-sm font-medium text-blue-700 transition-all hover:border-blue-700 hover:text-blue-900 sm:border-0 sm:px-2 sm:py-2"
          >
            <Linkedin size={20} />
            <span className="hidden sm:inline">LinkedIn</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
