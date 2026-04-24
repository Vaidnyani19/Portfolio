"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

function FloatingCode() {
  const codeSnippets = ["{ }", "[]", "=>", "f(x)", "Σ", "01", "μ"];
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {codeSnippets.map((snip, i) => (
        <motion.div
          key={i}
          initial={{ 
            x: Math.random() * 100 + "%", 
            y: Math.random() * 100 + "%",
            opacity: 0 
          }}
          animate={{ 
            y: [null, "-20%"],
            opacity: [0, 1, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: Math.random() * 10 + 10, 
            repeat: Infinity, 
            ease: "linear",
            delay: Math.random() * 5
          }}
          className="absolute text-primary font-mono text-[10px]"
        >
          {snip}
        </motion.div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "> model.evaluate(test_data)\nAccuracy: 0.9842\nLoss: 0.0412\n> deploy --target=production\nBuilding image...\nPushing to registry...\nDeployment successful.";

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#f5f8f8] dark:bg-[#050D0E] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-[#0A0A0F] overflow-hidden min-h-screen">
      <div className="relative min-h-screen flex flex-col overflow-x-hidden">
        
        {/* Cinematic Background Layer */}
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 z-0 pointer-events-none opacity-40"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(0,246,255,0.05),_transparent_70%)]"></div>
          <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(rgba(0,246,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,246,255,0.03) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse at 50% 50%, black, transparent 80%)'
          }}></div>
        </motion.div>

        <FloatingCode />

        {/* Decoration Elements */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-10 left-10 w-32 h-32 border-t border-l border-primary/30 pointer-events-none"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute bottom-10 right-10 w-32 h-32 border-b border-r border-primary/30 pointer-events-none"
        ></motion.div>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col justify-center items-center px-6 relative z-20">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-5xl w-full text-center space-y-10 py-20"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/5 border border-primary/10 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary/80">System.Status: Synchronized</span>
            </motion.div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{ y: textY }}
              >
                <p className="font-mono text-primary text-xs md:text-sm tracking-[0.4em] uppercase opacity-60 mb-4">Engineering Intelligent Solutions</p>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.9] text-white">
                  Design <span className="text-primary italic">Better</span><br/>
                  <span className="text-slate-500">Analyze</span> Faster.
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-xl md:text-2xl text-slate-400 max-w-2xl mx-auto font-light leading-relaxed"
              >
                I am <span className="text-white font-medium">Vaidnyani Thakare</span>, a Data Science Engineer bridging the gap between <span className="text-primary">Chemical Engineering</span> and <span className="text-primary">Artificial Intelligence</span>.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8"
            >
              <Link href="/projects" className="group relative px-10 py-5 bg-primary text-[#050D0E] font-bold rounded-2xl overflow-hidden transition-all shadow-[0_10px_30px_rgba(0,246,255,0.15)] hover:shadow-[0_10px_40px_rgba(0,246,255,0.3)]">
                <span className="relative z-10 flex items-center gap-3 text-lg">
                  Explore Systems <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">bolt</span>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>
              </Link>
              <Link href="/about" className="px-10 py-5 border border-white/10 text-white hover:bg-white/5 rounded-2xl transition-all font-bold text-lg">
                The Journey
              </Link>
            </motion.div>
          </motion.div>

          {/* Terminal HUD */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-24 right-10 hidden 2xl:block w-80 p-6 bg-[#0f2223]/80 backdrop-blur-xl border border-primary/20 rounded-2xl font-mono text-[11px] text-slate-500 shadow-3xl"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40"></div>
              </div>
              <span className="text-[9px] uppercase tracking-widest opacity-50">Localhost:3001</span>
            </div>
            <div className="space-y-1 overflow-hidden h-32">
               <pre className="whitespace-pre-wrap leading-relaxed text-primary/80">
                {terminalText}
                <span className="w-2 h-4 inline-block bg-primary ml-1 animate-pulse"></span>
               </pre>
            </div>
          </motion.div>
        </main>

        {/* Data Stream Stats */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-full border-t border-white/5 bg-[#081112]/50 backdrop-blur-md py-16 px-6 relative z-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { num: "3+", label: "Research Projects", desc: "From Phishing Detection to GAN Music Generation." },
                { num: "5+", label: "Specializations", desc: "Python, Spark, ML, Big Data & Cybersecurity." },
                { num: "7.78", label: "CGPA (ChemE)", desc: "Engineering rigor applied to data science." }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="space-y-3 p-6 rounded-2xl hover:bg-white/5 transition-all"
                >
                  <div className="text-4xl font-bold text-white tracking-tighter flex items-center gap-3">
                    <span className="text-primary">{stat.num}</span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <p className="text-sm text-slate-500 leading-relaxed font-light">{stat.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Footer */}
        <footer className="py-8 px-6 relative z-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
              <a 
                className="text-slate-500 hover:text-primary transition-all hover:scale-110" 
                href="https://github.com/Vaidnyani19"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.61-4.041-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
              </a>
              <a 
                className="text-slate-500 hover:text-primary transition-all hover:scale-110" 
                href="https://www.linkedin.com/in/vaidnyani-thakare-943a99359"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <div className="h-4 w-px bg-slate-800"></div>
              <span className="text-xs text-slate-500 font-[family-name:var(--font-mono)]">ROOT@PORTFOLIO:~$</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
