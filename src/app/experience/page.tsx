"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ExperiencePage() {
    return (
        <div className="bg-transparent font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 selection:text-primary">
            <div className="relative flex w-full flex-col overflow-x-hidden">
                <main className="max-w-6xl mx-auto w-full px-6 md:px-20 py-12 lg:py-24">
                    {/* Section Header */}
                    <div className="flex flex-col gap-4 mb-24">
                        <motion.span 
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-primary font-[family-name:var(--font-mono)] font-bold tracking-[0.3em] text-sm uppercase opacity-80"
                        >
                            SECTION 04 / EXPERIENCE
                        </motion.span>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-bold tracking-tighter leading-none"
                        >
                            EXPERIENCE
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-primary text-xl font-light max-w-2xl mt-4 leading-relaxed underline-offset-4 decoration-primary/30 underline"
                        >
                            Turning engineering problems into data-driven solutions — from web deployments to end-to-end ML systems.
                        </motion.p>
                    </div>

                    {/* Timeline Container */}
                    <div className="relative">
                        {/* Central Line */}
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-1/2 hidden md:block"></div>

                        {/* Entry 1: Web Dev Intern */}
                        <div className="relative mb-32 group">
                            <div className="md:flex items-center justify-between">
                                {/* Date Label Mobile */}
                                <div className="md:hidden flex items-center gap-2 mb-6 ml-10">
                                    <span className="px-4 py-1 rounded bg-[#0f2223] border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest leading-none">MAY — JULY 2024</span>
                                </div>

                                {/* Text & Detail Cards */}
                                <div className="md:w-[45%] mb-8 md:mb-0 md:text-right flex flex-col md:items-end justify-center">
                                    <div className="hidden md:block mb-4">
                                        <span className="px-4 py-1 rounded bg-[#0f2223] border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest leading-none">MAY — JULY 2024</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2 leading-tight">Web Development<br />Intern</h3>
                                    <p className="text-primary text-xl font-medium tracking-tight">Swaraj Asia</p>
                                </div>

                                {/* Central Node */}
                                <div className="absolute left-0 md:left-1/2 top-10 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center size-10 md:size-12 rounded-full bg-[#0A0A0F] border border-primary/30 z-10 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,246,255,0.3)] transition-all duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5"></div>
                                    <span className="material-symbols-outlined text-primary text-xl relative z-10">code</span>
                                </div>

                                {/* Detail Card */}
                                <motion.div 
                                    whileHover={{ x: 10 }}
                                    className="md:w-[45%] ml-10 md:ml-0 p-8 rounded-xl bg-[#0f2223] border border-[#1a3638] hover:border-primary/40 transition-all duration-500 shadow-xl"
                                >
                                    <ul className="space-y-6">
                                        <li className="flex gap-4">
                                            <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">check_circle</span>
                                            <p className="text-slate-400 text-sm leading-relaxed">Designed and customised a <strong className="text-slate-100">WordPress website</strong> using Elementor, responsive themes, and plugins for a production client.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">check_circle</span>
                                            <p className="text-slate-400 text-sm leading-relaxed">Gained end-to-end experience in <strong className="text-slate-100">web project lifecycle</strong> — from design brief to live deployment.</p>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>

                        {/* Entry 2: B.Tech Education */}
                        <div className="relative mb-32 group">
                            <div className="md:flex flex-row-reverse items-center justify-between">
                                {/* Date Label Mobile */}
                                <div className="md:hidden flex items-center gap-2 mb-6 ml-10">
                                    <span className="px-4 py-1 rounded bg-[#0f2223] border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest leading-none">2022 — 2026</span>
                                </div>

                                {/* Text & Detail Cards */}
                                <div className="md:w-[45%] mb-8 md:mb-0 flex flex-col items-start justify-center">
                                    <div className="hidden md:block mb-4">
                                        <span className="px-4 py-1 rounded bg-[#0f2223] border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest leading-none">2022 — 2026</span>
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-slate-100 mb-2 leading-tight">B.Tech Chemical<br />Engineering</h3>
                                    <p className="text-primary text-xl font-medium tracking-tight">MIT Academy of Engineering, Pune</p>
                                </div>

                                {/* Central Node */}
                                <div className="absolute left-0 md:left-1/2 top-10 md:top-1/2 md:-translate-y-1/2 md:-translate-x-1/2 flex items-center justify-center size-10 md:size-12 rounded-full bg-[#0A0A0F] border border-primary/30 z-10 group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(0,246,255,0.3)] transition-all duration-500 overflow-hidden">
                                    <div className="absolute inset-0 bg-primary/5"></div>
                                    <span className="material-symbols-outlined text-primary text-xl relative z-10">school</span>
                                </div>

                                {/* Detail Card */}
                                <motion.div 
                                    whileHover={{ x: -10 }}
                                    className="md:w-[45%] mr-0 md:mr-0 ml-10 md:ml-0 p-8 rounded-xl bg-[#0f2223] border border-[#1a3638] hover:border-primary/40 transition-all duration-500 shadow-xl"
                                >
                                    <ul className="space-y-6">
                                        <li className="flex gap-4">
                                            <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">check_circle</span>
                                            <p className="text-slate-400 text-sm leading-relaxed">Self-driven specialisation in <strong className="text-slate-100">AI, ML, and big data</strong> alongside chemical engineering core — built 3 end-to-end projects from scratch.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">check_circle</span>
                                            <p className="text-slate-400 text-sm leading-relaxed">Active in <strong className="text-slate-100">E-Cell</strong> as Core Content Member and led the <strong className="text-slate-100">Firodiya dance team</strong> as Head of Dance.</p>
                                        </li>
                                        <li className="flex gap-4">
                                            <span className="material-symbols-outlined text-primary text-xl shrink-0 mt-0.5">check_circle</span>
                                            <p className="text-slate-400 text-sm leading-relaxed">Earned <strong className="text-slate-100">5 industry certifications</strong> in Python, Cybersecurity, Data Analytics, and Entrepreneurship. CGPA: 7.78.</p>
                                        </li>
                                    </ul>
                                </motion.div>
                            </div>
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="mt-40 pt-20 border-t border-[#1a3638]">
                        <div className="flex items-center gap-4 mb-16">
                            <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-2xl font-bold">school</span>
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter uppercase">Education</h2>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* B.Tech */}
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="group bg-[#0f2223]/30 border border-[#1a3638] p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl -mr-12 -mt-12"></div>
                                <div className="flex justify-between items-start mb-10">
                                    <span className="text-primary font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em]">2022 — 2026</span>
                                    <div className="size-12 rounded-xl bg-[#162e2f] border border-[#204a4b] flex items-center justify-center group-hover:border-primary/40 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-2xl">light_mode</span>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold mb-2 leading-tight">B.Tech Chemical<br />Engineering</h4>
                                <p className="text-slate-400 text-sm mb-4">MIT Academy of Engineering, Pune</p>
                                <p className="text-primary font-bold text-lg mb-8">CGPA: 7.78</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {["Machine Learning", "Big Data", "Deep Learning", "Aspen HYSYS"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-[#162e2f] rounded text-[10px] font-bold text-slate-300 border border-[#1a3638] group-hover:border-primary/20 transition-colors">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* HSC */}
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="group bg-[#0f2223]/30 border border-[#1a3638] p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl -mr-12 -mt-12"></div>
                                <div className="flex justify-between items-start mb-10">
                                    <span className="text-primary font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em]">2020 — 2022</span>
                                    <div className="size-12 rounded-xl bg-[#162e2f] border border-[#204a4b] flex items-center justify-center group-hover:border-primary/40 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-2xl">assignment_turned_in</span>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold mb-2 leading-tight">HSC — Science</h4>
                                <p className="text-slate-400 text-sm mb-4">Shivaji Science College, Nagpur</p>
                                <p className="text-primary font-bold text-lg mb-8">80.83%</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {["Physics", "Chemistry", "Mathematics"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-[#162e2f] rounded text-[10px] font-bold text-slate-300 border border-[#1a3638] group-hover:border-primary/20 transition-colors">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>

                            {/* SSC */}
                            <motion.div 
                                whileHover={{ y: -5 }}
                                className="group bg-[#0f2223]/30 border border-[#1a3638] p-8 rounded-2xl hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl -mr-12 -mt-12"></div>
                                <div className="flex justify-between items-start mb-10">
                                    <span className="text-primary font-[family-name:var(--font-mono)] text-xs font-bold tracking-[0.2em]">2020</span>
                                    <div className="size-12 rounded-xl bg-[#162e2f] border border-[#204a4b] flex items-center justify-center group-hover:border-primary/40 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-2xl">edit</span>
                                    </div>
                                </div>
                                <h4 className="text-2xl font-bold mb-2 leading-tight">SSC</h4>
                                <p className="text-slate-400 text-sm mb-4">Providence Girls&apos; High School, Nagpur</p>
                                <p className="text-primary font-bold text-lg mb-8">94.20%</p>
                                
                                <div className="flex flex-wrap gap-2">
                                    {["Academic Excellence", "Science & Maths"].map(tag => (
                                        <span key={tag} className="px-3 py-1 bg-[#162e2f] rounded text-[10px] font-bold text-slate-300 border border-[#1a3638] group-hover:border-primary/20 transition-colors">{tag}</span>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Footer */}
                    <footer className="mt-32 pb-12 text-center">
                        <div className="flex justify-center gap-6 mb-8">
                            <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">data_object</span></a>
                            <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                            <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">cloud_sync</span></a>
                        </div>
                        <p className="text-slate-600 text-sm">© 2024 AI Portfolio. Built with Neural Precision.</p>
                    </footer>
                </main>
            </div>
        </div>
    );
}
