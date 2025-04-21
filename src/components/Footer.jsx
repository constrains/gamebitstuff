import Image from "next/image";
import Link from "next/link";
import { Youtube, Twitter } from "lucide-react";
export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-6 mb-4 md:mb-0">
            <Link
              href="https://www.youtube.com/@GameBitGames"
              className="text-gray-400 hover:text-white transition flex items-center hover:brightness-75 hover:scale-105 duration-700"
              target="_blank"
            >
              <Youtube className="mr-2" />
              <span className="ml-0.5">YouTube</span>
            </Link>
            <Link
              href="https://x.com/stra_ins"
              className="text-gray-400 gap-2 hover:text-white transition flex items-center hover:brightness-75 hover:scale-105 duration-700"
              target="_blank"
            >
              <img className="" src={"/twitter.svg"} width={20} alt="Twitter Logo" />
              <span>Twitter</span>
            </Link>
            <Link
              href="https://www.roblox.com/users/2446095303/profile"
              className="text-gray-400 gap-2 hover:text-white transition flex items-center hover:brightness-75 hover:scale-105 duration-700"
              target="_blank"
            >
              <img className="" src={"/roblox.svg"} width={20} alt="Roblox Logo" />
              <span>Roblox</span>
            </Link>
            <Link
              href="https://discord.com"
              className="text-gray-400 gap-2 hover:text-white transition flex items-center hover:brightness-75 hover:scale-105 duration-700"
              target="_blank"
            >
              <img className="" src={"/discord.svg"} width={20} alt="Discord Logo" />
              <span>Discord</span>
            </Link>
          </div>

          <nav className="flex flex-col md:flex-row gap-3 items-center space-x-6">
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
        </div>

        <div className="text-center text-gray-500 text-sm">
          <p>Copyright © {new Date().getFullYear()} Gamebit - <Link className="text-blue-500" href={"https://altimox.dev"} target="_blank">Made by Altimox</Link></p>
        </div>
      </div>
    </footer>
  );
}
