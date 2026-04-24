"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

function ProjectCard({ project }: { project: any }) {
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
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className={`group relative flex flex-col bg-[#0f2223] border border-[#1a3638] rounded-2xl overflow-hidden transition-all duration-500 hover:border-primary/50 hover:shadow-[0_20px_50px_rgba(0,246,255,0.05)] ${project.isFlagship ? 'ring-1 ring-primary/10' : ''}`}
        >
            <div style={{ transform: "translateZ(30px)" }} className="relative">
                <div className="w-full aspect-[16/10] relative overflow-hidden bg-[#050D0E]">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-80" style={{ backgroundImage: `url("${project.img}")` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f2223] via-transparent to-transparent"></div>
                    
                    {/* UI Tech Decors */}
                    <div className="absolute top-4 right-4 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-1 h-4 bg-primary/40 rounded-full animate-pulse"></div>
                        <div className="w-1 h-4 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                        <div className="w-1 h-4 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                    </div>

                    <div className="absolute bottom-4 left-6">
                        <span className="text-[9px] font-mono text-primary/60 uppercase tracking-[0.3em] font-bold">Project.v1.04.sys</span>
                    </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                    <div className="flex justify-between items-start mb-6">
                        <div className="space-y-1">
                            <div className="flex items-center gap-2 mb-2">
                                {project.category.map((cat: string) => (
                                    <span key={cat} className="text-[9px] font-bold uppercase tracking-widest text-primary/50 bg-primary/5 px-2 py-0.5 rounded-md border border-primary/10">{cat}</span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-slate-100 group-hover:text-primary transition-colors leading-tight tracking-tight">{project.title}</h3>
                        </div>
                        <div className="material-symbols-outlined text-primary p-2.5 bg-primary/5 rounded-xl text-2xl group-hover:bg-primary group-hover:text-[#050D0E] transition-all duration-500 border border-primary/10 shadow-lg">
                            {project.icon}
                        </div>
                    </div>

                    <p className="text-slate-400 text-base leading-relaxed mb-8 flex-1 font-light">
                        {project.desc}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-10">
                        {project.tags.map((tag: string) => (
                            <span key={tag} className="px-3 py-1.5 rounded-lg bg-[#050D0E] text-[10px] font-bold uppercase tracking-[0.15em] text-primary/70 border border-[#1a3638] group-hover:border-primary/20 transition-colors">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4 pt-6 border-t border-[#1a3638]/50">
                        <a className="flex-1 flex items-center justify-center gap-3 bg-transparent border border-[#1a3638] hover:border-primary/50 hover:text-primary text-slate-400 text-[11px] font-bold py-4 rounded-xl uppercase tracking-widest transition-all" href="#">
                            <span className="material-symbols-outlined text-sm">terminal</span> Source
                        </a>
                        <a className="flex-1 flex items-center justify-center gap-3 bg-primary/10 border border-primary/20 hover:bg-primary hover:text-[#050D0E] text-primary text-[11px] font-bold py-4 rounded-xl uppercase tracking-widest transition-all shadow-lg hover:shadow-primary/20" href="#">
                            <span className="material-symbols-outlined text-sm">rocket_launch</span> Launch
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

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

    return (
        <div className="bg-[#f5f8f8] dark:bg-[#050D0E] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 selection:text-primary min-h-screen">
            <div className="relative flex flex-col w-full overflow-x-hidden">
                <main className="max-w-7xl mx-auto px-6 md:px-20 py-12 lg:py-24 w-full">
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col gap-4 mb-20"
                    >
                        <p className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase opacity-60">System.Directory / PROJECTS</p>
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">PROJECTS.</h1>
                    </motion.div>

                    {/* Filter Bar */}
                    <div className="flex flex-wrap gap-4 mb-20 overflow-x-auto pb-4 scrollbar-hide">
                        {filters.map((f) => (
                            <motion.button 
                                key={f} 
                                onClick={() => setActiveFilter(f)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`flex h-12 shrink-0 items-center justify-center rounded-2xl px-10 text-[11px] transition-all duration-300 font-bold tracking-[0.2em] uppercase border ${activeFilter === f ? "bg-primary text-[#050D0E] border-primary shadow-[0_10px_30px_rgba(0,246,255,0.2)]" : "bg-[#0f2223] border-[#1a3638] text-slate-500 hover:border-primary/40 hover:text-primary"}`}
                            >
                                {f}
                            </motion.button>
                        ))}
                    </div>

                    {/* Card Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                        <AnimatePresence mode="popLayout">
                            {filteredProjects.map((project) => (
                                <ProjectCard key={project.title} project={project} />
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* Footer CTA */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-40 p-16 md:p-24 bg-gradient-to-br from-[#0f2223] to-[#050D0E] border border-[#1a3638] rounded-[3rem] flex flex-col items-center text-center gap-10 relative overflow-hidden group shadow-3xl"
                    >
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 blur-[150px] rounded-full -mr-80 -mt-80 opacity-50"></div>
                        <div className="relative z-10 space-y-6">
                            <h4 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-tight">Have a challenge <br/>for me?</h4>
                            <p className="text-slate-400 max-w-xl mx-auto text-lg font-light leading-relaxed">I am always looking for opportunities to apply intelligence to complex industrial and algorithmic problems.</p>
                        </div>
                        <div className="relative z-10">
                            <Link href="/contact" className="bg-primary text-[#050D0E] px-12 py-5 rounded-2xl font-bold transition-all text-center shadow-[0_20px_50px_rgba(0,246,255,0.2)] hover:shadow-[0_20px_60px_rgba(0,246,255,0.4)] hover:scale-105 active:scale-95 uppercase tracking-widest text-[12px] inline-block">
                                Start a Conversation
                            </Link>
                        </div>
                    </motion.div>
                </main>
            </div>
        </div>
    );
}
