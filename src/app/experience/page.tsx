"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

function TimelineItem({ item, index, isLast }: { item: any; index: number; isLast: boolean }) {
    const isEven = index % 2 === 0;
    
    return (
        <div className="relative mb-32 group">
            <div className={`md:flex items-center justify-between ${isEven ? "" : "flex-row-reverse"}`}>
                {/* Date Label Mobile */}
                <div className={`md:hidden flex items-center gap-2 mb-6 ${isEven ? "ml-10" : "mr-10 justify-end"}`}>
                    <span className="px-4 py-1 rounded-xl bg-[#0f2223] border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest leading-none shadow-lg shadow-primary/5">{item.date}</span>
                </div>

                {/* Header Content */}
                <motion.div 
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`md:w-[45%] mb-8 md:mb-0 flex flex-col ${isEven ? "md:items-end md:text-right" : "md:items-start md:text-left"} justify-center`}
                >
                    <div className="hidden md:block mb-6">
                        <span className="px-5 py-2 rounded-2xl bg-primary/5 border border-primary/10 text-primary text-[10px] font-bold uppercase tracking-[0.3em] leading-none">{item.date}</span>
                    </div>
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-[0.9] tracking-tighter group-hover:text-primary transition-colors duration-500">{item.title}</h3>
                    <p className="text-primary/70 text-2xl font-light tracking-tight italic opacity-80">{item.company}</p>
                </motion.div>

                {/* Central Node */}
                <div className="absolute left-0 md:left-1/2 top-10 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center size-12 md:size-16 rounded-3xl bg-[#050D0E] border-2 border-primary/20 z-10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(0,246,255,0.4)] group-hover:rotate-[15deg] transition-all duration-700 overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
                    <span className="material-symbols-outlined text-primary text-2xl md:text-3xl relative z-10">{item.icon}</span>
                </div>

                {/* Detail Card */}
                <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className={`md:w-[45%] ${isEven ? "ml-10 md:ml-0" : "mr-10 md:mr-0"} p-10 rounded-[2.5rem] bg-[#0f2223]/50 backdrop-blur-xl border border-white/5 hover:border-primary/30 transition-all duration-700 shadow-3xl relative overflow-hidden group/card`}
                >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] rounded-full -mr-16 -mt-16 group-hover/card:bg-primary/10 transition-all duration-700"></div>
                    <ul className="space-y-8 relative z-10">
                        {item.points.map((point: string, i: number) => (
                            <li key={i} className="flex gap-5">
                                <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-1 opacity-50">arrow_right_alt</span>
                                <p className="text-slate-400 text-lg leading-relaxed font-light">
                                    {point.split('**').map((part, idx) => idx % 2 === 1 ? <strong key={idx} className="text-white font-semibold">{part}</strong> : part)}
                                </p>
                            </li>
                        ))}
                    </ul>
                </motion.div>
            </div>
            {!isLast && (
                <div className="md:hidden absolute left-[23px] top-24 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-transparent"></div>
            )}
        </div>
    );
}

export default function ExperiencePage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const timelineData = [
        {
            date: "MAY — JULY 2024",
            title: "Web Development Intern",
            company: "Swaraj Asia",
            icon: "code",
            points: [
                "Designed and customised a **WordPress website** using Elementor, responsive themes, and plugins for a production client.",
                "Gained end-to-end experience in **web project lifecycle** — from design brief to live deployment."
            ]
        },
        {
            date: "2022 — 2026",
            title: "B.Tech Chemical Engineering",
            company: "MIT Academy of Engineering, Pune",
            icon: "school",
            points: [
                "Self-driven specialisation in **AI, ML, and big data** alongside chemical engineering core — built 3 end-to-end projects from scratch.",
                "Active in **E-Cell** as Core Content Member and led the **Firodiya dance team** as Head of Dance.",
                "Earned **5 industry certifications** in Python, Cybersecurity, Data Analytics, and Entrepreneurship. CGPA: 7.78."
            ]
        }
    ];

    return (
        <div className="bg-[#f5f8f8] dark:bg-[#050D0E] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 selection:text-primary min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* Background Tech Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: [0.1, 0.3, 0.1],
                                x: [Math.random() * 100, Math.random() * 100],
                                y: [Math.random() * 100, Math.random() * 100]
                            }}
                            transition={{ 
                                duration: 10 + Math.random() * 20, 
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute size-px bg-primary shadow-[0_0_15px_rgba(0,246,255,0.8)]"
                            style={{ 
                                left: `${Math.random() * 100}%`, 
                                top: `${Math.random() * 100}%`,
                                transform: `scale(${Math.random() * 5})`
                            }}
                        />
                    ))}
                </div>

                <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-20 lg:py-32">
                    {/* Section Header */}
                    <div className="flex flex-col gap-6 mb-32 relative">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-primary font-mono font-bold tracking-[0.4em] text-[10px] uppercase opacity-60">System.Sequence / EXPERIENCE</span>
                            <div className="h-px w-24 bg-primary/20"></div>
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white"
                        >
                            CAREER<br/>
                            <span className="text-primary italic">PATHWAY.</span>
                        </motion.h1>
                    </div>

                    {/* Timeline Container */}
                    <div ref={containerRef} className="relative pt-10">
                        {/* Central Animated Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2 hidden md:block">
                            <motion.div 
                                style={{ scaleY, originY: 0 }}
                                className="absolute inset-0 bg-gradient-to-b from-primary via-primary/50 to-transparent"
                            />
                        </div>

                        {timelineData.map((item, idx) => (
                            <TimelineItem 
                                key={idx} 
                                item={item} 
                                index={idx} 
                                isLast={idx === timelineData.length - 1} 
                            />
                        ))}
                    </div>

                    {/* Education Grid Overlay */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-60 pt-40 border-t border-white/5"
                    >
                        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-24">
                            <div className="space-y-6">
                                <div className="size-16 rounded-3xl bg-primary/10 flex items-center justify-center border border-primary/20 shadow-2xl">
                                    <span className="material-symbols-outlined text-primary text-3xl font-bold">school</span>
                                </div>
                                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase">Scholastic<br/>Records.</h2>
                            </div>
                            <p className="text-slate-500 max-w-sm text-lg font-light leading-relaxed">Rigorous engineering foundation coupled with self-driven computational mastery.</p>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {[
                                {
                                    year: "2022 — 2026",
                                    title: "B.Tech Chemical Engineering",
                                    org: "MIT Academy of Engineering, Pune",
                                    metric: "CGPA: 7.78",
                                    icon: "bolt",
                                    tags: ["ML", "Big Data", "Aspen HYSYS"]
                                },
                                {
                                    year: "2020 — 2022",
                                    title: "HSC — Science",
                                    org: "Shivaji Science College, Nagpur",
                                    metric: "80.83%",
                                    icon: "science",
                                    tags: ["Physics", "Chem", "Maths"]
                                },
                                {
                                    year: "2020",
                                    title: "SSC",
                                    org: "Providence Girls' High School",
                                    metric: "94.20%",
                                    icon: "military_tech",
                                    tags: ["Excellence", "Distinction"]
                                }
                            ].map((edu, idx) => (
                                <motion.div 
                                    key={idx}
                                    whileHover={{ y: -10 }}
                                    className="group bg-[#0f2223]/30 backdrop-blur-xl border border-[#1a3638] p-10 rounded-[3rem] hover:border-primary/40 transition-all duration-700 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[80px] -mr-16 -mt-16 group-hover:bg-primary/10 transition-all"></div>
                                    <div className="flex justify-between items-start mb-12">
                                        <span className="text-primary font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">{edu.year}</span>
                                        <div className="size-14 rounded-2xl bg-[#050D0E] border border-white/5 flex items-center justify-center group-hover:border-primary/40 transition-all shadow-xl group-hover:rotate-12">
                                            <span className="material-symbols-outlined text-primary text-2xl">{edu.icon}</span>
                                        </div>
                                    </div>
                                    <h4 className="text-3xl font-bold mb-4 leading-tight text-white">{edu.title}</h4>
                                    <p className="text-slate-500 text-sm mb-6 font-light">{edu.org}</p>
                                    <div className="text-primary font-bold text-2xl mb-10 tracking-tighter">{edu.metric}</div>
                                    
                                    <div className="flex flex-wrap gap-2">
                                        {edu.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1.5 bg-[#050D0E] rounded-xl text-[10px] font-bold text-slate-400 border border-white/5 group-hover:border-primary/20 transition-colors uppercase tracking-widest">{tag}</span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Final CTA Spacer */}
                    <div className="h-40"></div>
                </main>
            </div>
        </div>
    );
}
