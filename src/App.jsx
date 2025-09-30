import React, { useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Blog from './pages/Blog';

export default function App() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        document.head.appendChild(script);
        return () => { document.head.removeChild(script); }
    }, []);

    return (
        <div className="bg-slate-900">
            <style>{`
                html { scroll-behavior: smooth; }
                .reveal { opacity: 0; transform: translateY(30px); transition: opacity 0.8s cubic-bezier(0.645, 0.045, 0.355, 1), transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1); }
                .reveal-visible { opacity: 1; transform: translateY(0); }
                @keyframes fade-in-down { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                .animate-fade-in-down { animation: fade-in-down 0.8s ease-out forwards; }
                .animate-fade-in-up { animation: fade-in-up 0.8s ease-out forwards; }
                .animation-delay-300 { animation-delay: 300ms; }
                .animation-delay-500 { animation-delay: 500ms; }
                .animation-delay-700 { animation-delay: 700ms; }
                .nav-link::after { content: ''; position: absolute; width: 100%; transform: scaleX(0); height: 2px; bottom: -4px; left: 0; background-color: #22d3ee; transform-origin: bottom right; transition: transform 0.25s ease-out; }
                .nav-link:hover::after { transform: scaleX(1); transform-origin: bottom left; }
                @keyframes blink { 50% { opacity: 0; } }
                .typing-cursor { animation: blink 1s step-end infinite; }
            `}</style>
            
            <Header />
            <HomePage />
            <Footer />
        </div>
    );
}
