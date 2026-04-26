"use client";

import React, { useEffect, useRef } from "react";

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let raf: number;
        let particles: any[] = [];
        let burstParticles: any[] = [];
        const mouse = { x: -1000, y: -1000 };
        
        const config = {
            particleCount: 130,
            connectionDist: 140,
            mouseRadius: 150,
            repelStrength: 0.5,
            accent: "0, 229, 200", // Teal RGB
            bg: "#050d12"
        };

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < config.particleCount; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    vx: (Math.random() - 0.5) * 0.8,
                    vy: (Math.random() - 0.5) * 0.8,
                    size: Math.random() * 1.5 + 1
                });
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        const onMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const onClick = (e: MouseEvent) => {
            for (let i = 0; i < 12; i++) {
                burstParticles.push({
                    x: e.clientX,
                    y: e.clientY,
                    vx: (Math.random() - 0.5) * 6,
                    vy: (Math.random() - 0.5) * 6,
                    size: Math.random() * 2 + 1,
                    life: 1.0
                });
            }
        };

        const render = () => {
            // Draw background
            ctx.fillStyle = config.bg;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Particles update & draw
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(${config.accent}, 0.8)`;
            
            // Standard particles
            particles.forEach(p => {
                // Mouse repel logic
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < config.mouseRadius) {
                    const force = (config.mouseRadius - dist) / config.mouseRadius;
                    p.vx += (dx / dist) * force * config.repelStrength;
                    p.vy += (dy / dist) * force * config.repelStrength;
                }

                p.vx *= 0.97;
                p.vy *= 0.97;
                
                // Drift speed
                const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
                if (speed < 0.4) {
                    p.vx += (Math.random() - 0.5) * 0.1;
                    p.vy += (Math.random() - 0.5) * 0.1;
                }

                p.x += p.vx;
                p.y += p.vy;

                // Wrap
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;

                ctx.fillStyle = `rgba(${config.accent}, 0.9)`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            });

            // Burst particles
            for (let i = burstParticles.length - 1; i >= 0; i--) {
                const p = burstParticles[i];
                p.x += p.vx;
                p.y += p.vy;
                p.life -= 0.02;
                if (p.life <= 0) {
                    burstParticles.splice(i, 1);
                    continue;
                }
                ctx.fillStyle = `rgba(${config.accent}, ${p.life})`;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            ctx.shadowBlur = 0;

            // Draw lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < config.connectionDist) {
                        const opacity = (1 - dist / config.connectionDist) * 0.6;
                        ctx.strokeStyle = `rgba(${config.accent}, ${opacity})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }

            raf = requestAnimationFrame(render);
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("click", onClick);
        
        resize();
        render();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("click", onClick);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{ backgroundColor: "#050d12" }}
        />
    );
};
