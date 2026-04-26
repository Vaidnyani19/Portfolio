"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function AboutPage() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: { transition: { staggerChildren: 0.1 } }
    };

    const slideInLeft = {
        initial: { opacity: 0, x: -30 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8, ease: "easeOut" }
    };

    return (
        <div className="bg-transparent font-[family-name:var(--font-display)] text-slate-100 antialiased selection:bg-primary/30 selection:text-primary relative">
            
            
            <div className="relative flex w-full flex-col overflow-x-hidden">
                <main className="w-full max-w-7xl mx-auto px-6 md:px-20 py-12 lg:py-24 z-10">
                    <motion.div 
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-16"
                    >
                        {/* Left Sidebar */}
                        <motion.aside variants={slideInLeft} className="lg:col-span-4 space-y-12">
                            <div className="relative group">
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                    className="absolute -inset-1 bg-gradient-to-r from-primary to-transparent opacity-20 rounded-xl blur"
                                ></motion.div>
                                <div className="relative aspect-square overflow-hidden rounded-xl border border-[#1a3638] bg-[#0f2223] group cursor-pointer">
                                    <motion.img 
                                        initial={{ scale: 1.1, filter: "grayscale(100%) brightness(0.7)" }}
                                        animate={{ scale: 1, filter: "grayscale(100%) brightness(1)" }}
                                        whileHover={{ 
                                            scale: 1.05, 
                                            filter: "grayscale(0%) brightness(1.1)",
                                            transition: { duration: 0.4, ease: "easeOut" }
                                        }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="w-full h-full object-cover contrast-125" 
                                        alt="Professional headshot" 
                                        src="/profile.png" 
                                    />
                                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <motion.div variants={fadeIn}>
                                    <h1 className="text-3xl font-bold mb-2">DS / AI Engineer</h1>
                                    <p className="text-slate-400 font-medium">B.Tech Chemical Engineering</p>
                                    <p className="text-slate-500 text-sm">MIT Academy of Engineering, Pune</p>
                                </motion.div>
                                <motion.div variants={fadeIn} className="flex flex-wrap gap-2">
                                    {["Machine Learning", "Deep Learning", "Big Data", "Flask + APIs", "ChemE + AI"].map((tag) => (
                                        <motion.span 
                                            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 246, 255, 0.1)" }}
                                            key={tag}
                                            className="px-3 py-1 bg-[#0f2223] border border-[#1a3638] rounded-full text-xs font-medium text-primary cursor-default"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </motion.div>
                                <motion.div variants={fadeIn} className="pt-6 border-t border-[#1a3638] flex gap-4">
                                    {[
                                        { icon: "alternate_email", href: "mailto:vaidnyanithakare19@gmail.com" },
                                        { icon: "code", href: "https://github.com/vaidnyani19" },
                                        { icon: "account_tree", href: "https://www.linkedin.com/in/vaidnyani-thakare-943a99359" }
                                    ].map((social, i) => (
                                        <motion.a 
                                            key={i}
                                            whileHover={{ y: -3, color: "var(--color-primary)" }}
                                            className="text-slate-400 transition-colors" 
                                            href={social.href}
                                        >
                                            <span className="material-symbols-outlined">{social.icon}</span>
                                        </motion.a>
                                    ))}
                                </motion.div>
                            </div>
                        </motion.aside>

                        {/* Right Content */}
                        <div className="lg:col-span-8 space-y-24">
                            {/* Section 02 / ABOUT */}
                            <motion.section 
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                                className="space-y-6" 
                                id="about"
                            >
                                <motion.div variants={fadeIn} className="flex items-center gap-4">
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Section 02 / ABOUT</span>
                                    <div className="h-px flex-1 bg-[#1a3638]"></div>
                                </motion.div>
                                <motion.h2 variants={fadeIn} className="text-4xl lg:text-5xl font-bold leading-tight">
                                    Where chemical intuition meets <span className="text-primary italic">machine intelligence.</span>
                                </motion.h2>
                                <motion.div variants={fadeIn} className="prose prose-invert max-w-none text-slate-400 space-y-6 leading-relaxed text-lg font-light">
                                    <p>I’m a Chemical Engineering graduate with a strong foundation in <strong className="text-slate-100">data science, machine learning, and AI systems</strong>. My work sits at the intersection of engineering rigour and intelligent computing — building systems that are not just accurate, but purposeful.</p>
                                    <p>I’ve designed and built end-to-end pipelines across domains: a <strong className="text-slate-100">real-time cyberthreat detector</strong> using NLP and Flask, a <strong className="text-slate-100">Transformer-GAN music generator</strong>, and a <strong className="text-slate-100">Spark ML pipeline</strong> for industrial process optimisation. Each project reflects a core belief — that good engineering and good data science are inseparable.</p>
                                    <p>I’m driven by curiosity, shaped by a rare <strong className="text-slate-100">dual background in Chemical Engineering and AI</strong>, and committed to building things that work in the real world.</p>
                                </motion.div>
                            </motion.section>

                            {/* Metrics Grid */}
                            <motion.div 
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                                className="grid grid-cols-1 md:grid-cols-2 gap-4"
                            >
                                {[
                                    { num: "3+", label: "End-to-end ML projects shipped" },
                                    { num: "5+", label: "Industry certifications earned" },
                                    { num: "2", label: "Domains: ChemE + AI/DS" },
                                    { num: "3", label: "Programming languages & stacks" }
                                ].map((stat, i) => (
                                    <motion.div 
                                        variants={fadeIn}
                                        whileHover={{ y: -5, borderColor: "rgba(0, 246, 255, 0.8)" }}
                                        key={i}
                                        className="p-8 rounded-xl bg-[#0f2223]/50 backdrop-blur-sm border-l-2 border-primary/20 space-y-2 transition-colors border-[#1a3638]"
                                    >
                                        <div className="text-4xl font-bold text-primary tracking-tighter">{stat.num}</div>
                                        <p className="text-xs text-slate-400 uppercase tracking-widest leading-relaxed">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </motion.div>

                            {/* Section 03 / JOURNEY */}
                            <section className="space-y-12" id="timeline">
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    className="flex items-center gap-4"
                                >
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Section 03 / JOURNEY</span>
                                    <div className="h-px flex-1 bg-[#1a3638]"></div>
                                </motion.div>
                                <div className="relative space-y-12">
                                    <motion.div 
                                        initial={{ height: 0 }}
                                        whileInView={{ height: "100%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary to-transparent"
                                    ></motion.div>
                                    {[
                                        { 
                                            period: "2022 — 2026", 
                                            title: "B.Tech in Chemical Engineering @ MIT Academy of Engineering, Pune", 
                                            desc: <>Pursued an engineering degree with a self-driven specialisation in <strong className="text-slate-100">data science and AI</strong>. Built ML pipelines, deep learning models, and big data systems alongside core chemical engineering coursework. CGPA: 7.78.</>, 
                                            active: true 
                                        },
                                        { 
                                            period: "MAY — JULY 2024", 
                                            title: "Web Development Intern @ Swaraj Asia", 
                                            desc: "Designed and deployed a customised WordPress website using Elementor, plugins, and responsive themes. Gained hands-on experience in the full web project lifecycle.", 
                                            active: false 
                                        },
                                        { 
                                            period: "2024", 
                                            title: "Cyberthreat Detection via Chrome Extension", 
                                            desc: <>Built a <strong className="text-slate-100">real-time phishing and malware URL detector</strong> using Logistic Regression and TF-IDF, deployed as a Flask REST API consumed by a browser extension. End-to-end: data pipeline → model → production.</>, 
                                            active: false 
                                        },
                                        { 
                                            period: "2024", 
                                            title: "AI Music Generation using Transformer GAN", 
                                            desc: <>Designed a <strong className="text-slate-100">GPT-2 + CNN adversarial architecture</strong> for sequential MIDI music generation. Implemented custom adversarial training loops and optimised GAN convergence from scratch using PyTorch.</>, 
                                            active: false 
                                        },
                                        { 
                                            period: "2025", 
                                            title: "Process Optimisation using Apache Spark & Hadoop", 
                                            desc: <>Built HDFS + Spark pipelines to analyse large-scale reactor datasets. Trained <strong className="text-slate-100">Spark ML models</strong> identifying optimal temperature, pressure, and feed conditions — improving yield and automating process insights.</>, 
                                            active: false 
                                        },
                                        { 
                                            period: "2020 — 2022", 
                                            title: "HSC @ Shivaji Science College, Nagpur", 
                                            desc: <>Completed higher secondary education with <strong className="text-slate-100">80.83%</strong>, building a strong foundation in Physics, Chemistry, and Mathematics.</>, 
                                            active: false 
                                        },
                                        { 
                                            period: "2020", 
                                            title: "SSC @ Providence Girls' High School, Nagpur", 
                                            desc: <>Completed secondary schooling with <strong className="text-slate-100">94.20%</strong> — an early marker of academic consistency and discipline.</>, 
                                            active: false 
                                        },
                                    ].map((item, i) => (
                                        <motion.div 
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: i * 0.1 }}
                                            key={i} 
                                            className="relative pl-10 group"
                                        >
                                            <div className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-[#081112] bg-primary z-10 transition-shadow duration-500 group-hover:shadow-[0_0_15px_rgba(0,246,255,1)] ${item.active ? "shadow-[0_0_15px_rgba(0,246,255,1)]" : "shadow-[0_0_10px_rgba(0,246,255,0.4)]"}`}></div>
                                            <div className="space-y-2">
                                                <span className={`text-[10px] font-bold px-2 py-0.5 border rounded uppercase tracking-widest ${item.active ? "text-primary border-primary/30 bg-primary/5" : "text-slate-500 border-[#1a3638]"}`}>{item.period}</span>
                                                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                                                <p className="text-slate-400 max-w-xl font-light">{item.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </section>

                            {/* Footer CTA */}
                            <motion.footer 
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="pt-12 border-t border-[#1a3638]"
                            >
                                <div className="relative overflow-hidden bg-[#0f2223] p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#1a3638] group">
                                    <motion.div 
                                        animate={{ 
                                            scale: [1, 1.2, 1],
                                            opacity: [0.05, 0.1, 0.05]
                                        }}
                                        transition={{ duration: 10, repeat: Infinity }}
                                        className="absolute top-0 right-0 w-64 h-64 bg-primary blur-[80px] rounded-full -mr-32 -mt-32"
                                    ></motion.div>
                                    <div className="relative z-10">
                                        <h4 className="text-3xl font-bold mb-3 tracking-tight">Have a project in mind?</h4>
                                        <p className="text-slate-400 text-lg font-light">Let&apos;s talk about building something intelligent together.</p>
                                    </div>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <Link href="/contact" className="relative z-10 bg-primary text-[#081112] px-10 py-5 rounded-xl text-sm font-bold transition-all shadow-xl shadow-primary/20 uppercase tracking-widest inline-block text-center hover:shadow-primary/40">
                                            Start a Conversation
                                        </Link>
                                    </motion.div>
                                </div>
                            </motion.footer>
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
