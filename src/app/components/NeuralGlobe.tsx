"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export const NeuralGlobe = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current) return;

        // --- SCENE SETUP ---
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 240;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        const globeGroup = new THREE.Group();
        // Move the globe to the right side of the screen
        const offset = window.innerWidth > 1024 ? 120 : 0;
        globeGroup.position.x = offset;
        scene.add(globeGroup);

        // --- OBJECTS ---
        const nodesCount = 140;
        const radius = 95;
        const nodes: THREE.Vector3[] = [];
        
        const nodeGeo = new THREE.SphereGeometry(0.7, 12, 12);
        const nodeMat = new THREE.MeshBasicMaterial({ color: 0x00e5c8, transparent: true, opacity: 0.8 });

        for (let i = 0; i < nodesCount; i++) {
            const phi = Math.acos(-1 + (2 * i) / nodesCount);
            const theta = Math.sqrt(nodesCount * Math.PI) * phi;
            const pos = new THREE.Vector3(
                radius * Math.cos(theta) * Math.sin(phi),
                radius * Math.sin(theta) * Math.sin(phi),
                radius * Math.cos(phi)
            );
            nodes.push(pos);
            const node = new THREE.Mesh(nodeGeo, nodeMat);
            node.position.copy(pos);
            globeGroup.add(node);

            // Pulse animation for nodes
            gsap.to(node.scale, {
                x: 1.6, y: 1.6, z: 1.6,
                duration: 1.5 + Math.random() * 2,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut"
            });
        }

        const edgeMat = new THREE.LineBasicMaterial({ color: 0x00e5c8, transparent: true, opacity: 0.15 });
        const connections: { start: THREE.Vector3, end: THREE.Vector3 }[] = [];
        for (let i = 0; i < 250; i++) {
            const startIdx = Math.floor(Math.random() * nodesCount);
            const endIdx = (startIdx + 1 + Math.floor(Math.random() * 30)) % nodesCount;
            const start = nodes[startIdx];
            const end = nodes[endIdx];
            connections.push({ start, end });
            const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
            globeGroup.add(new THREE.Line(geometry, edgeMat));
        }

        // --- STAR FIELD ---
        const starsCount = 400;
        const starGeo = new THREE.BufferGeometry();
        const starPos = new Float32Array(starsCount * 3);
        for (let i = 0; i < starsCount; i++) {
            starPos[i * 3] = (Math.random() - 0.5) * 800;
            starPos[i * 3 + 1] = (Math.random() - 0.5) * 800;
            starPos[i * 3 + 2] = (Math.random() - 0.5) * 800;
        }
        starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
        const starMat = new THREE.PointsMaterial({ color: 0x00e5c8, size: 0.8, transparent: true, opacity: 0.3 });
        const stars = new THREE.Points(starGeo, starMat);
        scene.add(stars);

        // --- SIGNALS ---
        const createSignal = () => {
            if (document.visibilityState !== 'visible') return;
            const conn = connections[Math.floor(Math.random() * connections.length)];
            const signalGeo = new THREE.SphereGeometry(0.8, 8, 8);
            const signalMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
            const signal = new THREE.Mesh(signalGeo, signalMat);
            
            // Add a point light to the signal for vibrancy
            const light = new THREE.PointLight(0x00e5c8, 50, 40);
            signal.add(light);
            globeGroup.add(signal);

            gsap.to(signal.position, {
                x: conn.end.x, y: conn.end.y, z: conn.end.z,
                duration: 0.8 + Math.random() * 0.5,
                ease: "power1.inOut",
                onStart: () => signal.position.copy(conn.start),
                onComplete: () => {
                    globeGroup.remove(signal);
                    signalGeo.dispose();
                    signalMat.dispose();
                    light.dispose();
                }
            });
        };
        const signalInterval = setInterval(createSignal, 180);

        // --- ENTRANCE & HEARTBEAT ---
        gsap.from(globeGroup.scale, { x: 0, y: 0, z: 0, duration: 1.5, ease: "power4.out" });
        gsap.to(globeGroup.scale, {
            x: 1.05, y: 1.05, z: 1.05,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // --- ANIMATION ---
        let mouseX = 0, mouseY = 0;
        const onMouseMove = (e: MouseEvent) => {
            mouseX = (e.clientX - window.innerWidth / 2) / 200;
            mouseY = (e.clientY - window.innerHeight / 2) / 200;
        };
        window.addEventListener('mousemove', onMouseMove);

        const onResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
            globeGroup.position.x = window.innerWidth > 1024 ? 140 : 0;
        };
        window.addEventListener('resize', onResize);

        const animate = () => {
            requestAnimationFrame(animate);
            globeGroup.rotation.y += 0.002;
            stars.rotation.y -= 0.0005;
            // Parallax effect
            globeGroup.rotation.x += (mouseY * 0.2 - globeGroup.rotation.x) * 0.05;
            globeGroup.rotation.y += (mouseX * 0.2 - globeGroup.rotation.y) * 0.05;
            renderer.render(scene, camera);
        };
        animate();

        // --- CLEANUP ---
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            clearInterval(signalInterval);
            if (mountRef.current) mountRef.current.removeChild(renderer.domElement);
            renderer.dispose();
            nodeGeo.dispose();
            nodeMat.dispose();
            edgeMat.dispose();
            starGeo.dispose();
            starMat.dispose();
        };
    }, []);

    return (
        <div 
            ref={mountRef} 
            className="fixed inset-0 -z-10 pointer-events-none"
            style={{ 
                backgroundColor: '#050d12',
                filter: 'brightness(1.2) contrast(1.1)'
            }}
        />
    );
};
