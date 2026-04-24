"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            if (res.ok) {
                setStatus("success");
                setForm({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="bg-[#f5f8f8] dark:bg-[#050D0E] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 antialiased selection:bg-primary/30 selection:text-primary min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* Background Tech Particles */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {[...Array(8)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ 
                                opacity: [0.05, 0.15, 0.05],
                                x: [Math.random() * 100, Math.random() * 100],
                                y: [Math.random() * 100, Math.random() * 100]
                            }}
                            transition={{ 
                                duration: 15 + Math.random() * 15, 
                                repeat: Infinity,
                                ease: "linear"
                            }}
                            className="absolute size-px bg-primary shadow-[0_0_15px_rgba(0,246,255,0.8)]"
                            style={{ 
                                left: `${Math.random() * 100}%`, 
                                top: `${Math.random() * 100}%`,
                                transform: `scale(${Math.random() * 8})`
                            }}
                        />
                    ))}
                </div>

                <main className="flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-20 lg:py-32 relative z-10">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 mb-24">
                        <div className="flex flex-col gap-6">
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="flex items-center gap-4"
                            >
                                <span className="text-primary font-mono font-bold tracking-[0.4em] text-[10px] uppercase opacity-60">System.Communications / CONTACT</span>
                                <div className="h-px w-24 bg-primary/20"></div>
                            </motion.div>
                            <motion.h1 
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                                className="text-7xl md:text-9xl font-bold tracking-tighter leading-[0.85] text-white"
                            >
                                GET IN<br/>
                                <span className="text-primary italic">TOUCH.</span>
                            </motion.h1>
                        </div>

                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center"
                        >
                            <div className="flex h-14 items-center justify-center gap-x-4 rounded-3xl border border-primary/20 bg-[#0f2223]/50 px-8 backdrop-blur-xl shadow-2xl">
                                <div className="size-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,246,255,1)]"></div>
                                <p className="text-primary text-[11px] font-bold tracking-[0.2em] uppercase">SYSTEM STATUS: READY TO CONNECT</p>
                            </div>
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 w-full">
                        {/* Contact Form */}
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="lg:col-span-7 bg-[#0f2223]/50 backdrop-blur-2xl border border-[#1a3638] p-10 md:p-16 rounded-[3rem] shadow-3xl relative overflow-hidden group"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                            
                            {status === "success" ? (
                                <motion.div 
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center h-full gap-10 py-16 text-center"
                                >
                                    <div className="size-24 rounded-[2rem] bg-primary/10 border border-primary/20 flex items-center justify-center shadow-2xl">
                                        <span className="material-symbols-outlined text-primary text-5xl">verified</span>
                                    </div>
                                    <div>
                                        <h3 className="text-4xl font-bold text-white mb-4 tracking-tight">Transmission Received.</h3>
                                        <p className="text-slate-400 text-lg font-light leading-relaxed max-w-sm">Message successfully encrypted and sent. I&apos;ll be in touch shortly.</p>
                                    </div>
                                    <button 
                                        onClick={() => setStatus("idle")} 
                                        className="text-primary font-bold uppercase tracking-widest text-[10px] border border-primary/30 px-10 py-4 rounded-2xl hover:bg-primary/5 hover:border-primary transition-all active:scale-95"
                                    >
                                        Initialize New Session
                                    </button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-10 relative z-10">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                        <div className="space-y-4">
                                            <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] ml-2" htmlFor="name">Full Identity</label>
                                            <input
                                                className="w-full bg-[#050D0E] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-700 text-lg font-light"
                                                id="name" name="name" placeholder="John Wick" type="text" required
                                                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-4">
                                            <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] ml-2" htmlFor="email">Digital Address</label>
                                            <input
                                                className="w-full bg-[#050D0E] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-700 text-lg font-light"
                                                id="email" name="email" placeholder="john@continental.com" type="email" required
                                                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-4">
                                        <label className="block text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em] ml-2" htmlFor="message">Data Payload</label>
                                        <textarea
                                            className="w-full bg-[#050D0E] border border-white/5 rounded-2xl px-6 py-5 text-white focus:outline-none focus:border-primary/50 transition-all placeholder:text-slate-700 text-lg font-light resize-none h-48"
                                            id="message" name="message" placeholder="Initialize details about your project..." required
                                            value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                        />
                                    </div>
                                    {status === "error" && (
                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs font-bold uppercase tracking-widest bg-red-400/5 border border-red-400/20 px-6 py-4 rounded-xl text-center">
                                            Transmission Error. Please retry or use direct email.
                                        </motion.p>
                                    )}
                                    <button
                                        className="w-full bg-primary hover:shadow-[0_20px_50px_rgba(0,246,255,0.3)] text-[#050D0E] font-bold py-6 rounded-2xl transition-all flex items-center justify-center gap-4 group disabled:opacity-50 active:scale-[0.98]"
                                        type="submit"
                                        disabled={status === "sending"}
                                    >
                                        <span className="uppercase tracking-[0.3em] text-[12px]">
                                            {status === "sending" ? "Encrypting & Sending..." : "Establish Connection"}
                                        </span>
                                        <span className={`material-symbols-outlined text-xl group-hover:translate-x-2 transition-transform ${status === "sending" ? "animate-spin" : ""}`}>
                                            {status === "sending" ? "autorenew" : "arrow_forward"}
                                        </span>
                                    </button>
                                </form>
                            )}
                        </motion.div>

                        {/* Side Info & Socials */}
                        <div className="lg:col-span-5 flex flex-col justify-between py-6">
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.6 }}
                                className="space-y-16"
                            >
                                <div className="space-y-10">
                                    <h3 className="text-white text-2xl font-bold tracking-tight">Direct Access</h3>
                                    <div className="space-y-8">
                                        <a href="mailto:vaidnyanithakare19@gmail.com" className="flex items-center gap-6 group">
                                            <div className="size-14 rounded-2xl bg-[#0f2223] border border-white/5 flex items-center justify-center text-primary group-hover:border-primary transition-all group-hover:rotate-6">
                                                <span className="material-symbols-outlined text-2xl">alternate_email</span>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Email Endpoint</p>
                                                <p className="text-white text-xl font-light hover:text-primary transition-colors">vaidnyanithakare19@gmail.com</p>
                                            </div>
                                        </a>
                                        <div className="flex items-center gap-6 group">
                                            <div className="size-14 rounded-2xl bg-[#0f2223] border border-white/5 flex items-center justify-center text-primary group-hover:border-primary transition-all group-hover:-rotate-6">
                                                <span className="material-symbols-outlined text-2xl">location_on</span>
                                            </div>
                                            <div className="space-y-1">
                                                <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest">Global Location</p>
                                                <p className="text-white text-xl font-light">Maharashtra, India // Remote</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-10">
                                    <h3 className="text-white text-2xl font-bold tracking-tight">Neural Networks</h3>
                                    <div className="flex flex-wrap gap-6">
                                        {[
                                            { icon: "hub", title: "LinkedIn", href: "https://www.linkedin.com/in/vaidnyani-thakare-943a99359", color: "hover:text-[#0077B5]" },
                                            { icon: "code", title: "GitHub", href: "https://github.com/vaidnyani19", color: "hover:text-white" },
                                            { icon: "chat", title: "WhatsApp", href: "https://wa.me/918208217012", color: "hover:text-[#25D366]" },
                                        ].map((social, idx) => (
                                            <motion.a 
                                                key={social.title} 
                                                href={social.href} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                whileHover={{ y: -10, scale: 1.1 }}
                                                className={`size-20 rounded-3xl bg-[#0f2223] border border-white/5 flex items-center justify-center text-slate-500 transition-all hover:border-primary/40 shadow-2xl relative overflow-hidden group/social ${social.color}`}
                                            >
                                                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/social:opacity-100 transition-opacity"></div>
                                                <span className="material-symbols-outlined text-3xl relative z-10">{social.icon}</span>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>

                            {/* Decorative Grid Footer */}
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.3 }}
                                transition={{ delay: 1 }}
                                className="mt-20 hidden lg:block"
                            >
                                <div className="flex flex-col gap-2">
                                    {[...Array(3)].map((_, i) => (
                                        <div key={i} className="flex gap-2">
                                            {[...Array(12)].map((_, j) => (
                                                <div key={j} className={`size-1.5 rounded-full ${Math.random() > 0.8 ? "bg-primary" : "bg-white/10"}`}></div>
                                            ))}
                                        </div>
                                    ))}
                                    <p className="mt-4 text-[10px] text-slate-600 font-mono tracking-widest uppercase">Encryption status: Optimized / Signal high</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </main>

                <footer className="mt-auto border-t border-white/5 py-16 px-6 md:px-20 text-center relative z-10 bg-[#050D0E]">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <h4 className="text-white text-lg font-bold tracking-tight">VAIDNYANI THAKARE</h4>
                            <p className="text-slate-600 text-xs font-medium tracking-widest uppercase italic">AI & DS Solutions Engineer</p>
                        </div>
                        <p className="text-slate-700 text-[10px] tracking-[0.6em] uppercase font-mono">EST. 2024 // ALL PROTOCOLS VERIFIED</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
