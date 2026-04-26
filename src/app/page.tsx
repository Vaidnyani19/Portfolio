"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [terminalText, setTerminalText] = useState("");
  const fullText = "> model.evaluate(test_data)\nAccuracy: 0.9842\nLoss: 0.0412\n> deploy --target=production\nBuilding image...\nPushing to registry...\nDeployment successful.";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTerminalText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 30);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-transparent font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 selection:bg-primary selection:text-[#0A0A0F] overflow-hidden">
      <div className="relative flex flex-col dot-matrix overflow-x-hidden">
        {/* Background Scanline */}
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
          <div className="w-full h-[2px] bg-primary/5 absolute top-0 left-0 animate-scan opacity-20"></div>
        </div>

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

        {/* Main Hero Section */}
        <main className="flex flex-col justify-center items-center px-6 relative z-20">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-4xl w-full text-center space-y-8 py-20"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-widest text-primary">Available for new deployment</span>
            </motion.div>

            <div className="space-y-4">
              <motion.p variants={fadeIn} className="font-[family-name:var(--font-mono)] text-primary text-sm tracking-[0.3em] uppercase opacity-80">Data Science Engineer | AI Engineer</motion.p>
              <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-bold tracking-tighter leading-none">
                I turn raw data into <span className="text-primary underline decoration-primary/30 underline-offset-8">decisions.</span>
              </motion.h1>
              <motion.p variants={fadeIn} className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light italic">
                &quot;Building intelligence, one model at a time.&quot;
              </motion.p>
            </div>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Link href="/projects" className="group relative px-8 py-4 bg-primary text-[#0A0A0F] font-bold rounded overflow-hidden transition-all inline-block">
                <span className="relative z-10 flex items-center gap-2">
                  View Work <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">arrow_forward</span>
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <a 
                href="/resume.pdf" 
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-primary/40 text-primary hover:bg-primary/10 rounded transition-all font-[family-name:var(--font-mono)] text-sm uppercase tracking-wider text-center"
              >
                View Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Decorative Terminal Window */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="absolute bottom-24 right-10 hidden xl:block w-72 p-4 bg-[#16161E]/80 backdrop-blur border border-white/10 rounded-lg font-[family-name:var(--font-mono)] text-[10px] text-slate-500 shadow-2xl"
          >
            <div className="flex gap-1.5 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
              <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
            </div>
            <div className="space-y-1 overflow-hidden">
               <pre className="whitespace-pre-wrap leading-relaxed text-slate-300">
                {terminalText}
                <span className="w-1.5 h-3 inline-block bg-primary ml-0.5 animate-pulse"></span>
               </pre>
            </div>
          </motion.div>
        </main>

        {/* Stats Bar */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="w-full bg-[#16161E]/50 border-t border-primary/10 py-12 px-6 relative z-20"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { num: "3+", label: "Projects", desc: "ML, Deep Learning & Big Data pipelines built end-to-end." },
                { num: "5+", label: "Certifications", desc: "Python, Cybersecurity, Data Analytics, Entrepreneurship." },
                { num: "2+", label: "Domains", desc: "Chemical Engineering + Data Science — rare, powerful combo." }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="flex flex-col items-center md:items-start space-y-2 group p-4 rounded-lg hover:bg-white/5 transition-all duration-300"
                >
                  <div className="flex items-end gap-2 text-primary">
                    <span className="text-4xl font-bold tracking-tighter">{stat.num}</span>
                    <span className="font-[family-name:var(--font-mono)] text-xs text-slate-500 mb-2 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <p className="text-sm text-slate-400 border-l border-primary/20 pl-4 group-hover:border-primary transition-colors leading-relaxed">{stat.desc}</p>
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
