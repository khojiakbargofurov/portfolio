import React, { useState } from 'react';
import Reveal from '../components/Reveal';


function Contact() {
  const [status, setStatus] = useState({ message: '', type: '' });
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault(); setIsLoading(true);
        // User's EmailJS credentials have been added here
        const serviceID = 'service_59o6avo', templateID = 'template_4657gpk', publicKey = 'A1TTgZqeJUN9ndMBH';
        if (window.emailjs) {
            window.emailjs.sendForm(serviceID, templateID, e.target, publicKey)
                .then(() => { setStatus({ message: 'Thank you! Your message has been sent.', type: 'success' }); e.target.reset(); }, 
                      () => { setStatus({ message: 'Oops! Something went wrong. Please try again.', type: 'error' }); })
                .finally(() => { setIsLoading(false); setTimeout(() => setStatus({ message: '', type: '' }), 5000); });
        } else {
            setStatus({ message: 'Email service is currently unavailable.', type: 'error' });
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-slate-800 overflow-hidden">
            <div className="container mx-auto px-6">
                <Reveal><h2 className="text-4xl font-bold text-center text-white mb-2">Contact Me</h2><div className="w-24 h-1 bg-cyan-500 mx-auto mb-12"></div></Reveal>
                <Reveal delay={200}>
                    <div className="max-w-3xl mx-auto">
                        <p className="text-center text-gray-300 mb-8 text-lg">Have a project in mind or just want to say hi? Feel free to reach out. I'm always open to discussing new opportunities.</p>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input type="text" name="name" placeholder="Your Name" required className="w-full bg-slate-700 text-white border-2 border-slate-600 rounded-md p-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
                            <input type="email" name="email" placeholder="Your Email" required className="w-full bg-slate-700 text-white border-2 border-slate-600 rounded-md p-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"/>
                            <textarea name="message" rows="5" placeholder="Your Message" required className="w-full bg-slate-700 text-white border-2 border-slate-600 rounded-md p-3 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition"></textarea>
                            <div className="text-center"><button type="submit" disabled={isLoading} className="bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-400/50 shadow-cyan-500/30 disabled:bg-slate-500 disabled:cursor-not-allowed disabled:transform-none">{isLoading ? 'Sending...' : 'Send Message'}</button></div>
                            {status.message && <p className={`text-center mt-4 ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>{status.message}</p>}
                        </form>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export default Contact;
