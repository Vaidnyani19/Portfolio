"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NeuralGlobe } from "../components/NeuralGlobe";

export default function ContactPage() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const staggerContainer = {
        animate: { transition: { staggerChildren: 0.1 } }
    };

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
        <div className="bg-transparent font-[family-name:var(--font-display)] text-slate-100 selection:bg-primary/30 relative">
            <NeuralGlobe />
            <div className="relative flex w-full flex-col overflow-x-hidden z-10">
                <div className="layout-container flex flex-col">
                    <main className="flex flex-col items-center px-6 py-12 md:py-20 max-w-5xl mx-auto w-full">
                        {/* Section Header */}
                        <motion.div 
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                            className="w-full text-left mb-12"
                        >
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <motion.div variants={fadeIn}>
                                    <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Section 06 / CONTACT</h2>
                                    <h1 className="text-slate-100 text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
                                        Let&apos;s Build Something <span className="text-primary">Intelligent</span>
                                    </h1>
                                </motion.div>
                                <motion.div variants={fadeIn} className="flex items-center">
                                    <div className="animate-status flex h-9 items-center justify-center gap-x-2 rounded-full border border-primary/30 bg-primary/10 px-5 shadow-[0_0_15px_rgba(0,246,255,0.1)]">
                                        <div className="size-2 rounded-full bg-primary"></div>
                                        <p className="text-primary text-[10px] md:text-xs font-bold tracking-wider">SYSTEM STATUS: OPEN TO OPPORTUNITIES</p>
                                    </div>
                                </motion.div>
                            </div>
                            <motion.p variants={fadeIn} className="text-slate-400 text-lg max-w-xl leading-relaxed font-light">
                                I&apos;m currently looking for new challenges in Data Science, Machine Learning Engineering, or AI Architecture. Reach out and let&apos;s discuss your next project.
                            </motion.p>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
                            {/* Contact Form */}
                            <motion.div 
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.8 }}
                                className="bg-[#162e2f]/40 backdrop-blur-md border border-[#204a4b] p-8 rounded-2xl shadow-2xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all"></div>
                                {status === "success" ? (
                                    <div className="flex flex-col items-center justify-center h-full gap-6 py-12 text-center">
                                        <div className="size-16 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                                            <span className="material-symbols-outlined text-primary text-3xl">check_circle</span>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-100 mb-2">Message Sent!</h3>
                                            <p className="text-slate-400 text-sm">Your message has been delivered to my inbox. I&apos;ll get back to you soon.</p>
                                        </div>
                                        <button onClick={() => setStatus("idle")} className="text-primary border border-primary/30 px-6 py-2 rounded-lg text-sm hover:bg-primary/10 transition-colors">
                                            Send Another
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                        <div>
                                            <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                                            <input
                                                className="w-full bg-[#0f2223]/80 border border-[#204a4b] rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary transition-all placeholder:text-slate-600 focus:ring-1 focus:ring-primary/20"
                                                id="name" name="name" placeholder="John Doe" type="text" required
                                                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                                            <input
                                                className="w-full bg-[#0f2223]/80 border border-[#204a4b] rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary transition-all placeholder:text-slate-600 focus:ring-1 focus:ring-primary/20"
                                                id="email" name="email" placeholder="john@example.com" type="email" required
                                                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="message">Message</label>
                                            <textarea
                                                className="w-full bg-[#0f2223]/80 border border-[#204a4b] rounded-xl px-4 py-3 text-slate-100 focus:outline-none focus:border-primary transition-all placeholder:text-slate-600 resize-none focus:ring-1 focus:ring-primary/20"
                                                id="message" name="message" placeholder="Tell me about your project..." rows={5} required
                                                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                                            />
                                        </div>
                                        {status === "error" && (
                                            <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 px-4 py-3 rounded-lg">
                                                ⚠️ Failed to send. Please try again or email directly.
                                            </p>
                                        )}
                                        <button
                                            className="w-full bg-primary hover:bg-primary/90 text-[#0f2223] font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 group disabled:opacity-60 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95"
                                            type="submit"
                                            disabled={status === "sending"}
                                        >
                                            {status === "sending" ? (
                                                <>
                                                    <span className="animate-spin material-symbols-outlined text-xl">progress_activity</span>
                                                    <span>Sending...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Initialize Connection</span>
                                                    <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">send</span>
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </motion.div>

                            {/* Side Info & Socials */}
                            <motion.div 
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="flex flex-col justify-between"
                            >
                                <div className="space-y-12">
                                    <div>
                                        <h3 className="text-slate-100 text-xl font-bold mb-4">Direct Contact</h3>
                                        <div className="space-y-4">
                                            {[
                                                { icon: "mail", label: "Email", value: "vaidnyanithakare19@gmail.com", href: "mailto:vaidnyanithakare19@gmail.com" },
                                                { icon: "location_on", label: "Location", value: "India / Remote" }
                                            ].map((item, i) => (
                                                <motion.div 
                                                    key={i}
                                                    whileHover={{ x: 5 }}
                                                    className="flex items-center gap-4 group cursor-pointer"
                                                >
                                                    <div className="size-10 rounded-xl bg-[#204a4b] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0f2223] transition-all">
                                                        <span className="material-symbols-outlined">{item.icon}</span>
                                                    </div>
                                                    <div>
                                                        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{item.label}</p>
                                                        {item.href ? (
                                                            <a href={item.href} className="text-slate-200 font-medium hover:text-primary transition-colors">{item.value}</a>
                                                        ) : (
                                                            <p className="text-slate-200 font-medium">{item.value}</p>
                                                        )}
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-slate-100 text-xl font-bold mb-6">Neural Networks</h3>
                                        <div className="flex flex-wrap gap-4">
                                            {[
                                                { icon: "code", title: "GitHub", href: "#" },
                                                { icon: "hub", title: "LinkedIn", href: "https://www.linkedin.com/in/vaidnyani-thakare-943a99359" },
                                            ].map((social, i) => (
                                                <motion.a 
                                                    key={social.title} 
                                                    href={social.href} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer" 
                                                    whileHover={{ y: -5, scale: 1.1 }}
                                                    className="size-12 rounded-full border border-[#204a4b] flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all bg-[#162e2f]/30 backdrop-blur-sm" 
                                                    title={social.title}
                                                >
                                                    <span className="material-symbols-outlined">{social.icon}</span>
                                                </motion.a>
                                            ))}
                                            <motion.a
                                                href="https://wa.me/918208217012"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Chat on WhatsApp"
                                                whileHover={{ y: -5, scale: 1.1 }}
                                                className="size-12 rounded-full border border-[#204a4b] flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all bg-[#162e2f]/30 backdrop-blur-sm"
                                            >
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                                </svg>
                                            </motion.a>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Element */}
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 0.5 }}
                                    transition={{ delay: 1, duration: 1 }}
                                    className="mt-12 hidden lg:block"
                                >
                                    <div className="relative w-full h-32 overflow-hidden rounded-2xl border border-[#204a4b]/50">
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-[#ccff00]/5 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></div>
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-[10px] text-slate-600 font-mono tracking-[0.3em] uppercase">Encryption active // Neural stream connected...</span>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="border-t border-[#204a4b]/20 px-6 md:px-20 py-8 bg-transparent">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="size-4 text-primary">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <p className="text-slate-500 text-sm font-medium">© 2024 DS/AI Portfolio. All rights reserved.</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <a className="text-slate-600 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">code</span></a>
                                <a className="text-slate-600 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">hub</span></a>
                                <a className="text-slate-600 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
                                <a className="text-slate-600 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">data_exploration</span></a>
                            </div>
                            <div className="text-slate-600 text-xs tracking-widest">
                                EST. 2024 // VERSION 2.0.4
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
