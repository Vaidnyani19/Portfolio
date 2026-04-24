"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const skillsDistribution = [
    { name: "ML / DL", level: "90%", h: "90%" },
    { name: "BIG DATA", level: "80%", h: "80%" },
    { name: "PYTHON", level: "85%", h: "85%" },
    { name: "DEPLOY", level: "70%", h: "70%" },
    { name: "GENAI", level: "75%", h: "75%" },
    { name: "CHEME", level: "65%", h: "65%" },
];

const skillCategories = [
    {
        title: "ML / AI",
        skills: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "CNN · LSTM · GAN"],
    },
    {
        title: "DATA & VIZ",
        skills: ["NumPy · Pandas", "Matplotlib · Seaborn", "Power BI · Tableau", "SQL", "Apache Spark · Hadoop"],
    },
    {
        title: "DEPLOYMENT",
        skills: ["Flask · REST APIs", "Render", "Git · GitHub", "Jupyter · Colab", "Report Automation"],
    },
    {
        title: "DOMAIN",
        skills: ["Aspen HYSYS", "Process Simulation", "Mass Transfer", "Thermodynamics", "MATLAB (basic)"],
    },
];

export default function SkillsPage() {
    return (
        <div className="bg-[#f5f8f8] dark:bg-[#0A0A0F] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 selection:text-primary min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <main className="max-w-7xl mx-auto w-full px-6 md:px-20 py-12 lg:py-24">
                    {/* Header */}
                    <div className="flex flex-col gap-4 mb-20">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4"
                        >
                            <span className="px-4 py-1.5 bg-[#0f2223] border border-primary/20 text-primary text-[10px] font-bold rounded-full tracking-[0.2em] uppercase">SECTION 05</span>
                            <div className="h-[1px] w-20 bg-primary/20"></div>
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-7xl md:text-9xl font-bold tracking-tighter leading-none"
                        >
                            TECH <span className="text-secondary dark:text-primary uppercase">STACK</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-400 text-xl max-w-3xl mt-6 font-light leading-relaxed"
                        >
                            A comprehensive overview of technical expertise and proficiency across the full data science and AI development lifecycle.
                        </motion.p>
                    </div>

                    {/* Proficiency & Distribution */}
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-24">
                        {/* Core Proficiency Card */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="lg:col-span-2 bg-[#0f2223] border border-[#1a3638] p-10 rounded-2xl relative overflow-hidden group hover:border-primary/30 transition-all duration-500"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-all"></div>
                            <h3 className="text-slate-100 text-2xl font-bold mb-10 flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">grid_view</span> Core Proficiency
                            </h3>
                            
                            <div className="space-y-12 relative z-10">
                                <div>
                                    <div className="flex justify-between items-end mb-4">
                                        <div>
                                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Mastery Level</p>
                                            <p className="text-primary text-xl font-bold">Intermediate — Advanced</p>
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            animate={{ width: "80%" }}
                                            transition={{ duration: 1.5, ease: "circOut" }}
                                            className="h-full bg-gradient-to-r from-primary/50 to-primary shadow-[0_0_10px_rgba(0,246,255,0.5)]"
                                        ></motion.div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-6">
                                    <div className="bg-[#162e2f] border border-[#204a4b] p-6 rounded-xl hover:border-primary/20 transition-all group/stat">
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2 group-hover/stat:text-primary transition-colors">Projects</p>
                                        <p className="text-4xl font-bold text-slate-100 tracking-tighter group-hover/stat:scale-105 transition-transform inline-block">3+</p>
                                    </div>
                                    <div className="bg-[#162e2f] border border-[#204a4b] p-6 rounded-xl hover:border-primary/20 transition-all group/stat">
                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2 group-hover/stat:text-primary transition-colors">Certifications</p>
                                        <p className="text-4xl font-bold text-slate-100 tracking-tighter group-hover/stat:scale-105 transition-transform inline-block">5+</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Skill Distribution Chart */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-3 bg-[#0f2223] border border-[#1a3638] p-10 rounded-2xl relative overflow-hidden"
                        >
                            <h3 className="text-slate-100 text-2xl font-bold mb-10 flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary p-2 bg-primary/10 rounded-lg">show_chart</span> Skill Distribution
                            </h3>
                            <div className="grid grid-cols-6 items-end gap-2 md:gap-4 h-64 px-2 mt-8 relative">
                                {/* Grid Lines */}
                                <div className="absolute inset-x-0 bottom-0 top-0 border-b border-slate-800 pointer-events-none"></div>
                                <div className="absolute inset-x-0 bottom-[33%] top-0 border-b border-slate-800/30 pointer-events-none"></div>
                                <div className="absolute inset-x-0 bottom-[66%] top-0 border-b border-slate-800/30 pointer-events-none"></div>
                                
                                {skillsDistribution.map((bar, idx) => (
                                    <div key={bar.name} className="flex flex-col items-center gap-4 h-full justify-end group">
                                        <div className="relative w-full h-full flex items-end justify-center">
                                            <motion.div 
                                                initial={{ height: 0 }}
                                                animate={{ height: bar.h }}
                                                transition={{ duration: 1.5, delay: 0.5 + (idx * 0.1), ease: "circOut" }}
                                                className="w-full bg-primary/20 border-t-2 border-primary relative group-hover:bg-primary/30 transition-all duration-300"
                                            >
                                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </motion.div>
                                            <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] font-bold text-primary bg-[#0f2223] px-2 py-1 rounded border border-primary/20">{bar.level}</div>
                                        </div>
                                        <span className="text-[9px] md:text-[10px] text-slate-400 font-bold uppercase tracking-widest text-center truncate w-full">{bar.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Skill Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillCategories.map((cat, idx) => (
                            <motion.div 
                                key={cat.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (idx * 0.1) }}
                                className="p-8 rounded-2xl bg-[#0f2223] border border-[#1a3638] flex flex-col gap-6 hover:border-primary/40 transition-all duration-500 group"
                            >
                                <h4 className="text-primary text-sm font-bold tracking-[0.2em] uppercase">{cat.title}</h4>
                                <ul className="flex flex-col gap-4">
                                    {cat.skills.map(skill => (
                                        <li key={skill} className="flex items-center gap-3 group/item">
                                            <div className="size-1.5 rounded-full bg-primary group-hover/item:scale-125 transition-transform shadow-[0_0_8px_rgba(0,246,255,0.5)]"></div>
                                            <span className="text-slate-300 text-sm font-light group-hover/item:text-slate-100 transition-colors tracking-tight">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* R&D Focus Footer */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="mt-32 p-12 rounded-2xl bg-[#0f2223] border-l-[6px] border-primary relative overflow-hidden group shadow-2xl"
                    >
                        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-[120px] rounded-full -mr-32 -mt-32"></div>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 justify-between relative z-10">
                            <div className="flex-1">
                                <h2 className="text-slate-100 text-3xl font-bold mb-4 tracking-tight">Research & Development Focus</h2>
                                <p className="text-slate-400 text-lg leading-relaxed max-w-3xl font-light">
                                    Currently focusing on <span className="text-primary font-medium">Multi-Modal RAG pipelines</span> and <span className="text-[#ccff00] font-medium">Low-Rank Adaptation (LoRA)</span> for efficient LLM fine-tuning in production environments.
                                </p>
                            </div>
                            <div className="w-full lg:w-auto">
                                <button className="w-full lg:w-auto bg-transparent border-2 border-emerald-500/50 hover:border-emerald-500 text-emerald-400 font-bold px-10 py-5 rounded-xl transition-all hover:shadow-[0_0_25px_rgba(16,185,129,0.2)] active:scale-95 uppercase tracking-widest text-xs">
                                    Download Technical CV
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </main>

                {/* Footer Placeholder for consisteny */}
                <footer className="mt-auto border-t border-[#1a3638] pt-12 pb-8 px-6 md:px-20 text-center md:text-left">
                    <p className="text-slate-500 text-xs tracking-widest uppercase">© 2024 AI/DS PORTFOLIO // BUILT WITH NEURAL PRECISION</p>
                </footer>
            </div>
        </div>
    );
}
