"use client";

import React from "react";
import { motion } from "framer-motion";

export const MovingBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Base background */}
      <div className="absolute inset-0 bg-[#f5f8f8] dark:bg-[#081112]"></div>
      
      {/* Animated Blobs with more variation */}
      <motion.div
        animate={{
          x: [0, 150, -50, 0],
          y: [0, 100, 50, 0],
          scale: [1, 1.2, 0.9, 1],
          rotate: [0, 90, 180, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-[15%] -left-[10%] w-[50%] h-[50%] bg-primary/15 rounded-full blur-[140px]"
      ></motion.div>
      
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 150, -50, 0],
          scale: [1, 1.1, 1.3, 1],
          rotate: [0, -45, -90, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[30%] -right-[15%] w-[45%] h-[45%] bg-[#0044ff]/15 rounded-full blur-[120px]"
      ></motion.div>
      
      <motion.div
        animate={{
          x: [0, 80, -100, 0],
          y: [0, -120, 100, 0],
          scale: [1, 1.3, 1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-[20%] left-[10%] w-[40%] h-[40%] bg-accent/15 rounded-full blur-[130px]"
      ></motion.div>

      <motion.div
        animate={{
          x: [0, -50, 100, 0],
          y: [0, 80, -80, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[10%] left-[30%] w-[30%] h-[30%] bg-[#7000ff]/10 rounded-full blur-[100px]"
      ></motion.div>

      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, 150, 150, 0],
          scale: [1, 1.4, 1.2, 1],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[10%] -right-[10%] w-[35%] h-[35%] bg-[#ff0095]/10 rounded-full blur-[120px]"
      ></motion.div>

      {/* Noise Texture Overlay (Using Inline SVG for reliability) */}
      <div className="absolute inset-0 opacity-[0.05] dark:opacity-[0.08] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

    </div>
  );
};
