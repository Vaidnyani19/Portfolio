"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="bg-[#f5f8f8] dark:bg-[#081112] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 selection:text-primary">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* Navigation */}


                <main className="flex-1 w-full max-w-7xl mx-auto px-6 md:px-20 py-12 lg:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Sidebar */}
                        <aside className="lg:col-span-4 space-y-12">
                            <div className="relative group">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-transparent opacity-20 group-hover:opacity-40 rounded-xl blur transition duration-1000"></div>
                                <div className="relative aspect-square overflow-hidden rounded-xl border border-[#1a3638] bg-[#0f2223]">
                                    <img className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500" alt="Professional headshot of a data science engineer" src="/profile.png" />
                                </div>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <h1 className="text-3xl font-bold mb-2">DS / AI Engineer</h1>
                                    <p className="text-slate-400 font-medium">B.Tech Chemical Engineering</p>
                                    <p className="text-slate-500 text-sm">MIT Academy of Engineering, Pune</p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {["Machine Learning", "Deep Learning", "Big Data", "Flask + APIs", "ChemE + AI"].map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-[#0f2223] border border-[#1a3638] rounded-full text-xs font-medium text-primary">{tag}</span>
                                    ))}
                                </div>
                                <div className="pt-6 border-t border-[#1a3638] flex gap-4">
                                    <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                                    <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">code</span></a>
                                    <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">account_tree</span></a>
                                </div>
                            </div>
                        </aside>

                        {/* Right Content */}
                        <div className="lg:col-span-8 space-y-24">
                            {/* Section 02 / ABOUT */}
                            <section className="space-y-6" id="about">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Section 02 / ABOUT</span>
                                    <div className="h-px flex-1 bg-[#1a3638]"></div>
                                </div>
                                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">Where chemical intuition meets machine intelligence.</h2>
                                <div className="prose prose-invert max-w-none text-slate-400 space-y-6 leading-relaxed text-lg">
                                    <p>I’m a Chemical Engineering graduate with a strong foundation in <strong className="text-slate-100">data science, machine learning, and AI systems</strong>. My work sits at the intersection of engineering rigour and intelligent computing — building systems that are not just accurate, but purposeful.</p>
                                    <p>I’ve designed and built end-to-end pipelines across domains: a <strong className="text-slate-100">real-time cyberthreat detector</strong> using NLP and Flask, a <strong className="text-slate-100">Transformer-GAN music generator</strong>, and a <strong className="text-slate-100">Spark ML pipeline</strong> for industrial process optimisation. Each project reflects a core belief — that good engineering and good data science are inseparable.</p>
                                    <p>I’m driven by curiosity, shaped by a rare <strong className="text-slate-100">dual background in Chemical Engineering and AI</strong>, and committed to building things that work in the real world.</p>
                                </div>
                            </section>

                            {/* Metrics Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    { num: "3+", label: "End-to-end ML projects shipped" },
                                    { num: "5+", label: "Industry certifications earned" },
                                    { num: "2", label: "Domains: ChemE + AI/DS" },
                                    { num: "3", label: "Programming languages & stacks" }
                                ].map((stat, i) => (
                                    <motion.div 
                                        key={i}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="p-6 rounded-lg bg-[#0f2223] border-l-2 border-primary/40 hover:border-primary transition-all space-y-2"
                                    >
                                        <div className="text-3xl font-bold text-primary tracking-tighter">{stat.num}</div>
                                        <p className="text-xs text-slate-400 uppercase tracking-widest leading-relaxed">{stat.label}</p>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Section 03 / JOURNEY */}
                            <section className="space-y-12" id="timeline">
                                <div className="flex items-center gap-4">
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase">Section 03 / JOURNEY</span>
                                    <div className="h-px flex-1 bg-[#1a3638]"></div>
                                </div>
                                <div className="relative space-y-12">
                                    <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary/50 to-transparent"></div>
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
                                        <div key={i} className="relative pl-10 group">
                                            <div className={`absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-[#081112] bg-primary z-10 ${item.active ? "shadow-[0_0_10px_rgba(0,246,255,0.8)]" : "shadow-[0_0_10px_rgba(0,246,255,0.4)] group-hover:shadow-[0_0_15px_rgba(0,246,255,0.8)] transition-all"}`}></div>
                                            <div className="space-y-2">
                                                <span className={`text-xs font-bold px-2 py-0.5 border rounded ${item.active ? "text-primary border-primary/30" : "text-slate-500 border-[#1a3638]"}`}>{item.period}</span>
                                                <h3 className="text-xl font-bold">{item.title}</h3>
                                                <p className="text-slate-400 max-w-xl">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* Footer CTA */}
                            <footer className="pt-12 border-t border-[#1a3638]">
                                <div className="bg-[#0f2223] p-10 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-[#1a3638]">
                                    <div>
                                        <h4 className="text-2xl font-bold mb-2">Have a project in mind?</h4>
                                        <p className="text-slate-400">Let&apos;s talk about building something intelligent together.</p>
                                    </div>
                                    <Link href="/contact" className="bg-primary hover:bg-primary/90 text-[#081112] px-8 py-4 rounded-lg text-base font-bold transition-all shadow-lg shadow-primary/10 inline-block text-center">
                                        Start a Conversation
                                    </Link>
                                </div>
                            </footer>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
