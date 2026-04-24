"use client";

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
        icon: "psychology",
        skills: ["Scikit-learn", "XGBoost", "TensorFlow", "PyTorch", "CNN · LSTM · GAN"],
    },
    {
        title: "DATA & VIZ",
        icon: "query_stats",
        skills: ["NumPy · Pandas", "Matplotlib · Seaborn", "Power BI · Tableau", "SQL", "Apache Spark · Hadoop"],
    },
    {
        title: "DEPLOYMENT",
        icon: "rocket_launch",
        skills: ["Flask · REST APIs", "Render", "Git · GitHub", "Jupyter · Colab", "Report Automation"],
    },
    {
        title: "DOMAIN",
        icon: "science",
        skills: ["Aspen HYSYS", "Process Simulation", "Mass Transfer", "Thermodynamics", "MATLAB (basic)"],
    },
];

export default function SkillsPage() {
    return (
        <div className="bg-[#f5f8f8] dark:bg-[#050D0E] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 selection:text-primary min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <main className="max-w-7xl mx-auto w-full px-6 md:px-20 py-20 lg:py-32">
                    {/* Header */}
                    <div className="flex flex-col gap-6 mb-32">
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-primary font-mono font-bold tracking-[0.4em] text-[10px] uppercase opacity-60">System.Capabilities / SKILLS</span>
                            <div className="h-px w-24 bg-primary/20"></div>
                        </motion.div>
                        <motion.h1 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                            className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white"
                        >
                            TECH<br/>
                            <span className="text-primary italic">STACK.</span>
                        </motion.h1>
                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-500 text-xl max-w-2xl mt-8 font-light leading-relaxed"
                        >
                            A comprehensive overview of technical expertise across the full data science and AI development lifecycle.
                        </motion.p>
                    </div>

                    {/* Proficiency & Distribution */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-32">
                        {/* Core Proficiency Card */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-5 bg-[#0f2223]/50 backdrop-blur-xl border border-[#1a3638] p-12 rounded-[3rem] relative overflow-hidden group hover:border-primary/30 transition-all duration-700 shadow-3xl"
                        >
                            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[100px] rounded-full -mr-20 -mt-20 group-hover:bg-primary/10 transition-all"></div>
                            <h3 className="text-white text-2xl font-bold mb-12 flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary p-3 bg-primary/5 rounded-2xl border border-primary/10">grid_view</span> Core Proficiency
                            </h3>
                            
                            <div className="space-y-12 relative z-10">
                                <div>
                                    <div className="flex justify-between items-end mb-6">
                                        <div>
                                            <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-2">Mastery level</p>
                                            <p className="text-primary text-2xl font-bold tracking-tight">Intermediate — Advanced</p>
                                        </div>
                                        <span className="text-primary/50 font-mono text-sm tracking-tighter">80% COMPLETE</span>
                                    </div>
                                    <div className="h-3 w-full bg-[#050D0E] rounded-full overflow-hidden border border-white/5">
                                        <motion.div 
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "80%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 2, ease: "circOut" }}
                                            className="h-full bg-gradient-to-r from-primary/20 via-primary to-primary shadow-[0_0_20px_rgba(0,246,255,0.4)]"
                                        ></motion.div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-8">
                                    <div className="bg-[#050D0E] border border-white/5 p-8 rounded-3xl hover:border-primary/20 transition-all group/stat shadow-xl">
                                        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-3 group-hover/stat:text-primary transition-colors">Projects</p>
                                        <p className="text-5xl font-bold text-white tracking-tighter group-hover/stat:scale-105 transition-transform inline-block">3+</p>
                                    </div>
                                    <div className="bg-[#050D0E] border border-white/5 p-8 rounded-3xl hover:border-primary/20 transition-all group/stat shadow-xl">
                                        <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-3 group-hover/stat:text-primary transition-colors">Certs</p>
                                        <p className="text-5xl font-bold text-white tracking-tighter group-hover/stat:scale-105 transition-transform inline-block">5+</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Skill Distribution Chart */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="lg:col-span-7 bg-[#0f2223]/50 backdrop-blur-xl border border-[#1a3638] p-12 rounded-[3rem] relative overflow-hidden shadow-3xl"
                        >
                            <h3 className="text-white text-2xl font-bold mb-12 flex items-center gap-4">
                                <span className="material-symbols-outlined text-primary p-3 bg-primary/5 rounded-2xl border border-primary/10">show_chart</span> Technical Breakdown
                            </h3>
                            <div className="grid grid-cols-6 items-end gap-3 md:gap-6 h-72 px-4 mt-12 relative">
                                {skillsDistribution.map((bar, idx) => (
                                    <div key={bar.name} className="flex flex-col items-center gap-6 h-full justify-end group">
                                        <div className="relative w-full h-full flex items-end justify-center">
                                            <motion.div 
                                                initial={{ height: 0 }}
                                                whileInView={{ height: bar.h }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1.5, delay: idx * 0.1, ease: "circOut" }}
                                                className="w-full bg-primary/10 border-t-4 border-primary relative group-hover:bg-primary/20 transition-all duration-300 rounded-t-lg"
                                            >
                                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                            </motion.div>
                                            <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-all duration-300 text-[11px] font-bold text-primary bg-[#050D0E] px-3 py-1.5 rounded-xl border border-primary/20 shadow-2xl">{bar.level}</div>
                                        </div>
                                        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em] text-center truncate w-full">{bar.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* Skill Categories Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {skillCategories.map((cat, idx) => (
                            <motion.div 
                                key={cat.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="p-10 rounded-[2.5rem] bg-[#0f2223]/30 backdrop-blur-xl border border-[#1a3638] flex flex-col gap-8 hover:border-primary/40 transition-all duration-700 group shadow-2xl hover:shadow-primary/5"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="size-12 rounded-2xl bg-[#050D0E] border border-white/5 flex items-center justify-center group-hover:border-primary/30 transition-all">
                                        <span className="material-symbols-outlined text-primary text-xl">{cat.icon}</span>
                                    </div>
                                    <h4 className="text-white text-lg font-bold tracking-tight uppercase">{cat.title}</h4>
                                </div>
                                <ul className="flex flex-col gap-5">
                                    {cat.skills.map(skill => (
                                        <li key={skill} className="flex items-center gap-4 group/item">
                                            <div className="size-1.5 rounded-full bg-primary/40 group-hover/item:bg-primary group-hover/item:scale-150 transition-all shadow-[0_0_10px_rgba(0,246,255,0.5)]"></div>
                                            <span className="text-slate-400 text-sm font-light group-hover/item:text-white transition-colors tracking-tight">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    {/* R&D Focus Footer */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mt-40 p-16 md:p-20 rounded-[3rem] bg-[#0f2223]/80 backdrop-blur-2xl border border-white/5 relative overflow-hidden group shadow-3xl"
                    >
                        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 blur-[150px] rounded-full -mr-80 -mt-80 opacity-50"></div>
                        <div className="flex flex-col lg:flex-row items-center gap-12 justify-between relative z-10">
                            <div className="flex-1 text-center lg:text-left">
                                <h2 className="text-white text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Current R&D Focus.</h2>
                                <p className="text-slate-400 text-xl leading-relaxed max-w-3xl font-light">
                                    Deep-diving into <span className="text-primary font-medium underline decoration-primary/20 underline-offset-8">Multi-Modal RAG pipelines</span> and efficient LLM fine-tuning in production environments.
                                </p>
                            </div>
                            <div className="w-full lg:w-auto">
                                <button className="w-full lg:w-auto bg-primary text-[#050D0E] font-bold px-12 py-5 rounded-2xl transition-all shadow-[0_20px_50px_rgba(0,246,255,0.2)] hover:shadow-[0_20px_60px_rgba(0,246,255,0.4)] hover:scale-105 active:scale-95 uppercase tracking-widest text-[12px]">
                                    Download Technical CV
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </main>

                <footer className="mt-auto border-t border-white/5 py-12 px-6 md:px-20">
                    <p className="text-slate-600 text-[10px] tracking-[0.4em] uppercase text-center font-mono">© 2024 AI/DS PORTFOLIO // BUILT WITH NEURAL PRECISION</p>
                </footer>
            </div>
        </div>
    );
}
