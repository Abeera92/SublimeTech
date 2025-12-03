import React from "react";
import { MapPin } from "lucide-react";
import bgimg from "../../assets/herobanner.jpg";

export default function ContactHero() {
  const offices = [
    { title: "USA OFFICE", address: "4100 N Miami Ave Suite 116, FL 33127" },
    { title: "UK OFFICE", address: "221B Baker Street, London NW1 6XE" },
    { title: "GERMANY OFFICE", address: "Friedrichstrasse 123, Berlin 10117" },
    { title: "NETHERLANDS OFFICE", address: "Kalverstraat 45, 1012 NX Amsterdam" },
  ];

  return (
    <>
      {/* HERO BANNER */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Heading Text */}
        <div className="relative text-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight drop-shadow-lg">
            Let’s Start Something <br /> Great Together
          </h1>
        </div>
      </section>

      {/* MAP CARDS SECTION (OVERLAPPING HERO) */}
      <div className="relative z-20 -mt-24 pb-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">

          {offices.map((office, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl border border-gray-800"
            >
              <iframe
                src="https://maps.google.com/maps?q=New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-40"
                loading="lazy"
              ></iframe>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-teal-500 mb-2">
                  {office.title}
                </h3>

                <p className="text-sm text-gray-300 flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 text-teal-500" />
                  {office.address}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}
