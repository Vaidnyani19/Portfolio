"use client";

import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), { 
    ssr: false,
    loading: () => <div className="fixed inset-0 bg-[#050d12] -z-10" />
});

export default function GlobalBackground() {
    return <ParticleBackground />;
}
