"use client";

import { useState } from "react";

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
        <div className="bg-[#f5f8f8] dark:bg-[#0f2223] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 selection:bg-primary/30">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                <div className="layout-container flex h-full grow flex-col">
                    {/* Navigation */}


                    <main className="flex-1 flex flex-col items-center px-6 py-12 md:py-20 max-w-5xl mx-auto w-full">
                        {/* Section Header */}
                        <div className="w-full text-left mb-12">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                                <div>
                                    <h2 className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-2">Section 06 / CONTACT</h2>
                                    <h1 className="text-slate-100 text-4xl md:text-6xl font-bold leading-tight max-w-2xl">
                                        Let&apos;s Build Something <span className="text-[#ccff00]">Intelligent</span>
                                    </h1>
                                </div>
                                <div className="flex items-center">
                                    <div className="animate-status flex h-9 items-center justify-center gap-x-2 rounded-full border border-primary/30 bg-primary/10 px-5 shadow-[0_0_15px_rgba(0,246,255,0.1)]">
                                        <div className="size-2 rounded-full bg-primary"></div>
                                        <p className="text-primary text-[10px] md:text-xs font-bold tracking-wider">SYSTEM STATUS: OPEN TO OPPORTUNITIES</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-400 text-lg max-w-xl">
                                I&apos;m currently looking for new challenges in Data Science, Machine Learning Engineering, or AI Architecture. Reach out and let&apos;s discuss your next project.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
                            {/* Contact Form */}
                            <div className="bg-[#162e2f]/50 border border-[#204a4b] p-8 rounded-xl shadow-2xl">
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
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div>
                                            <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="name">Full Name</label>
                                            <input
                                                className="w-full bg-[#0f2223] border border-[#204a4b] rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600"
                                                id="name" name="name" placeholder="John Doe" type="text" required
                                                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="email">Email Address</label>
                                            <input
                                                className="w-full bg-[#0f2223] border border-[#204a4b] rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600"
                                                id="email" name="email" placeholder="john@example.com" type="email" required
                                                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-slate-300 text-sm font-medium mb-2" htmlFor="message">Message</label>
                                            <textarea
                                                className="w-full bg-[#0f2223] border border-[#204a4b] rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-600 resize-none"
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
                                            className="w-full bg-primary hover:bg-primary/90 text-[#0f2223] font-bold py-4 rounded-lg transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
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
                            </div>

                            {/* Side Info & Socials */}
                            <div className="flex flex-col justify-between">
                                <div className="space-y-12">
                                    <div>
                                        <h3 className="text-slate-100 text-xl font-bold mb-4">Direct Contact</h3>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-4 group cursor-pointer">
                                                <div className="size-10 rounded-lg bg-[#204a4b] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0f2223] transition-all">
                                                    <span className="material-symbols-outlined">mail</span>
                                                </div>
                                                <div>
                                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Email</p>
                                                    <a href="mailto:vaidnyanithakare19@gmail.com" className="text-slate-200 font-medium hover:text-primary transition-colors">vaidnyanithakare19@gmail.com</a>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4 group cursor-pointer">
                                                <div className="size-10 rounded-lg bg-[#204a4b] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-[#0f2223] transition-all">
                                                    <span className="material-symbols-outlined">location_on</span>
                                                </div>
                                                <div>
                                                    <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Location</p>
                                                    <p className="text-slate-200 font-medium">India / Remote</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-slate-100 text-xl font-bold mb-6">Neural Networks</h3>
                                        <div className="flex flex-wrap gap-4">
                                            {[
                                                { icon: "code", title: "GitHub", href: "#" },
                                                { icon: "hub", title: "LinkedIn", href: "https://www.linkedin.com/in/vaidnyani-thakare-943a99359" },
                                            ].map((social) => (
                                                <a key={social.title} href={social.href} target="_blank" rel="noopener noreferrer" className="size-12 rounded-full border border-[#204a4b] flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all hover:-translate-y-1 bg-[#162e2f]/30" title={social.title}>
                                                    <span className="material-symbols-outlined">{social.icon}</span>
                                                </a>
                                            ))}
                                            {/* WhatsApp */}
                                            <a
                                                href="https://wa.me/918208217012"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                title="Chat on WhatsApp"
                                                className="size-12 rounded-full border border-[#204a4b] flex items-center justify-center text-slate-400 hover:text-[#25D366] hover:border-[#25D366]/50 transition-all hover:-translate-y-1 bg-[#162e2f]/30"
                                            >
                                                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Element */}
                                <div className="mt-12 opacity-50 hidden lg:block">
                                    <div className="relative w-full h-32 overflow-hidden rounded-xl border border-[#204a4b]/50">
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-[#ccff00]/5 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 w-full h-1 bg-primary/20"></div>
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-[10px] text-slate-600 font-mono tracking-widest uppercase">Encryption active // Data streaming in...</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    {/* Footer */}
                    <footer className="mt-auto border-t border-[#204a4b] px-6 md:px-20 py-8 bg-[#0f2223]">
                        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                            <div className="flex items-center gap-3">
                                <div className="size-4 text-[#ccff00]">
                                    <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M4 42.4379C4 42.4379 14.0962 36.0744 24 41.1692C35.0664 46.8624 44 42.2078 44 42.2078L44 7.01134C44 7.01134 35.068 11.6577 24.0031 5.96913C14.0971 0.876274 4 7.27094 4 7.27094L4 42.4379Z" fill="currentColor"></path>
                                    </svg>
                                </div>
                                <p className="text-slate-400 text-sm font-medium">© 2024 DS/AI Portfolio. All rights reserved.</p>
                            </div>
                            <div className="flex items-center gap-6">
                                <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">code</span></a>
                                <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">hub</span></a>
                                <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">share</span></a>
                                <a className="text-slate-500 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl">data_exploration</span></a>
                            </div>
                            <div className="text-slate-500 text-xs tracking-widest">
                                EST. 2024 // VERSION 2.0.4
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
