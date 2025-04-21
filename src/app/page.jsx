import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import About from "@/components/About";
import Acquisition from "@/components/Acquisition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { fetchGames } from "@/components/fetchGames";

export default async function Home() {
  const { games, totalGames, totalPlayers, totalVisits } = await fetchGames();
  return (
    <div className="flex flex-col min-h-screen bg-[#0D0D0D] text-white ">
      <Navbar />
      <main className="flex-grow">
        <Hero totalGames={totalGames} totalPlayers={totalPlayers} totalVisits={totalVisits} />
        <FeaturedGames games={games} />
        <About />
        <Acquisition />
        <Contact />
      </main >
      <Footer />
    </div >
  );
}
