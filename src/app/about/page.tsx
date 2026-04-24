"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { useRef } from "react";

function TiltCard({ children }: { children: React.ReactNode }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative group cursor-pointer"
        >
            <div style={{ transform: "translateZ(50px)" }} className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
}

function SectionReveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.section>
    );
}

export default function AboutPage() {
    const containerRef = useRef(null);

    return (
        <div ref={containerRef} className="bg-[#f5f8f8] dark:bg-[#081112] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 selection:text-primary min-h-screen">
            <div className="relative flex w-full flex-col overflow-x-hidden">
                <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-20 py-12 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            <TiltCard>
                                <div className="absolute -inset-2 bg-gradient-to-br from-primary to-transparent opacity-10 group-hover:opacity-30 rounded-2xl blur-xl transition-opacity duration-500"></div>
                                <div className="relative aspect-square overflow-hidden rounded-2xl border border-[#1a3638] bg-[#0f2223] shadow-2xl">
                                    <motion.img 
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5 }}
                                        className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" 
                                        alt="Professional headshot" 
                                        src="/profile.png" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#081112]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                        <p className="text-primary text-xs font-mono font-bold tracking-widest uppercase">System Interface v2.0</p>
                                    </div>
                                </div>
                            </TiltCard>

                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-8"
                            >
                                <div>
                                    <h1 className="text-4xl font-bold mb-2 tracking-tight">DS / AI Engineer</h1>
                                    <p className="text-slate-400 font-medium flex items-center gap-2">
                                        <span className="size-1.5 rounded-full bg-primary animate-pulse"></span>
                                        B.Tech Chemical Engineering
                                    </p>
                                    <p className="text-slate-500 text-sm mt-1">MIT Academy of Engineering, Pune</p>
                                </div>

                                <div className="space-y-3">
                                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Specialization Matrix</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Machine Learning", "Deep Learning", "Big Data", "Flask + APIs", "ChemE + AI"].map((tag, i) => (
                                            <motion.span 
                                                key={tag}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + (i * 0.1) }}
                                                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,246,255,0.15)" }}
                                                className="px-3 py-1.5 bg-[#0f2223] border border-[#1a3638] rounded-lg text-[11px] font-bold text-primary cursor-default transition-colors"
                                            >
                                                {tag}
                                            </motion.span>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-[#1a3638]/50 flex gap-6">
                                    {[
                                        { icon: "alternate_email", label: "Email" },
                                        { icon: "code", label: "GitHub" },
                                        { icon: "account_tree", label: "Projects" }
                                    ].map((social) => (
                                        <motion.a 
                                            key={social.icon}
                                            whileHover={{ y: -3, color: "#00f6ff" }}
                                            className="text-slate-500 transition-colors" 
                                            href="#"
                                        >
                                            <span className="material-symbols-outlined text-2xl">{social.icon}</span>
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>
                        </aside>

                        {/* Right Content */}
                        <div className="lg:col-span-8 space-y-32">
                            {/* Section 02 / ABOUT */}
                            <SectionReveal>
                                <div className="space-y-8">
                                    <div className="flex items-center gap-4">
                                        <span className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase bg-primary/10 px-3 py-1 rounded">Section 02 / ABOUT</span>
                                        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                                    </div>
                                    <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                                        Where chemical intuition <br/>
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/40 italic">meets machine intelligence.</span>
                                    </h2>
                                    <div className="prose prose-invert max-w-none text-slate-400 space-y-6 leading-relaxed text-xl font-light">
                                        <p>I’m a Chemical Engineering graduate with a strong foundation in <strong className="text-slate-100 font-semibold">data science, machine learning, and AI systems</strong>. My work sits at the intersection of engineering rigour and intelligent computing — building systems that are not just accurate, but purposeful.</p>
                                        <p>I’ve designed and built end-to-end pipelines across domains: a <strong className="text-slate-100 font-semibold">real-time cyberthreat detector</strong> using NLP and Flask, a <strong className="text-slate-100 font-semibold">Transformer-GAN music generator</strong>, and a <strong className="text-slate-100 font-semibold">Spark ML pipeline</strong> for industrial process optimisation.</p>
                                    </div>
                                </div>
                            </SectionReveal>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { num: "3+", label: "ML Projects Shipped", color: "from-primary/20" },
                                    { num: "5+", label: "Industry Certifications", color: "from-blue-500/10" },
                                    { num: "2", label: "Core Domain Masteries", color: "from-purple-500/10" },
                                    { num: "7.78", label: "Engineering CGPA", color: "from-emerald-500/10" }
                                ].map((stat, i) => (
                                    <motion.div 
                                        key={i}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1 }}
                                        whileHover={{ y: -8, transition: { duration: 0.2 } }}
                                        className={`p-8 rounded-2xl bg-[#0f2223] border border-[#1a3638] relative overflow-hidden group`}
                                    >
                                        <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                                        <div className="relative z-10 space-y-2">
                                            <div className="text-4xl font-bold text-primary tracking-tighter group-hover:scale-110 origin-left transition-transform duration-300">{stat.num}</div>
                                            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.2em] leading-relaxed">{stat.label}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Section 03 / JOURNEY */}
                            <SectionReveal>
                                <div className="space-y-16">
                                    <div className="flex items-center gap-4">
                                        <span className="text-primary font-bold text-[10px] tracking-[0.3em] uppercase bg-primary/10 px-3 py-1 rounded">Section 03 / JOURNEY</span>
                                        <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent"></div>
                                    </div>
                                    
                                    <div className="relative space-y-4">
                                        <div className="absolute left-[20px] top-4 bottom-4 w-px bg-[#1a3638]"></div>
                                        
                                        {[
                                            { 
                                                period: "2022 — 2026", 
                                                title: "B.Tech in Chemical Engineering @ MIT AOE", 
                                                desc: "Pursued an engineering degree with a self-driven specialisation in data science and AI. Built ML pipelines and big data systems alongside core ChemE coursework.", 
                                                type: "Education",
                                                active: true 
                                            },
                                            { 
                                                period: "MAY — JULY 2024", 
                                                title: "Web Development Intern @ Swaraj Asia", 
                                                desc: "Designed and deployed a customised WordPress website using Elementor, gaining hands-on experience in the full project lifecycle.", 
                                                type: "Internship",
                                                active: false 
                                            },
                                            { 
                                                period: "2024 - 2025", 
                                                title: "AI Research & Development", 
                                                desc: "Built Cyberthreat Detectors, GAN-based Music Engines, and Spark-driven Process Optimizers. Deep dive into adversarial training and large-scale data architecture.", 
                                                type: "Research",
                                                active: false 
                                            },
                                        ].map((item, i) => (
                                            <motion.div 
                                                key={i}
                                                initial={{ opacity: 0, x: 20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: i * 0.15 }}
                                                className="relative pl-16 group pb-12"
                                            >
                                                <div className={`absolute left-[13px] top-1.5 size-4 rounded-full border-2 border-[#081112] z-20 transition-all duration-500 ${item.active ? "bg-primary shadow-[0_0_15px_rgba(0,246,255,0.6)]" : "bg-slate-800 group-hover:bg-primary/50"}`}></div>
                                                
                                                <div className="bg-[#0f2223]/40 border border-[#1a3638] p-8 rounded-2xl group-hover:bg-[#0f2223] group-hover:border-primary/30 transition-all duration-300 group-hover:translate-x-2">
                                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                                                        <div className="space-y-1">
                                                            <div className="flex items-center gap-3">
                                                                <span className="text-primary text-[10px] font-bold uppercase tracking-widest">{item.type}</span>
                                                                <span className="size-1 rounded-full bg-slate-700"></span>
                                                                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{item.period}</span>
                                                            </div>
                                                            <h3 className="text-2xl font-bold tracking-tight">{item.title}</h3>
                                                        </div>
                                                    </div>
                                                    <p className="text-slate-400 text-lg font-light leading-relaxed">{item.desc}</p>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </SectionReveal>

                            {/* Footer CTA */}
                            <SectionReveal>
                                <footer className="pt-24 pb-12">
                                    <div className="bg-gradient-to-br from-[#0f2223] to-[#081112] p-12 md:p-20 rounded-[2.5rem] flex flex-col items-center text-center gap-10 border border-[#1a3638] relative overflow-hidden group">
                                        <div className="absolute top-0 right-0 size-64 bg-primary/5 blur-[100px] rounded-full"></div>
                                        <div className="absolute bottom-0 left-0 size-64 bg-blue-500/5 blur-[100px] rounded-full"></div>
                                        
                                        <div className="space-y-4 relative z-10">
                                            <h4 className="text-4xl md:text-5xl font-bold tracking-tighter">Ready to start something big?</h4>
                                            <p className="text-slate-400 text-xl font-light">Let&apos;s talk about building something intelligent together.</p>
                                        </div>
                                        
                                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="relative z-10">
                                            <Link href="/contact" className="bg-primary text-[#081112] px-12 py-5 rounded-2xl text-lg font-bold transition-all shadow-[0_20px_50px_rgba(0,246,255,0.15)] hover:shadow-[0_20px_60px_rgba(0,246,255,0.3)] inline-block">
                                                Start a Conversation
                                            </Link>
                                        </motion.div>
                                    </div>
                                </footer>
                            </SectionReveal>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
