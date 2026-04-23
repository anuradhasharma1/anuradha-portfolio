# anuradha.dev — Personal Portfolio

> **Still learning. Still building. Still moving forward.**

A Roblox-themed developer portfolio built with Next.js 15 — pixel fonts, blocky shadows, dark/light mode, and a cmd+K search palette.

🔗 **Live:** [anuradha-portfolio-rho.vercel.app](https://anuradha-portfolio-rho.vercel.app)

---

## Tech Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion |
| Fonts | Press Start 2P + IBM Plex Mono |
| Theme | next-themes (dark/light) |
| Deployment | Vercel |

---

## Features

- 🎮 **Roblox-inspired UI** — pixel shadows, blocky borders, Press Start 2P font
- 🌗 **Dark / Light mode** — smooth toggle, no flash
- ⌘K **Search Palette** — keyboard-driven section navigation
- 📦 **Projects grid** — with live links, GitHub links, and upcoming badge
- 🧰 **Inventory section** — skills displayed as Roblox inventory slots
- 📜 **Changelog** — vertical timeline of achievements
- 📱 **Responsive** — works on mobile and desktop

---

## Sections

- **Hero** — avatar, name, connect + inventory buttons
- **About** — who I am and what drives me
- **Projects** — DevKeep, MoodMap, Petalink, PrepStack (upcoming)
- **Inventory** — tech stack as skill slots
- **Changelog** — timeline of shipped projects
- **Contact** — GitHub, LinkedIn, Email

---

## Run Locally

```bash
git clone https://github.com/anuradhasharma1/anuradha-portfolio
cd anuradha-portfolio
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

```
app/
  layout.tsx          # fonts, ThemeProvider
  page.tsx            # main portfolio page
  globals.css         # tailwind + custom styles
components/
  Navbar.tsx          # sticky header, theme toggle, github link
  Footer.tsx          # copyright
  Provider.tsx        #  theme 
  SearchPalette.tsx   # cmd+K search
public/
  avtar.webp          # roblox-style avatar
  devkeep.png         # project screenshots
  moodmap.png
  petalink.png
```

---

## About Me

Hi, I'm **Anuradha Sharma** — a BCA student from India, building toward full-stack developer internships .

I build real-world projects with Next.js, MongoDB, Tailwind, and Gemini API — and share everything in public.

📫 [anuradhasharma71440@gmail.com](mailto:anuradhasharma71440@gmail.com)  
🐙 [github.com/anuradhasharma1](https://github.com/anuradhasharma1)  
💼 [linkedin.com/in/anuradha-sharmaa1](https://www.linkedin.com/in/anuradha-sharmaa1/)

---

<p align="center">Built with Next.js 15 · Deployed on Vercel</p>