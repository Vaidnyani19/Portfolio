import Link from "next/link";

const articles = [
    { title: "Scaling LLMs in Production: Beyond the Basics", cat: "Research", time: "12 min read", desc: "Infrastructure patterns for high-throughput inference, exploring vLLM, FlashAttention-2, and custom quantization kernels.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBV4qUjKJVd9L6epbU83n9IEjgkMoP_T5aw7dX8KFksyYL6uj-99_pwvOVIuw2uhd09EoJEMbV5uvURzlSv52gHCVb3H10ct0WqSz3AafnHa4MkAHHT_ks-KmaQvWSjAqljdFmcGHE767bxWvmKxB0NkHL22mbU-uvx-w_x3OP97mRpWXZPT19jDULc3jbSJ6CMEGXFoPm0nAXOv8CDaf1Pmid_zyZ5sNr0eQNbl3aFHMPPiQ_dA5Oiit6ZOmgrwxG_9da1Rm6R-w", hasOverlay: true },
    { title: "The Math of Diffusion Models: A Visual Guide", cat: "Tutorial", time: "15 min read", desc: "Breaking down the stochastic differential equations that power modern generative art, from DALL-E to Midjourney.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCT9vYMZJYmo-kLh2ZFfyZQ72eDomLLDxf81UtfE3MuYCY7zWNXZ-zYomHBOW7g1Zy6b6MVvVmsU7oTe-BiqaQ6Qdr92AO0Gx_ZLR11w0XHryraUF99Zf4W4escKMEJ6NNC7UOSexwI4wwu8SITFr1Wc1m71umSvzGcd7sIwbnjhmdVZISEElD9-Kr71Wn1N0dhMZYOopPDlNPTWenf1Ji9EGT2OJhY5fPGGlufAX5ojwUjx8auav3tCijFrcDh5rZA-g48v7i4Rw", hasOverlay: true },
    { title: "Quantization Techniques for Edge AI Deployment", cat: "Research", time: "8 min read", desc: "Optimizing 70B parameter models for consumer-grade hardware using 4-bit GGUF and AWQ strategies.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt2ORA1dG4PlzcOGbgz5nr6GEuLV2PoppLdNmjGxcelNAtzgQt_BcXXXXmv2HB3u3lXhW5cVQQjK5dCo-CZ_VBpOQXiKm0Tjejsh2ZIM5gBLjdCtxAWtVyz1Sruz8g3GGECwtU_d27p994EsGccjuwxZfOWnRkasdDkLQDxRAnSILt-vlngVXmahV7gF0u5pvD3q1OBWDP9HBHkockagrlHCH5hhJNpHbq7NhfKVtQ5aMC9chZjrQkauZyse_GlxAvjEvHon495A", hasOverlay: true },
    { title: "Vector Databases: Why They Are Just the Beginning", cat: "Opinion", time: "10 min read", desc: "Managing embeddings for billion-scale retrieval and why we might be over-engineering RAG systems.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD1tzsgR6DLH_dK1GhBJmTWSpTZrO0kX1Ep7c6A3QLduG9pdhWCP7cPicsyDEMwWmrv8tY_IcaTM-jQU_J7PM98fbrC9w--8K198dOKt1HNjvwcwpEG8cu3o8RQWaLpKyz32SROtHmlW9mA5wbgmoWAprW7L7zH2jQWXAj2QwzPuZ2mthNIvy9CD0tXk2RjkqTcWkT70r9wYXBFqv68foSilxe4BwEU3mANYcDUlYeq858-c2J2uwgJwqxT1JMhk-Zcho-omWKBVg", hasOverlay: false },
    { title: "Building Transformers from Scratch in PyTorch", cat: "Tutorial", time: "20 min read", desc: "A deep technical dive into attention mechanisms, positional encoding, and layer normalization.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmACyER1M-Sk4YJeigB1kc0nmssnTKsUp7Jy1zDzxaQ6Bc-2DSrVKtlzejNfKon9djJonWKl0RMVmopX8oRfXs4mfJCh6lzMLGLVbVDaRVRrWDMWCMU0vJPf-tHqPVUx_HjWLcuZ6TWoEo-wB3_NHDKWZi27knSGjnYyQ6utAP-soDAAKL1plVgQhLOEmjy1wUhmKknms588GCZExwxLmBZDuV8ECWVUC3l4yjBg5cjkaZDBWyF-npQvEEZF1H32Gs1droeH1_2w", hasOverlay: false },
    { title: "Multi-modal Agents: The Next Frontier", cat: "Research", time: "14 min read", desc: "How vision-language models (VLMs) are enabling autonomous agents to interact with graphical user interfaces.", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOpwf2u6lN34WIFcE6hhYX8sczEwl3z_yv0flD665yDq2YhHbJAGDKZ-OIF4Ky65MsdROr6brVL76CEaJ12QCGP1yAFWjQ7lFFoCeU8cTeZRj0BgmDH0dDgkNlgqNfG_VqJwr3uu3sOxlQ-UY1-0roPBQYx9kNvNkKxhtBmrmzsUb2feh_dEY9Nd4tR5BRfY_zq2397--yx_msvdohxQXGyQ11wkGUYQDTL40peGjl-_Q6hSGrGUrAwK-nPQTauaRlaIrVy6GOng", hasOverlay: false },
];

export default function BlogPage() {
    return (
        <div className="bg-[#f5f8f8] dark:bg-[#050d0e] font-[family-name:var(--font-display)] text-slate-900 dark:text-slate-100 min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden">
                {/* Header */}


                <main className="flex-1 w-full max-w-7xl mx-auto px-6 lg:px-20 py-12">
                    {/* Hero */}
                    <div className="mb-12">
                        <div className="flex flex-col gap-2">
                            <span className="text-primary font-mono text-sm tracking-widest uppercase">Section 05 / WRITING</span>
                            <h1 className="text-slate-100 text-5xl md:text-6xl font-black tracking-tighter mb-4">
                                Latent Spaces &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">Logic.</span>
                            </h1>
                            <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
                                Deep dives into Large Language Models, Diffusion processes, and the architecture of scalable AI systems. Bridging the gap between research papers and production-ready code.
                            </p>
                        </div>
                    </div>

                    {/* Filter Tabs */}
                    <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-hide">
                        {["All Posts", "Research", "Tutorial", "Opinion"].map((f, i) => (
                            <button key={f} className={`px-6 py-2 rounded-full text-sm ${i === 0 ? "bg-primary text-[#050d0e] font-bold" : "bg-[#204a4b]/50 text-slate-300 hover:bg-[#204a4b] transition-colors border border-[#204a4b]/50"}`}>{f}</button>
                        ))}
                    </div>

                    {/* Article Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {articles.map((article) => (
                            <article key={article.title} className="group flex flex-col gap-4">
                                <div className="relative aspect-video overflow-hidden rounded-xl border border-[#204a4b]">
                                    {article.hasOverlay && (
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#050d0e]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-4">
                                            <span className="text-primary text-xs font-bold uppercase tracking-widest">Read Article →</span>
                                        </div>
                                    )}
                                    <img alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src={article.img} />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-primary/80">
                                        <span>{article.cat}</span>
                                        <span className="text-slate-600">•</span>
                                        <span className="text-slate-400">{article.time}</span>
                                    </div>
                                    <h3 className="text-slate-100 text-xl font-bold group-hover:text-primary transition-colors">{article.title}</h3>
                                    <p className="text-slate-400 text-sm line-clamp-2 leading-relaxed">{article.desc}</p>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <div className="mt-20 glass-card p-10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col gap-2 max-w-lg">
                            <h2 className="text-slate-100 text-2xl font-bold">Stay updated on the Latent Space</h2>
                            <p className="text-slate-400">Monthly insights on AI research, system design, and the evolving landscape of data science.</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-3">
                            <input className="bg-[#050d0e] border border-[#204a4b] rounded-lg px-4 py-3 text-slate-100 focus:ring-2 focus:ring-primary focus:border-transparent outline-none flex-1 md:w-64" placeholder="email@example.com" type="email" />
                            <button className="bg-primary hover:bg-cyan-400 transition-colors text-[#050d0e] font-bold px-6 py-3 rounded-lg">Subscribe</button>
                        </div>
                    </div>
                </main>

                <footer className="border-t border-[#204a4b] py-12 px-6 lg:px-20 bg-[#050d0e]">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2 text-slate-500">
                            <span className="material-symbols-outlined text-sm">copyright</span>
                            <span className="text-sm">2024 DS Portfolio. Built for the future of AI.</span>
                        </div>
                        <div className="flex gap-6">
                            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">GitHub</a>
                            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">LinkedIn</a>
                            <a className="text-slate-500 hover:text-primary transition-colors text-sm" href="#">Twitter/X</a>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}
