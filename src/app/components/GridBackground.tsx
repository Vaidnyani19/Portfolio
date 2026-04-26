"use client";

import React, { useEffect, useRef } from "react";

export const GridBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width: number, height: number;
        let time = 0;
        let scrollY = 0;
        const mouse = { x: -1000, y: -1000 };

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e: MouseEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleScroll = () => {
            scrollY = window.pageYOffset;
        };

        window.addEventListener("resize", resize);
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("scroll", handleScroll);
        resize();

        const getWarp = (x: number, y: number) => {
            const waveX = Math.sin(time + y * 0.01 + scrollY * 0.005) * 10;
            const waveY = Math.cos(time + x * 0.01) * 8;
            const dx = x - mouse.x;
            const dy = y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            let mouseWarpX = 0;
            let mouseWarpY = 0;
            if (dist < 150) {
                const force = (150 - dist) / 150;
                mouseWarpX = (dx / dist) * force * 20 * Math.sin(time * 5);
                mouseWarpY = (dy / dist) * force * 20 * Math.cos(time * 5);
            }
            return { x: waveX + mouseWarpX, y: waveY + mouseWarpY };
        };

        const render = () => {
            time += 0.01;
            ctx.fillStyle = "#050d12";
            ctx.fillRect(0, 0, width, height);

            const horizon = height * 0.45;
            const gridSpacing = 65;
            const numVertLines = 40;
            const numHorizLines = 22;

            ctx.lineWidth = 1;

            // Perspective Lines (Vertical-ish)
            for (let i = -numVertLines / 2; i <= numVertLines / 2; i++) {
                ctx.beginPath();
                const opacity = i === 0 ? 0.45 : 0.18;
                ctx.strokeStyle = `rgba(0, 229, 200, ${opacity})`;
                const startX = width / 2 + i * gridSpacing * 5;
                const endX = width / 2 + i * 10;
                
                const ratioStart = (height - horizon) / (height - horizon);
                const xAtBottom = width / 2 + (startX - width / 2) * ratioStart;
                ctx.moveTo(xAtBottom, height);

                for (let y = height; y >= horizon; y -= 25) {
                    const r = (y - horizon) / (height - horizon);
                    const x = width / 2 + (startX - width / 2) * r;
                    const warp = getWarp(x, y);
                    ctx.lineTo(x + warp.x, y + warp.y);
                }
                ctx.stroke();
            }

            // Depth Lines (Horizontal)
            for (let i = 0; i < numHorizLines; i++) {
                const r = Math.pow(i / numHorizLines, 2.2);
                const y = horizon + r * (height - horizon) + (scrollY * 0.08 % 60);
                if (y > height + 50 || y < horizon) continue;

                ctx.beginPath();
                const opacity = 0.15 * (r + 0.1);
                ctx.strokeStyle = `rgba(0, 229, 200, ${opacity})`;

                for (let x = -100; x <= width + 100; x += 40) {
                    const warp = getWarp(x, y);
                    if (x === -100) ctx.moveTo(x + warp.x, y + warp.y);
                    else ctx.lineTo(x + warp.x, y + warp.y);
                }
                ctx.stroke();
            }

            // Horizon Glow
            const grad = ctx.createRadialGradient(width/2, horizon, 0, width/2, horizon, width/2);
            grad.addColorStop(0, "rgba(0, 229, 200, 0.2)");
            grad.addColorStop(1, "rgba(0, 229, 200, 0)");
            ctx.fillStyle = grad;
            ctx.fillRect(0, horizon - 80, width, 160);

            requestAnimationFrame(render);
        };

        render();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <canvas
                ref={canvasRef}
                className="fixed inset-0 -z-10 pointer-events-none"
                style={{ backgroundColor: "#050d12" }}
            />
            {/* Scanline Overlay */}
            <div className="fixed inset-0 -z-10 pointer-events-none opacity-[0.06]"
                 style={{ 
                     backgroundImage: "linear-gradient(rgba(0, 229, 200, 0.1) 50%, transparent 50%)",
                     backgroundSize: "100% 4px"
                 }}
            />
        </>
    );
};
