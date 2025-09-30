import React from 'react';
import Reveal from './Reveal';
import { GithubIcon, LinkedinIcon, MailIcon } from './Icons';

const Footer = () => (
    <footer className="bg-slate-900 text-gray-400 py-8">
        <div className="container mx-auto px-6 text-center">
            <Reveal>
                <div className="flex justify-center space-x-6 mb-4">
                    <a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"><GithubIcon className="w-6 h-6"/></a>
                    <a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"><LinkedinIcon className="w-6 h-6"/></a>
                    <a href="#" className="hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"><MailIcon className="w-6 h-6"/></a>
                </div>
                <p>&copy; {new Date().getFullYear()} Khojiakbar Gofurov. All Rights Reserved.</p>
            </Reveal>
        </div>
    </footer>
);

export default Footer;
