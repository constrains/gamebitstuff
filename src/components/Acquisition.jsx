import Image from "next/image";
import { Banknote, CircleCheckBig } from "lucide-react";

export default function Acquisition() {
  const services = [
    {
      id: 1,
      title: "GAME ACQUISITIONS",
      description:
        "We are always open to fully buy a game or to buy some % of it based on it's quality. We will test the game and give it a price per % or you can come up with a price",
      icon: <Banknote className="h-10 w-10" />,
    },
    {
      id: 2,
      title: "GAME QA / MANAGEMENT",
      description:
        "We offer the best QA and management services out there, and we do that for $ or % of the game's earning based on the job and how much work is needed.",
      icon: <CircleCheckBig className="h-10 w-10" />,
    },
    {
      id: 3,
      title: "GAME ACQUISITIONS",
      description:
        "We are always open to fully buy a game or to buy some % of it based on it's quality. We will test the game and give it a price per % or you can come up with a price",
      icon: <Banknote className="h-10 w-10" />,
    },
  ];

  return (
    <section className="py-12 fadeUp" id="acquisition">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          How it works:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-[#000000] rounded-lg p-6 text-center hover:scale-105 transition-all duration-500"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
