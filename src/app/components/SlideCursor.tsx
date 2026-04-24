"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, useSpring, useMotionValue, AnimatePresence } from "framer-motion";

const navOrder = ["/", "/about", "/projects", "/experience", "/skills", /* "/blog", */ "/contact"];

const navLabels: Record<string, string> = {
    "/": "Home",
    "/about": "About",
    "/projects": "Projects",
    "/experience": "Experience",
    "/skills": "Tech Stack",
    "/blog": "Blog",
    "/contact": "Contact",
};

export default function SlideCursor() {
    const pathname = usePathname();
    const router = useRouter();

    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const springX = useSpring(cursorX, { stiffness: 200, damping: 28, mass: 0.5 });
    const springY = useSpring(cursorY, { stiffness: 200, damping: 28, mass: 0.5 });

    const [zone, setZone] = useState<"left" | "right" | "center">("center");
    const [isClicking, setIsClicking] = useState(false);
    const [navigating, setNavigating] = useState(false);
    const [navLabel, setNavLabel] = useState("");
    const [navDir, setNavDir] = useState<"left" | "right">("left");
    const lastNavAt = useRef(0);

    const currentIdx = navOrder.indexOf(pathname);
    const prevPage = currentIdx > 0 ? navOrder[currentIdx - 1] : null;
    const nextPage = currentIdx < navOrder.length - 1 ? navOrder[currentIdx + 1] : null;

    const navigate = useCallback((dir: "left" | "right") => {
        const now = Date.now();
        if (now - lastNavAt.current < 800) return;
        lastNavAt.current = now;

        const target = dir === "right" ? prevPage : nextPage;
        if (!target) return;

        setNavigating(true);
        router.push(target);
    }, [nextPage, prevPage, router]);

    // Reset overlay once navigation completes
    useEffect(() => {
        setNavigating(false);
    }, [pathname]);

    useEffect(() => {
        const EDGE = 120;

        const onMouseMove = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);

            if (e.clientX < EDGE) {
                setZone("left");
                if (prevPage) setNavLabel(navLabels[prevPage]);
                setNavDir("right");
            } else if (e.clientX > window.innerWidth - EDGE) {
                setZone("right");
                if (nextPage) setNavLabel(navLabels[nextPage]);
                setNavDir("left");
            } else {
                setZone("center");
                setNavLabel("");
            }
        };

        const onMouseDown = () => setIsClicking(true);
        const onMouseUp = () => setIsClicking(false);

        const onClick = (e: MouseEvent) => {
            if (e.clientX < EDGE && prevPage) navigate("right");
            else if (e.clientX > window.innerWidth - EDGE && nextPage) navigate("left");
        };

        // Keyboard arrow nav
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft" && prevPage) navigate("right");
            if (e.key === "ArrowRight" && nextPage) navigate("left");
        };

        window.addEventListener("mousemove", onMouseMove);
        window.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mouseup", onMouseUp);
        window.addEventListener("click", onClick);
        window.addEventListener("keydown", onKeyDown);

        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mouseup", onMouseUp);
            window.removeEventListener("click", onClick);
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [cursorX, cursorY, navigate, nextPage, prevPage]);

    const isEdge = zone !== "center";
    const hasTarget = zone === "left" ? !!prevPage : !!nextPage;

    return (
        <>
            {/* Hide system cursor site-wide when in edge zone */}
            <style>{`${isEdge && hasTarget ? "* { cursor: none !important; }" : ""}`}</style>

            {/* Custom cursor dot */}
            <motion.div
                className="fixed top-0 left-0 pointer-events-none z-[9999]"
                style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
            >
                {/* Core ring */}
                <motion.div
                    animate={{
                        width: isEdge && hasTarget ? 80 : isClicking ? 14 : 20,
                        height: isEdge && hasTarget ? 80 : isClicking ? 14 : 20,
                        backgroundColor: isEdge && hasTarget ? "rgba(0,246,255,0.08)" : "transparent",
                        borderColor: isEdge && hasTarget ? "rgba(0,246,255,0.9)" : "rgba(0,246,255,0.5)",
                        borderWidth: isEdge && hasTarget ? 2 : 1.5,
                        scale: isClicking ? 0.8 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    className="rounded-full border flex items-center justify-center"
                    style={{ boxShadow: isEdge && hasTarget ? "0 0 24px rgba(0,246,255,0.25)" : "none" }}
                >
                    <AnimatePresence>
                        {isEdge && hasTarget && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                className="flex flex-col items-center gap-0.5"
                            >
                                <span className="text-primary text-base leading-none">
                                    {zone === "left" ? "←" : "→"}
                                </span>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Inner dot */}
                {!(isEdge && hasTarget) && (
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"
                        animate={{ width: isClicking ? 6 : 4, height: isClicking ? 6 : 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    />
                )}
            </motion.div>

            {/* Edge label tooltip */}
            <AnimatePresence>
                {isEdge && hasTarget && navLabel && (
                    <motion.div
                        initial={{ opacity: 0, x: zone === "left" ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: zone === "left" ? -20 : 20 }}
                        transition={{ duration: 0.2 }}
                        className={`fixed top-1/2 -translate-y-1/2 z-[9998] pointer-events-none flex flex-col gap-2 ${zone === "left" ? "left-4" : "right-4"}`}
                    >
                        <div className="flex items-center gap-2 bg-[#0f2223]/90 backdrop-blur border border-primary/30 px-4 py-3 rounded-xl shadow-2xl">
                            <span className="text-primary text-lg">{zone === "left" ? "←" : "→"}</span>
                            <div>
                                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-slate-500">
                                    {zone === "left" ? "Prev" : "Next"}
                                </p>
                                <p className="text-sm font-bold text-slate-100 leading-tight">{navLabel}</p>
                            </div>
                        </div>
                        <p className="text-[9px] text-slate-600 font-mono text-center">click to navigate</p>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {navigating && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0 } }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-primary/10 backdrop-blur-sm z-[9990] pointer-events-none"
                    />
                )}
            </AnimatePresence>

            {/* Side edge glow hints */}
            <AnimatePresence>
                {prevPage && zone === "left" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed left-0 top-0 h-full w-16 pointer-events-none z-[9980]"
                        style={{ background: "linear-gradient(to right, rgba(0,246,255,0.06), transparent)" }}
                    />
                )}
                {nextPage && zone === "right" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed right-0 top-0 h-full w-16 pointer-events-none z-[9980]"
                        style={{ background: "linear-gradient(to left, rgba(0,246,255,0.06), transparent)" }}
                    />
                )}
            </AnimatePresence>
        </>
    );
}
