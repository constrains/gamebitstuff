import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gamebitstudio.com"),
  title: "GameBit Roblox Studios",
  description: "GameBit Roblox Studios - Crafting unique and immersive Roblox experiences for players around the world.",
  keywords: ["GameBit", "GameBit Roblox Studio", "Roblox Development", "Custom Roblox Games", "GameBit Studios"],
  openGraph: {
    title: 'GameBit Roblox Studios',
    description: "GameBit Roblox Studios - Crafting unique and immersive Roblox experiences for players around the world.",
    images: '/gamebit.webp'
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
