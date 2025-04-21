import Image from "next/image";
import Link from "next/link";
export default function FeaturedGames({ games }) {
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
    <div>
      <div className="mt-10 fadeUp">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
          Featured Games
        </h2>
        <p className="text-center text-gray-400 mb-8">
          List of biggest games we worked on:
        </p>
      </div>
      <section className="w-full py-12 bg-black rounded-lg fadeIn" id="games">
        <div className="container py-12 mx-auto px-4 md:px-6">
          <div className="w-[75%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {games.map((game) => (
              <Link key={game.id} href={`https://roblox.com/games/${game.placeId}`} target="_blank">
                <div className="rounded-lg overflow-hidden hover:scale-105 transition-all duration-500">
                  <div className="relative">
                    <Image
                      src={game.thumbnailUrl}
                      alt={game.placeId}
                      width={300}
                      height={200}
                      className="w-full flex items-center rounded-lg select-none pointer-events-none"
                      draggable="false"
                    />
                  </div>
                  <div className="p-3">
                    <div className="flex items-center">
                      <h3 className="font-bold">{game.name}</h3>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-3 mt-3 text-sm">
                      <p>
                        <span className="font-bold">{game.playing}</span> Playing
                      </p>
                      <p>
                        <span className="font-bold">{formatNumber(game.visits)}</span> Visits
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
