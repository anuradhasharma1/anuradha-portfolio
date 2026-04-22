"use client";
import { motion } from "framer-motion";
import { GitBranch, Mail, Code2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";


export default function Portfolio() {
  const projects = [
    {
      id: "01",
      name: "DevKeep",
      desc: "Code snippet manager with tagging, search & syntax highlighting.",
      tech: ["Next.js 15", "MongoDB", "NextAuth"],
    },
    {
      id: "02",
      name: "MoodMap",
      desc: "AI-driven mood travel app for India using Gemini API.",
      tech: ["Gemini API", "Next.js", "Tailwind"],
    },
    {
      id: "03",
      name: "Petalink",
      desc: "Interactive digital bouquet sender with animated bloom reveal.",
      tech: ["Framer Motion", "Howler.js", "Next.js"],
    },
    {
      id: "04",
      name: "PrepStack",
      desc: "AI-powered interview prep with dual practice modes.",
      tech: ["Next.js", "Gemini API", "TypeScript"],
    },
  ];

  const skills = [
    "React", "Next.js", "Node.js", "TypeScript", "Tailwind", "MongoDB",
    "Framer Motion", "Gemini API", "NextAuth", "Git", "Vercel", "Express",
  ];

  return (
    <div className="min-h-screen selection:bg-zinc-500 selection:text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-32">
        {/* HERO */}
        <section id="hero" className="flex flex-col md:flex-row items-center gap-10 pt-10">
          <div className="relative">
            <div className="w-48 h-48 border-4 border-black overflow-hidden bg-zinc-300">
              <div className="w-full h-full flex items-center justify-center text-6xl"><Image width={240} height={240} src="/avtar.webp" alt="" /></div>
            </div>
            <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 border-4 border-black rounded-full" />
          </div>
          <div className="text-center md:text-left space-y-4">
            <div className="inline-block px-3 py-1 bg-zinc-800 text-white text-[10px] font-heading mb-2">
              LEVEL 2026 · 
            </div>
            <h1 className="text-3xl md:text-5xl font-heading uppercase leading-tight">
              Anuradha Sharma
            </h1>
            <p className="text-xl font-body text-zinc-600 dark:text-zinc-400">
              Full-Stack Developer · India
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <button className="px-6 py-3 bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black font-heading text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform active:translate-y-1">
                CONNECT
              </button>
              <button className="px-6 py-3 border-4 border-black font-heading text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform active:translate-y-1">
                INVENTORY
              </button>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="experiences">
          <h2 className="text-2xl font-heading mb-10 flex items-center gap-4">
            <span className="bg-black text-white px-2">01</span> PROJECTS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((proj) => (
              <motion.div
                key={proj.id}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                className="group border-4 border-black p-6 bg-white dark:bg-zinc-900 hover:-translate-y-2 transition-transform"
              >
                <div className="aspect-video bg-zinc-200 dark:bg-zinc-800 border-2 border-black mb-4 flex items-center justify-center relative overflow-hidden">
                  <span className="font-heading text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                    PROJECT_{proj.id}
                  </span>
                  <div className="absolute top-2 left-2 px-2 py-1 bg-black text-white text-[8px] font-heading">
                    {proj.tech[0]}
                  </div>
                </div>
                <h3 className="text-lg font-heading mb-2">{proj.name}</h3>
                <p className="text-sm font-body mb-4 text-zinc-600 dark:text-zinc-400">{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map((t) => (
                    <span key={t} className="text-[10px] border-2 border-zinc-300 dark:border-zinc-700 px-2 py-0.5 font-body uppercase">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* INVENTORY */}
        <section id="inventory">
          <h2 className="text-2xl font-heading mb-10 flex items-center gap-4">
            <span className="bg-black text-white px-2">02</span> INVENTORY
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                whileHover={{ y: -5 }}
                className="aspect-square border-4 border-black bg-zinc-200 dark:bg-zinc-800 flex flex-col items-center justify-center p-2 text-center group hover:bg-zinc-300 dark:hover:bg-zinc-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors"
              >
                <Code2 className="mb-2 group-hover:scale-110 transition-transform" size={24} />
                <span className="text-[8px] font-heading uppercase leading-tight">{skill}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CHANGELOG */}
        <section id="changelog">
          <h2 className="text-2xl font-heading mb-10 flex items-center gap-4">
            <span className="bg-black text-white px-2">03</span> CHANGELOG
          </h2>
          <div className="border-l-4 border-black ml-4">
            {[
              { year: "2025", title: "DevKeep — Shipped", desc: "Built & deployed solo. Code snippet manager with NextAuth, MongoDB, highlight.js." },
              { year: "2025", title: "MoodMap — Full Stack", desc: "AI travel discovery app with Gemini API, Next.js 15, NextAuth, MongoDB Atlas." },
              { year: "2024", title: "Portfolio — Launched", desc: "Personal portfolio with canvas animation, typewriter hero, GitHub activity widget." },
              { year: "2024", title: "BCA Commencement", desc: "Started Bachelor of Computer Applications, Class of 2028." },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 pb-12"
              >
                <div className="absolute left-[-12px] top-0 w-5 h-5 bg-black dark:bg-white" />
                <span className="font-heading text-xs text-zinc-500 mb-2 block">{item.year}</span>
                <h3 className="font-heading text-sm mb-1">{item.title}</h3>
                <p className="font-body text-sm text-zinc-600 dark:text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pb-20">
          <div className="border-4 border-black p-8 bg-zinc-900 text-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-heading mb-6">QUEST: LET&apos;S TALK</h2>
            <p className="font-body mb-8 text-zinc-400">
              Open for internships . Let&apos;s build something.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://github.com/anuradhasharma1" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-black font-heading text-[10px] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-1 hover:translate-y-1 transition-all">
                <GitBranch size={16} /> GITHUB
              </a>
              <a href="https://www.linkedin.com/in/anuradha-sharmaa1/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white font-heading text-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 transition-all">
               LINKEDIN
              </a>
              <a href="mailto:anuradhasharma71440@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-[#f44336] text-white font-heading text-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 transition-all">
                <Mail size={16} /> EMAIL
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}