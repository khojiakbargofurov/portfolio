import React from 'react'
import Reveal from '../components/Reveal';
import myImg from '../assets/myimg.jpg';


function About() {
  const skills = ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 & CSS3", "Node.js", "Firebase", "Git & GitHub", "Figma", "REST APIs", "TypeScript"];
    return (
        <section id="about" className="py-20 bg-slate-800 overflow-hidden">
            <div className="container mx-auto px-6">
                 <Reveal><h2 className="text-4xl font-bold text-center text-white mb-2">About Me</h2><div className="w-24 h-1 bg-cyan-500 mx-auto mb-12"></div></Reveal>
                <div className="grid md:grid-cols-5 gap-10 items-center">
                    <div className="md:col-span-2"><Reveal>
                        <img src={myImg} alt="Khojiakbar Gofurov" className="rounded-full shadow-2xl mx-auto w-64 h-64 md:w-full md:h-auto object-cover border-4 border-cyan-500/50"/></Reveal></div>
                    <div className="md:col-span-3 text-gray-300 text-lg">
                        <Reveal delay={200}><p className="mb-4">Hi there! I'm Khojiakbar Gofurov, a frontend developer with a keen eye for design and a passion for creating seamless digital experiences. With over 1 years in the field, I specialize in bringing ideas to life using modern web technologies.</p></Reveal>
                        <Reveal delay={300}><p className="mb-6">My journey in web development started with a simple "Hello World" and has since grown into a full-fledged passion. I enjoy the process of solving problems, learning new technologies, and collaborating with teams to build amazing products.</p></Reveal>
                        <Reveal delay={400}><h3 className="text-2xl font-semibold text-white mb-4">My Skills</h3></Reveal>
                        <div className="flex flex-wrap gap-3">{skills.map((skill, index) => (<Reveal key={skill} delay={500 + index * 50}><span className="bg-slate-700 text-cyan-300 py-2 px-4 rounded-md text-sm font-medium transition-transform duration-300 hover:scale-110 hover:bg-slate-600">{skill}</span></Reveal>))}</div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About