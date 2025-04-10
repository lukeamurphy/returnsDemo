import React from "react";
import logo from "../by-logo.png";

export default function HeroHeader() {
  return (
    <div className="w-full bg-white shadow px-6 py-8 mb-10 relative">
      {/* Blue Yonder Logo - Aligned Left */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2">
        <img src={logo} alt="Blue Yonder Logo" className="h-10 md:h-12" />
      </div>

      {/* Centered Title + Subtitle */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight mb-1">
          Returns Simulation App
        </h1>
        <p className="text-gray-600 text-base md:text-lg">
          Design and simulate intelligent return flows
        </p>
      </div>
    </div>
  );
}