import React, { useState, useEffect, useRef } from 'react';
import { useTypingEffect } from '../hooks/useTypingEffect';
import About from './About';
import Contact from './Contact';
import Projects from './Projects';
import Blog from './Blog';

const Home = () => {
    const canvasRef = useRef(null);
    const typedText = useTypingEffect(["Frontend Developer", "Robotics Mentor"]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        const particleCount = Math.floor(canvas.width * canvas.height / 25000);
        const connectDistance = Math.min(canvas.width, canvas.height) / 6;

        class Particle {
            constructor(x, y, dirX, dirY, size, color) {
                Object.assign(this, { x, y, dirX, dirY, size, color });
            }
            draw() { ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fillStyle = this.color; ctx.fill(); }
            update() {
                if (this.x > canvas.width || this.x < 0) this.dirX = -this.dirX;
                if (this.y > canvas.height || this.y < 0) this.dirY = -this.dirY;
                this.x += this.dirX; this.y += this.dirY; this.draw();
            }
        }
        
        function init() {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                let size = Math.random() * 2 + 1;
                let x = Math.random() * (canvas.width - size * 2) + size;
                let y = Math.random() * (canvas.height - size * 2) + size;
                let dirX = (Math.random() * 0.4) - 0.2;
                let dirY = (Math.random() * 0.4) - 0.2;
                particles.push(new Particle(x, y, dirX, dirY, size, 'rgba(107, 224, 255, 0.5)'));
            }
        }

        function connect() {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let distance = Math.sqrt(Math.pow(particles[a].x - particles[b].x, 2) + Math.pow(particles[a].y - particles[b].y, 2));
                    if (distance < connectDistance) {
                        ctx.strokeStyle = `rgba(107, 224, 255, ${1 - distance / connectDistance})`;
                        ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(particles[a].x, particles[b].y); ctx.lineTo(particles[b].x, particles[a].y); ctx.stroke();
                    }
                }
            }
        }
        
        const animate = () => { animationFrameId = requestAnimationFrame(animate); ctx.clearRect(0, 0, canvas.width, canvas.height); particles.forEach(p => p.update()); connect(); };
        const handleResize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; init(); };
        
        window.addEventListener('resize', handleResize);
        init(); animate();
        return () => { window.cancelAnimationFrame(animationFrameId); window.removeEventListener('resize', handleResize); }
    }, []);

    const handleScrollToContact = () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden">
            <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full z-0"></canvas>
            <div className="container mx-auto px-6 text-center z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-4 animate-fade-in-down">Hello, I'm Khojiakbar Gofurov</h1>
                <p className="text-xl md:text-2xl text-cyan-400 font-semibold mb-8 animate-fade-in-up animation-delay-300 h-8">
                    A Passionate <span>{typedText}</span><span className="typing-cursor">|</span>
                </p>
                <p className="max-w-3xl mx-auto text-gray-300 mb-10 animate-fade-in-up animation-delay-500">
                    I build modern, responsive, and user-friendly web applications. Turning complex problems into beautiful, intuitive designs is my specialty.
                </p>
                <button onClick={handleScrollToContact} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/50 shadow-cyan-500/30 animate-fade-in-up animation-delay-700">Get In Touch</button>
            </div>
        </section>
    );
};

const HomePage = () => {
    return (
        <main>
            <Home />
            <About />
            <Projects />
            <Blog />
            <Contact />
        </main>
    );
}

export default HomePage;
