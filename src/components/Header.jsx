import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from './Icons';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navLinks = [{ id: "home", title: "Home" }, { id: "about", title: "About" }, { id: "projects", title: "Projects" },{ id: "blog", title: "Blog" }, { id: "contact", title: "Contact" }];
    
    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <div className="container max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#home" onClick={() => handleLinkClick('home')} className="text-2xl font-bold text-white tracking-wider"><span className="text-cyan-400">K</span>hojiakbar <span className="text-cyan-400">G</span>ofurov</a>
                <nav className="hidden md:flex space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative nav-link">{link.title}</a>
                    ))}
                </nav>
                <div className="md:hidden">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">{isMenuOpen ? <XIcon className="h-6 w-6"/> : <MenuIcon className="h-6 w-6"/>}</button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-slate-900/95 backdrop-blur-sm">
                    <nav className="flex flex-col items-center space-y-4 py-6">
                        {navLinks.map((link) => (<a key={link.id} href={`#${link.id}`} onClick={(e) => { e.preventDefault(); handleLinkClick(link.id); }} className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-lg">{link.title}</a>))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
