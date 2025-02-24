"use client";

import React from "react";
import { motion } from "framer-motion";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-black relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <div className="relative z-10">
        <h1 className="text-5xl font-bold text-white">
          Aceternity UI is amazing
        </h1>
        <p className="text-gray-300 mt-4">
          This is an example of the SVG mask effect.
        </p>
      </div>
    </div>
  );
}