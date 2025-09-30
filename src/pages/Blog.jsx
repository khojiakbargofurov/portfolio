import React from 'react';
import Reveal from '../components/Reveal';

const blogPosts = [
  {
    id: 1,
    title: 'How I Built My Portfolio Website',
    date: 'September 20, 2025',
    excerpt: 'A behind-the-scenes look at the tools, technologies, and design decisions that went into building my personal portfolio site.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    title: 'Top 5 React Tips for 2025',
    date: 'September 10, 2025',
    excerpt: 'Level up your React skills with these essential tips and tricks for modern web development.',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    title: 'Why Tailwind CSS Changed My Workflow',
    date: 'August 28, 2025',
    excerpt: 'Discover how Tailwind CSS made styling faster, more consistent, and even fun in my projects.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
  },
];

function Blog() {
  return (
    <section id="blog" className="py-20 bg-slate-900 min-h-screen">
      <div className="container mx-auto px-6">
        <Reveal>
          <h2 className="text-4xl font-bold text-center text-white mb-2">Blog</h2>
          <div className="w-24 h-1 bg-cyan-500 mx-auto mb-12"></div>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-10">
          {blogPosts.map(post => (
            <Reveal key={post.id} delay={post.id * 100}>
              <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-white mb-2">{post.title}</h3>
                  <p className="text-cyan-400 text-sm mb-4">{post.date}</p>
                  <p className="text-gray-300 mb-4">{post.excerpt}</p>
                  <button className="text-cyan-500 hover:underline font-semibold">Read More</button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;