import Image from "next/image";
import Link from "next/link";
import { MessageCircleMore, Gamepad2 } from "lucide-react";


export default function Hero({ totalGames, totalPlayers, totalVisits }) {
  function formatNumber(value) {
    if (value >= 1e9) {
      return (value / 1e9).toFixed(1) + 'B+';
    } else if (value >= 1e6) {
      return (value / 1e6).toFixed(1) + 'M+';
    } else if (value >= 1e3) {
      return (value / 1e3).toFixed(1) + 'K+';
    } else {
      return value.toString();
    }
  }
  return (
    <section className="relative w-full py-70">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/RobloxBackground.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70 bg-opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-around gap-8">
          <div className="flex flex-col items-center mb-6 md:mb-0 fadeUp">
            <div
              className="mr-4 select-none pointer-events-none"
              draggable="false"
            >
              <Image
                src="/gamebit.webp"
                alt="Gamebit Logo"
                width={450}
                height={80}
              />
              <p className="text-lg md:text-xl mt-3">Seeking for front-page games</p>
            </div>

            <div className="mt-6 w-full flex flex-wrap justify-start items-start place-items-start gap-2">
              <Link href={"#contact"}>
                <button className="bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-md flex mr-2 items-center cursor-pointer gap-2 hover:scale-105 transition-all duration-500">
                  <MessageCircleMore />
                  Contact
                </button>
              </Link>
              <Link href={"#games"}>
                <button className="bg-white hover:bg-gray-200 flex gap-2 text-black py-2 px-4 rounded-md cursor-pointer hover:scale-105 transition-all duration-500">
                  <Gamepad2 />
                  Check our games
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full shadow-[0_0_15px_1px_rgba(255,255,255,0.2)] md:w-auto bg-gray-900/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm fadeIn">
            <p className="text-center text-sm mb-2">
              Current stats to our games:
            </p>
            <div className="flex justify-between gap-8">
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold">{totalGames}</p>
                <p className="text-sm md:text-lg">Total Games</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold">{formatNumber(totalPlayers)}</p>
                <p className="text-sm md:text-lg">Players Playing</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-4xl font-bold">{formatNumber(totalVisits)}</p>
                <p className="text-sm md:text-lg">Total Visits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
