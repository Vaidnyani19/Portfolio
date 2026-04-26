"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
    { href: "/", label: "Home", num: "01" },
    { href: "/about", label: "About", num: "02" },
    { href: "/projects", label: "Projects", num: "03" },
    { href: "/experience", label: "Experience", num: "04" },
    { href: "/skills", label: "Skills", num: "05" },
    // { href: "/blog", label: "Blog", num: "06" }, // hidden — restore when ready
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[#204a4b]/30 bg-[#050D0E]">
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-2xl">terminal</span>
                    <div className="flex flex-col">
                        <span className="font-[family-name:var(--font-mono)] text-[10px] text-primary/80 tracking-widest uppercase leading-none mb-0.5">System.Status: Active</span>
                        <h2 className="text-base font-bold tracking-tight text-slate-100 leading-none">Vaidnyani Thakare</h2>
                    </div>
                </div>
                <nav className="hidden md:flex items-center gap-10 font-[family-name:var(--font-mono)] text-sm">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            className={`nav-link hover:text-primary transition-all duration-300 flex items-center gap-1.5 group relative py-2 ${pathname === item.href ? "text-primary font-bold" : "text-slate-400"
                                }`}
                            href={item.href}
                        >
                            <span className="text-[10px] opacity-70 font-mono tracking-tighter">{item.num}</span>
                            <span className="relative z-10">
                                {item.label}
                            </span>
                            {pathname === item.href && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-primary/10 rounded-lg border-b-2 border-primary -z-0"
                                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                                />
                            )}
                        </Link>
                    ))}
                    <Link
                        className="px-5 py-1.5 border border-primary/40 rounded-md text-primary text-xs font-bold hover:bg-primary hover:text-[#050D0E] transition-all duration-300 ml-4 hover:shadow-[0_0_15px_rgba(0,246,255,0.2)]"
                        href="/contact"
                    >
                        Contact
                    </Link>

                </nav>
                <button className="md:hidden text-primary">
                    <span className="material-symbols-outlined">menu</span>
                </button>
            </div>
        </header>
    );
}
