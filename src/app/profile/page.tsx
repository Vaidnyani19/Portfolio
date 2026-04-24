"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePortfolioStore, defaultData, Project, ExperienceEntry, SkillCategory } from "@/lib/portfolio-store";

// ─── helpers ─────────────────────────────────────────────────────────────────
const Input = ({ label, value, onChange, placeholder, type = "text" }: {
    label: string; value: string; onChange: (v: string) => void;
    placeholder?: string; type?: string;
}) => (
    <div className="space-y-1.5">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</label>
        <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="w-full bg-[#0a1a1b] border border-[#1a3638] rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-primary/60 transition-colors"
        />
    </div>
);

const Textarea = ({ label, value, onChange, rows = 4 }: {
    label: string; value: string; onChange: (v: string) => void; rows?: number;
}) => (
    <div className="space-y-1.5">
        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</label>
        <textarea
            rows={rows}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-[#0a1a1b] border border-[#1a3638] rounded-lg px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-primary/60 transition-colors resize-none"
        />
    </div>
);

const TagEditor = ({ label, tags, onChange }: { label: string; tags: string[]; onChange: (t: string[]) => void }) => {
    const [input, setInput] = useState("");
    const add = () => { if (input.trim()) { onChange([...tags, input.trim()]); setInput(""); } };
    const remove = (i: number) => onChange(tags.filter((_, idx) => idx !== i));
    return (
        <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{label}</label>
            <div className="flex flex-wrap gap-2 mb-2">
                {tags.map((t, i) => (
                    <span key={i} className="flex items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary">
                        {t}
                        <button onClick={() => remove(i)} className="hover:text-red-400 transition-colors ml-1">✕</button>
                    </span>
                ))}
            </div>
            <div className="flex gap-2">
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && add()}
                    placeholder="Add tag, press Enter"
                    className="flex-1 bg-[#0a1a1b] border border-[#1a3638] rounded-lg px-4 py-2 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-primary/60 transition-colors"
                />
                <button onClick={add} className="px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-lg text-xs hover:bg-primary/20 transition-colors">Add</button>
            </div>
        </div>
    );
};

const SectionCard = ({ children, title }: { children: React.ReactNode; title: string }) => (
    <div className="bg-[#0f1e1f] border border-[#1a3638] rounded-2xl p-8 space-y-6">
        <h3 className="text-lg font-bold text-slate-100 border-b border-[#1a3638] pb-4">{title}</h3>
        {children}
    </div>
);

// ─── section editors ──────────────────────────────────────────────────────────
function HeroEditor() {
    const store = usePortfolioStore();
    return (
        <div className="space-y-6">
            <SectionCard title="Hero — Identity">
                <Input label="Full Name" value={store.heroName} onChange={(v) => store.update({ heroName: v })} placeholder="Your name" />
                <Input label="Role / Title" value={store.heroRole} onChange={(v) => store.update({ heroRole: v })} placeholder="Data Scientist | AI Engineer" />
                <Input label="Main Tagline" value={store.heroTagline} onChange={(v) => store.update({ heroTagline: v })} placeholder="I turn raw data into decisions." />
                <Input label="Sub Tagline" value={store.heroSubtag} onChange={(v) => store.update({ heroSubtag: v })} placeholder="Building intelligence, one model at a time." />
                <Input label="Status Badge" value={store.heroStatus} onChange={(v) => store.update({ heroStatus: v })} placeholder="Available for new deployment" />
            </SectionCard>
            <SectionCard title="Hero — Social Links">
                <Input label="GitHub URL" value={store.heroGithub} onChange={(v) => store.update({ heroGithub: v })} placeholder="https://github.com/..." />
                <Input label="LinkedIn URL" value={store.heroLinkedin} onChange={(v) => store.update({ heroLinkedin: v })} placeholder="https://linkedin.com/in/..." />
            </SectionCard>
        </div>
    );
}

function AboutEditor() {
    const store = usePortfolioStore();
    const setBio = (i: number, v: string) => {
        const next = [...store.aboutBio];
        next[i] = v;
        store.update({ aboutBio: next });
    };
    return (
        <div className="space-y-6">
            <SectionCard title="About — Header">
                <Input label="Section Title" value={store.aboutTitle} onChange={(v) => store.update({ aboutTitle: v })} />
                <Input label="Subtitle" value={store.aboutSubtitle} onChange={(v) => store.update({ aboutSubtitle: v })} />
                <TagEditor label="Tags" tags={store.aboutTags} onChange={(t) => store.update({ aboutTags: t })} />
            </SectionCard>
            <SectionCard title="About — Bio Paragraphs">
                {store.aboutBio.map((p, i) => (
                    <Textarea key={i} label={`Paragraph ${i + 1}`} value={p} onChange={(v) => setBio(i, v)} rows={4} />
                ))}
                <button
                    onClick={() => store.update({ aboutBio: [...store.aboutBio, ""] })}
                    className="text-xs text-primary border border-primary/20 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
                >
                    + Add Paragraph
                </button>
            </SectionCard>
        </div>
    );
}

function ProjectsEditor() {
    const store = usePortfolioStore();
    const [expanded, setExpanded] = useState<string | null>(store.projects[0]?.id ?? null);

    const update = (id: string, patch: Partial<Project>) =>
        store.update({ projects: store.projects.map((p) => (p.id === id ? { ...p, ...patch } : p)) });

    const addProject = () => {
        const newP: Project = { id: Date.now().toString(), title: "New Project", description: "", tags: [], category: "ML", github: "#", demo: "#" };
        store.update({ projects: [...store.projects, newP] });
        setExpanded(newP.id);
    };

    const remove = (id: string) => store.update({ projects: store.projects.filter((p) => p.id !== id) });

    return (
        <div className="space-y-4">
            {store.projects.map((p) => (
                <div key={p.id} className="bg-[#0f1e1f] border border-[#1a3638] rounded-2xl overflow-hidden">
                    <button
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                        onClick={() => setExpanded(expanded === p.id ? null : p.id)}
                    >
                        <span className="font-bold text-slate-100">{p.title}</span>
                        <div className="flex items-center gap-3">
                            <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded">{p.category}</span>
                            <span className="text-slate-500 text-lg">{expanded === p.id ? "−" : "+"}</span>
                        </div>
                    </button>
                    <AnimatePresence>
                        {expanded === p.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 space-y-4 border-t border-[#1a3638]">
                                    <div className="pt-4 space-y-4">
                                        <Input label="Title" value={p.title} onChange={(v) => update(p.id, { title: v })} />
                                        <Textarea label="Description" value={p.description} onChange={(v) => update(p.id, { description: v })} rows={3} />
                                        <Input label="Category" value={p.category} onChange={(v) => update(p.id, { category: v })} placeholder="ML / GenAI / ChemE+AI..." />
                                        <TagEditor label="Tech Tags" tags={p.tags} onChange={(t) => update(p.id, { tags: t })} />
                                        <div className="grid grid-cols-2 gap-4">
                                            <Input label="GitHub URL" value={p.github} onChange={(v) => update(p.id, { github: v })} />
                                            <Input label="Demo URL" value={p.demo} onChange={(v) => update(p.id, { demo: v })} />
                                        </div>
                                        <button onClick={() => remove(p.id)} className="text-xs text-red-400 border border-red-400/20 px-4 py-2 rounded-lg hover:bg-red-400/10 transition-colors">
                                            Remove Project
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
            <button onClick={addProject} className="w-full py-4 border-2 border-dashed border-primary/20 rounded-2xl text-primary/60 hover:text-primary hover:border-primary/40 text-sm transition-colors">
                + Add New Project
            </button>
        </div>
    );
}

function ExperienceEditor() {
    const store = usePortfolioStore();
    const [expanded, setExpanded] = useState<string | null>(null);

    const update = (id: string, patch: Partial<ExperienceEntry>) =>
        store.update({ experienceEntries: store.experienceEntries.map((e) => (e.id === id ? { ...e, ...patch } : e)) });

    const setPoints = (id: string, points: string[]) => update(id, { points });
    const addEntry = () => {
        const e: ExperienceEntry = { id: Date.now().toString(), period: "", title: "New Entry", company: "", points: [], type: "work" };
        store.update({ experienceEntries: [...store.experienceEntries, e] });
        setExpanded(e.id);
    };
    const remove = (id: string) => store.update({ experienceEntries: store.experienceEntries.filter((e) => e.id !== id) });

    return (
        <div className="space-y-4">
            {store.experienceEntries.map((e) => (
                <div key={e.id} className="bg-[#0f1e1f] border border-[#1a3638] rounded-2xl overflow-hidden">
                    <button
                        className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                        onClick={() => setExpanded(expanded === e.id ? null : e.id)}
                    >
                        <div>
                            <p className="font-bold text-slate-100">{e.title}</p>
                            <p className="text-xs text-slate-500 mt-0.5">{e.company} · {e.period}</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className={`text-xs px-2 py-1 rounded ${e.type === "work" ? "bg-primary/10 text-primary" : "bg-[#ccff00]/10 text-[#ccff00]"}`}>{e.type}</span>
                            <span className="text-slate-500 text-lg">{expanded === e.id ? "−" : "+"}</span>
                        </div>
                    </button>
                    <AnimatePresence>
                        {expanded === e.id && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 space-y-4 border-t border-[#1a3638] pt-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input label="Period" value={e.period} onChange={(v) => update(e.id, { period: v })} placeholder="Jun 2024 — Aug 2024" />
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Type</label>
                                            <select
                                                value={e.type}
                                                onChange={(ev) => update(e.id, { type: ev.target.value as "work" | "education" })}
                                                className="w-full bg-[#0a1a1b] border border-[#1a3638] rounded-lg px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-primary/60 transition-colors"
                                            >
                                                <option value="work">Work</option>
                                                <option value="education">Education</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Input label="Title / Role" value={e.title} onChange={(v) => update(e.id, { title: v })} />
                                    <Input label="Company / Institution" value={e.company} onChange={(v) => update(e.id, { company: v })} />
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Bullet Points</label>
                                        {e.points.map((pt, i) => (
                                            <div key={i} className="flex gap-2">
                                                <input
                                                    value={pt}
                                                    onChange={(ev) => { const pts = [...e.points]; pts[i] = ev.target.value; setPoints(e.id, pts); }}
                                                    className="flex-1 bg-[#0a1a1b] border border-[#1a3638] rounded-lg px-4 py-2 text-sm text-slate-100 focus:outline-none focus:border-primary/60 transition-colors"
                                                />
                                                <button onClick={() => setPoints(e.id, e.points.filter((_, j) => j !== i))} className="text-red-400/60 hover:text-red-400 text-lg px-2">✕</button>
                                            </div>
                                        ))}
                                        <button onClick={() => setPoints(e.id, [...e.points, ""])} className="text-xs text-primary border border-primary/20 px-3 py-1.5 rounded-lg hover:bg-primary/10 transition-colors">+ Add Point</button>
                                    </div>
                                    <button onClick={() => remove(e.id)} className="text-xs text-red-400 border border-red-400/20 px-4 py-2 rounded-lg hover:bg-red-400/10 transition-colors">Remove Entry</button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
            <button onClick={addEntry} className="w-full py-4 border-2 border-dashed border-primary/20 rounded-2xl text-primary/60 hover:text-primary hover:border-primary/40 text-sm transition-colors">
                + Add New Entry
            </button>
        </div>
    );
}

function SkillsEditor() {
    const store = usePortfolioStore();

    const updateCat = (id: string, patch: Partial<SkillCategory>) =>
        store.update({ skillCategories: store.skillCategories.map((c) => (c.id === id ? { ...c, ...patch } : c)) });

    const addCat = () => {
        const c: SkillCategory = { id: Date.now().toString(), name: "New Category", items: [] };
        store.update({ skillCategories: [...store.skillCategories, c] });
    };
    const removeCat = (id: string) => store.update({ skillCategories: store.skillCategories.filter((c) => c.id !== id) });

    return (
        <div className="space-y-6">
            <SectionCard title="Skills — Metrics">
                <Input label="Mastery Level" value={store.skillMastery} onChange={(v) => store.update({ skillMastery: v })} />
                <div className="grid grid-cols-2 gap-4">
                    <Input label="Projects Count" value={store.skillProjects} onChange={(v) => store.update({ skillProjects: v })} />
                    <Input label="Certifications Count" value={store.skillCertifications} onChange={(v) => store.update({ skillCertifications: v })} />
                </div>
            </SectionCard>
            <div className="space-y-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Skill Categories</p>
                {store.skillCategories.map((cat) => (
                    <div key={cat.id} className="bg-[#0f1e1f] border border-[#1a3638] rounded-2xl p-6 space-y-4">
                        <div className="flex items-center justify-between">
                            <input
                                value={cat.name}
                                onChange={(e) => updateCat(cat.id, { name: e.target.value })}
                                className="bg-transparent text-sm font-bold text-primary focus:outline-none border-b border-transparent focus:border-primary/40 transition-colors"
                            />
                            <button onClick={() => removeCat(cat.id)} className="text-red-400/40 hover:text-red-400 text-lg transition-colors">✕</button>
                        </div>
                        <TagEditor label="Items" tags={cat.items} onChange={(t) => updateCat(cat.id, { items: t })} />
                    </div>
                ))}
                <button onClick={addCat} className="w-full py-4 border-2 border-dashed border-primary/20 rounded-2xl text-primary/60 hover:text-primary hover:border-primary/40 text-sm transition-colors">
                    + Add Skill Category
                </button>
            </div>
        </div>
    );
}

function ContactEditor() {
    const store = usePortfolioStore();
    return (
        <SectionCard title="Contact — Details">
            <Input label="Your Email" value={store.contactEmail} onChange={(v) => store.update({ contactEmail: v })} type="email" placeholder="you@example.com" />
            <Input label="CTA Headline" value={store.contactHeadline} onChange={(v) => store.update({ contactHeadline: v })} />
            <Textarea label="Sub-text / Description" value={store.contactSubtext} onChange={(v) => store.update({ contactSubtext: v })} rows={3} />
        </SectionCard>
    );
}

// ─── main page ────────────────────────────────────────────────────────────────
const sections = [
    { id: "hero", label: "Hero", icon: "home", editor: <HeroEditor /> },
    { id: "about", label: "About", icon: "person", editor: <AboutEditor /> },
    { id: "projects", label: "Projects", icon: "work", editor: <ProjectsEditor /> },
    { id: "experience", label: "Experience", icon: "timeline", editor: <ExperienceEditor /> },
    { id: "skills", label: "Tech Stack", icon: "terminal", editor: <SkillsEditor /> },
    { id: "contact", label: "Contact", icon: "mail", editor: <ContactEditor /> },
];

export default function ProfilePage() {
    const [active, setActive] = useState("hero");
    const store = usePortfolioStore();
    const [saved, setSaved] = useState(false);

    const handleSave = () => {
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    const current = sections.find((s) => s.id === active)!;

    return (
        <div className="min-h-screen bg-[#050D0E] font-[family-name:var(--font-display)] text-slate-100">
            {/* Top bar */}
            <header className="sticky top-0 z-50 w-full border-b border-[#1a3638] bg-[#050D0E]/90 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary text-xl">manage_accounts</span>
                        <h1 className="font-bold tracking-tight">Portfolio Editor</h1>
                        <span className="ml-2 text-[10px] font-mono text-slate-500 uppercase tracking-widest">/ Profile</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => store.reset()}
                            className="text-xs text-slate-500 border border-slate-700 px-4 py-2 rounded-lg hover:text-red-400 hover:border-red-400/30 transition-colors"
                        >
                            Reset to Default
                        </button>
                        <button
                            onClick={handleSave}
                            className={`text-xs px-5 py-2 rounded-lg font-bold transition-all ${saved ? "bg-green-500/20 text-green-400 border border-green-400/30" : "bg-primary text-[#050D0E] hover:opacity-90"}`}
                        >
                            {saved ? "✓ Saved!" : "Save Changes"}
                        </button>
                        <a href="/" target="_blank" className="text-xs border border-primary/30 text-primary px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-sm">open_in_new</span>
                            Preview Site
                        </a>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 py-10 flex gap-8">
                {/* Sidebar */}
                <aside className="w-56 shrink-0 sticky top-24 self-start">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 mb-4 font-bold">Sections</p>
                    <nav className="space-y-1">
                        {sections.map((s) => (
                            <button
                                key={s.id}
                                onClick={() => setActive(s.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                                    active === s.id
                                        ? "bg-primary/10 text-primary border border-primary/20"
                                        : "text-slate-400 hover:bg-white/5 hover:text-slate-100"
                                }`}
                            >
                                <span className="material-symbols-outlined text-base">{s.icon}</span>
                                {s.label}
                            </button>
                        ))}
                    </nav>

                    <div className="mt-10 p-4 bg-[#0f1e1f] border border-[#1a3638] rounded-xl">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Auto-saved</p>
                        <p className="text-xs text-slate-500">All changes are saved to your browser automatically. Use &quot;Save Changes&quot; to confirm.</p>
                    </div>
                </aside>

                {/* Editor panel */}
                <main className="flex-1 min-w-0">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="flex items-center gap-3 mb-8">
                                <span className="material-symbols-outlined text-primary text-2xl">{current.icon}</span>
                                <div>
                                    <h2 className="text-2xl font-bold">{current.label}</h2>
                                    <p className="text-xs text-slate-500 font-mono">Edit the {current.label.toLowerCase()} section of your portfolio</p>
                                </div>
                            </div>
                            {current.editor}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
