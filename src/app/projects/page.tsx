"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
    { 
        title: "Cyberthreat Detection via Chrome Extension", 
        icon: "shield", 
        category: ["ML", "NLP"],
        desc: "Real-time phishing and malware URL detection using Logistic Regression + TF-IDF, deployed as a Flask REST API powering a browser extension.", 
        tags: ["PYTHON", "FLASK", "SCIKIT-LEARN", "REST API", "JS"], 
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
        isFlagship: true
    },
    { 
        title: "AI Music Generation using Transformer GAN", 
        icon: "music_note", 
        category: ["GenAI"],
        desc: "GPT-2 as generator + CNN discriminator for sequential MIDI music generation. Custom adversarial training loop with optimised GAN convergence using PyTorch.", 
        tags: ["PYTORCH", "GPT-2", "GAN", "TRANSFORMERS"], 
        img: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
        isFlagship: true
    },
    { 
        title: "Process Optimisation using Apache Spark & Hadoop", 
        icon: "insights", 
        category: ["Big Data", "ChemE + AI"],
        desc: "HDFS + Spark pipelines analysing large-scale reactor datasets. Spark ML models identifying optimal temperature, pressure, and feed ratios to improve yield.", 
        tags: ["APACHE SPARK", "HADOOP", "SPARK SQL", "PYTHON"], 
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        isFlagship: true
    },
    { 
        title: "LLM RAG Pipeline", 
        icon: "auto_awesome", 
        category: ["GenAI"],
        desc: "End-to-end retrieval augmented generation system using Pinecone for high-performance vector search and semantic document retrieval.", 
        tags: ["PyTorch", "LangChain", "OpenAI"], 
        img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
    },
    { 
        title: "Object Detection System", 
        icon: "visibility", 
        category: ["ML"],
        desc: "Real-time YOLOv8 implementation optimized for industrial safety monitoring and automated hazard identification.", 
        tags: ["Python", "OpenCV", "CUDA"], 
        img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800"
    },
    { 
        title: "Sentiment Analysis API", 
        icon: "forum", 
        category: ["NLP"],
        desc: "BERT-based multi-language classifier deployed as a scalable microservice capable of processing 10k requests per minute.", 
        tags: ["Transformers", "FastAPI", "Docker"], 
        img: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?auto=format&fit=crop&q=80&w=800"
    },
    { 
        title: "Fraud Detection Model", 
        icon: "lock", 
        category: ["ML"],
        desc: "High-precision XGBoost model featuring automated feature engineering on AWS SageMaker for credit card transaction monitoring.", 
        tags: ["Scikit-learn", "AWS", "SQL"], 
        img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800"
    },
];

const filters = ["All", "ML", "NLP", "GenAI", "Big Data", "ChemE + AI"];

export default function ProjectsPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredProjects = activeFilter === "All" 
        ? projects 
        : projects.filter(p => p.category.includes(activeFilter));

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <div className="bg-[#f5f8f8] dark:bg-[#0A0A0F] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 selection:text-primary min-h-screen">
            <div className="relative flex flex-col w-full overflow-x-hidden">
                <main className="max-w-7xl mx-auto px-6 md:px-20 py-12 lg:py-24 w-full">
                    <div className="flex flex-col gap-2 mb-12">
                        <p className="text-primary font-[family-name:var(--font-mono)] text-sm tracking-[0.3em] uppercase opacity-80">Section 03 / PROJECTS</p>
                        <h1 className="text-5xl md:text-6xl font-bold tracking-tighter">PROJECTS</h1>
                        <div className="h-1.5 w-24 bg-primary rounded-full mt-2 shadow-[0_0_15px_rgba(0,246,255,0.5)]"></div>
                    </div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-3 mb-16 overflow-x-auto pb-4 scrollbar-hide">
                        {filters.map((f) => (
                            <button 
                                key={f} 
                                onClick={() => setActiveFilter(f)}
                                className={`flex h-11 shrink-0 items-center justify-center rounded-lg px-8 text-sm transition-all duration-300 font-bold tracking-wider uppercase ${activeFilter === f ? "bg-primary text-[#0A0A0F] shadow-[0_0_20px_rgba(0,246,255,0.3)]" : "bg-[#0f2223] border border-[#1a3638] text-slate-400 hover:border-primary hover:text-primary"}`}
                            >
                                {f}
                            </button>
                        ))}
                    </div>

                    {/* Card Grid */}
                    <motion.div 
                        variants={container}
                        initial="hidden"
                        animate="show"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <motion.div 
                                    layout
                                    variants={item}
                                    initial="hidden"
                                    animate="show"
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    key={project.title} 
                                    className={`group flex flex-col bg-[#0f2223] border border-[#1a3638] rounded-xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(0,246,255,0.1)] ${project.isFlagship ? 'ring-1 ring-primary/20' : ''}`}
                                >
                                    <div className="w-full aspect-video relative overflow-hidden bg-slate-900/50">
                                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-100" style={{ backgroundImage: `url("${project.img}")` }}></div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent"></div>
                                        
                                        {/* Abstract Overlay Pattern */}
                                        <div className="absolute inset-0 pointer-events-none opacity-20">
                                            <div className="absolute inset-0 dot-matrix" style={{ backgroundSize: '15px 15px' }}></div>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-1 relative">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="space-y-1">
                                                <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors leading-tight">{project.title}</h3>
                                            </div>
                                            <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg text-2xl group-hover:bg-primary group-hover:text-[#0A0A0F] transition-all duration-300 shadow-[0_0_15px_rgba(0,246,255,0.1)]">{project.icon}</span>
                                        </div>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1 font-light italic">
                                            &quot;{project.desc}&quot;
                                        </p>

                                        <div className="flex flex-wrap gap-2 mb-10">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="px-2.5 py-1 rounded bg-[#162e2f] text-[10px] font-bold uppercase tracking-[0.1em] text-primary/80 border border-[#204a4b] group-hover:border-primary/30 transition-colors">{tag}</span>
                                            ))}
                                        </div>

                                        <div className="flex gap-4 pt-6 border-t border-[#1a3638]">
                                            <a className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-[#1a3638] hover:border-primary hover:text-primary text-slate-300 text-[10px] font-bold py-3 rounded uppercase tracking-widest transition-all" href="#">
                                                <span className="material-symbols-outlined text-sm">code_blocks</span> GitHub
                                            </a>
                                            <a className="flex-1 flex items-center justify-center gap-2 bg-[#1a3638] hover:bg-primary hover:text-[#0A0A0F] text-slate-100 text-[10px] font-bold py-3 rounded uppercase tracking-widest transition-all" href="#">
                                                <span className="material-symbols-outlined text-sm">rocket_launch</span> Demo
                                            </a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>

                    {/* Footer CTA */}
                    <div className="mt-32 p-12 bg-gradient-to-br from-[#0f2223] to-transparent border border-[#1a3638] rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
                        <div className="relative z-10 text-center md:text-left">
                            <h4 className="text-3xl font-bold text-slate-100 mb-3 tracking-tight">Have a challenge for me?</h4>
                            <p className="text-slate-400 max-w-md">I am always looking for opportunities to apply intelligence to complex industrial and algorithmic problems.</p>
                        </div>
                        <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                            <Link href="/contact" className="bg-primary text-[#0A0A0F] px-10 py-4 rounded font-bold transition-all text-center hover:shadow-[0_0_25px_rgba(0,246,255,0.4)] hover:scale-105 active:scale-95 uppercase tracking-wider text-sm">
                                Start a Conversation
                            </Link>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
