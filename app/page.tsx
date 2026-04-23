"use client";
import { motion } from "framer-motion";
import { GitBranch, Mail, Code2, ExternalLink } from "lucide-react";

import Footer from "@/components/Footer";
import Image from "next/image";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Navbar"), { ssr: false });

export default function Portfolio() {
  const projects = [
    {
      id: "01",
      name: "DevKeep",
      desc: "Code snippet manager with tagging, search & syntax highlighting.",
      tech: ["Next.js 15", "MongoDB", "NextAuth"],
      github: "https://github.com/anuradhasharma1/devkeep",
      live: "https://devkeep-two.vercel.app/",
      status: "live" as const,
      image: "/devkeep.png",
    },
    {
      id: "02",
      name: "MoodMap",
      desc: "AI-driven mood travel app for India using Gemini API.",
      tech: ["Gemini API", "Next.js", "Tailwind"],
      github: "https://github.com/anuradhasharma1/mood-map",
      live: "https://mood-map-beige.vercel.app/",
      status: "live" as const,
      image: "/moodmap.png",
    },
    {
      id: "03",
      name: "Portfolio",
      desc: "A portfolio made with nextjs",
      tech: ["Tailwind", "Next.js"],
      github: "https://github.com/anuradhasharma1/my-portfolio",
      live: "https://my-portfolio-five-smoky-45.vercel.app/",
      status: "live" as const,
      image: "/portfolio.png",
    },
    {
      id: "04",
      name: "PrepStack",
      desc: "AI-powered interview prep with dual practice modes.",
      tech: ["Next.js", "Gemini API", "TypeScript"],
      github: null,
      live: null,
      status: "upcoming" as const,
      image: null,
    },
  ];

  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "JavaScript",
    "Tailwind",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Framer Motion",
    "Gemini API",
    "NextAuth",
    "Git",
    "Vercel",
    "Express",
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen selection:bg-zinc-500 selection:text-white">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 py-12 space-y-32">
        {/* HERO */}
        <section
          id="hero"
          className="flex flex-col md:flex-row items-center gap-10 pt-10"
        >
          <div className="relative shrink-0">
            <div className="w-48 h-48 border-4 border-black overflow-hidden bg-zinc-300">
              <div className="w-full h-full flex items-center justify-center text-6xl">
                <Image loading="eager" width={240} height={240} src="/avtar.webp" alt="" />
              </div>
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
              <button
                onClick={() => scrollTo("contact")}
                className="px-6 py-3 border-4 border-black font-heading text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform active:translate-y-1"
              >
                CONNECT
              </button>
              <button
                onClick={() => scrollTo("inventory")}
                className="px-6 py-3 border-4 border-black font-heading text-xs shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:scale-105 transition-transform active:translate-y-1"
              >
                INVENTORY
              </button>
            </div>
          </div>
        </section>

        {/* BIO / ABOUT */}
        <section id="about">
          <h2 className="text-2xl font-heading mb-10 flex items-center gap-4">
            <span className="bg-black text-white px-2">00</span> ABOUT
          </h2>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            className="border-4 border-black p-8 bg-white dark:bg-zinc-900 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-5"
          >
            <ul className="space-y-4 font-body text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed list-none">
              <li className="flex gap-3">
                <span className="text-black dark:text-white font-heading text-[10px] mt-1 shrink-0">
                  ▸
                </span>
                <span>
                  I&apos;m currently building my foundation in full stack
                  development, learning by creating and figuring things out
                  along the way.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white font-heading text-[10px] mt-1 shrink-0">
                  ▸
                </span>
                <span>
                  I&apos;m especially interested in AI and LLMs, and I&apos;m
                  working towards building things that combine both — real-world
                  products powered by intelligent systems.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white font-heading text-[10px] mt-1 shrink-0">
                  ▸
                </span>
                <span>
                  What drives me is curiosity — understanding how things work,
                  how people interact with technology, and how ideas can turn
                  into something meaningful.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-black dark:text-white font-heading text-[10px] mt-1 shrink-0">
                  ▸
                </span>
                <span>
                  For me, growth isn&apos;t just about skills or achievements.
                  It&apos;s about becoming more aware, more disciplined, and
                  more aligned with what I&apos;m doing.
                </span>
              </li>
            </ul>
            <div className="pt-2 border-t-2 border-zinc-200 dark:border-zinc-700">
              <p className="font-heading text-[10px] text-zinc-500 dark:text-zinc-400 tracking-widest">
                STILL LEARNING. STILL BUILDING. STILL MOVING FORWARD.
              </p>
            </div>
          </motion.div>
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
                className={`group border-4 border-black p-6 bg-white dark:bg-zinc-900 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] ${
                  proj.status === "upcoming"
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:-translate-y-2"
                }`}
              >
                {/* Thumbnail */}
                <div className="aspect-video border-2 border-black mb-4 relative overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  {proj.image ? (
                    <Image
                      src={proj.image}
                      alt={proj.name}
                      sizes="(max-width: 768px) 100vw, 50vw"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="font-heading text-[10px] text-zinc-400 dark:text-zinc-600">
                        PROJECT_{proj.id}
                      </span>
                    </div>
                  )}
                  {/* tech badge */}
                  <div className="absolute top-2 left-2 px-2 py-1 bg-black text-white text-[8px] font-heading z-10">
                    {proj.tech[0]}
                  </div>
                  {/* upcoming badge */}
                  {proj.status === "upcoming" && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-yellow-400 text-black text-[8px] font-heading animate-pulse z-10">
                      UPCOMING
                    </div>
                  )}
                </div>

                {/* Info */}
                <h3 className="text-lg font-heading mb-2 text-zinc-900 dark:text-zinc-100">
                  {proj.name}
                </h3>
                <p className="text-sm font-body mb-4 text-zinc-600 dark:text-zinc-400">
                  {proj.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] border-2 border-zinc-300 dark:border-zinc-700 px-2 py-0.5 font-body uppercase text-zinc-700 dark:text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2 border-t-2 border-zinc-200 dark:border-zinc-700">
                  {proj.status === "upcoming" ? (
                    <span className="text-[10px] font-heading text-zinc-400 dark:text-zinc-500 italic">
                      — IN PROGRESS, COMING SOON —
                    </span>
                  ) : (
                    <>
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[10px] font-heading text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                          <GitBranch size={13} /> CODE
                        </a>
                      )}
                      {proj.live && (
                        <a
                          href={proj.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-[10px] font-heading text-zinc-700 dark:text-zinc-300 hover:text-black dark:hover:text-white transition-colors"
                        >
                          <ExternalLink size={13} /> LIVE
                        </a>
                      )}
                    </>
                  )}
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
                className="aspect-square border-4 border-black bg-zinc-200 dark:bg-zinc-800 flex flex-col items-center justify-center p-2 text-center group hover:bg-zinc-300 dark:hover:bg-zinc-700 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-colors cursor-default"
              >
                <Code2
                  className="mb-2 group-hover:scale-110 transition-transform text-zinc-900 dark:text-zinc-100"
                  size={24}
                />
                <span className="text-[8px] font-heading uppercase leading-tight text-zinc-900 dark:text-zinc-100">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CHANGELOG */}
        <section id="changelog">
          <h2 className="text-2xl font-heading mb-10 flex items-center gap-4">
            <span className="bg-black text-white px-2">03</span> CHANGELOG
          </h2>
          <div className="border-l-4 border-black dark:border-white  ml-4">
            {[
              {
                year: "2026",
                title: "DevKeep — Shipped",
                desc: "Built & deployed solo. Code snippet manager with NextAuth, MongoDB, highlight.js.",
              },
              {
                year: "2026",
                title: "MoodMap — Full Stack",
                desc: "AI travel discovery app with Gemini API, Next.js 15, NextAuth, MongoDB Atlas.",
              },
              {
                year: "2026",
                title: "Portfolio — Launched",
                desc: "Personal portfolio with canvas animation, typewriter hero, GitHub activity widget.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative pl-8 pb-12"
              >
                <div className="absolute -left-3 top-0 w-5 h-5 bg-black dark:bg-white border-2 border-black dark:border-white" />
                <span className="font-heading text-xs text-zinc-500 dark:text-zinc-400 mb-2 block">
                  {item.year}
                </span>
                <h3 className="font-heading text-sm mb-1  text-zinc-900 dark:text-zinc-500">
                  {item.title}
                </h3>
                <p className="font-body text-sm text-zinc-600 dark:text-zinc-400">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="pb-20">
          <div className="border-4 border-black p-8 bg-zinc-900 text-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-heading mb-6">
              QUEST: LET&apos;S TALK
            </h2>
            <p className="font-body mb-8 text-zinc-400">
              Open for internships. Let&apos;s build something.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/anuradhasharma1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-black font-heading text-[10px] shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                <GitBranch size={16} /> GITHUB
              </a>
              <a
                href="https://www.linkedin.com/in/anuradha-sharmaa1/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#0077b5] text-white font-heading text-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:anuradhasharma71440@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-[#f44336] text-white font-heading text-[10px] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:translate-y-1 transition-all"
              >
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
