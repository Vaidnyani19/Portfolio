"use client";

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { NeuralGlobe } from './NeuralGlobe';
import { AnimatePresence, motion } from 'framer-motion';

export const GlobeWrapper = () => {
    const pathname = usePathname();
    const [isTransitioning, setIsTransitioning] = useState(false);

    useEffect(() => {
        // Trigger transition effect on route change
        setIsTransitioning(true);
        const timer = setTimeout(() => {
            setIsTransitioning(false);
        }, 1500); // Transition duration

        return () => clearTimeout(timer);
    }, [pathname]);

    return (
        <>
            <NeuralGlobe isTransitioning={isTransitioning} />
            
            {/* Transition overlay - optional, adds to the 'slide' feel */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={pathname}
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="fixed inset-0 bg-[#050d12] z-[9999] pointer-events-none"
                />
            </AnimatePresence>
        </>
    );
};
