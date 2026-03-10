# Ritunj Kaushik - Portfolio Website

A futuristic, high-converting, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

### Design & UX
- **Cinematic Splash Screen**: Animated logo with loading progress (1.2-1.8s)
- **Futuristic Design**: Glassmorphism, gradient meshes, subtle glows, and premium card shadows
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Animated Background**: Canvas-based gradient mesh with drifting particles and connecting lines
- **Scroll-based Motion**: Smooth reveal animations, parallax effects, and progress indicator
- **Fully Responsive**: Optimized for mobile (360px), tablet (768px), and desktop (1280px+)

### Sections
1. **Hero**: Large typography, high-impact summary, dual CTAs
2. **About**: Background summary with contact info and highlights
3. **Experience**: Futuristic timeline with expandable story cards
4. **Projects**: Featured project cards with tech stacks and links
5. **Skills**: Categorized technical skills with icons
6. **Achievements**: Trophy-style cards with animated metrics
7. **Contact**: Contact info, social links, education, and certifications
8. **Footer**: Credits and quick info

### Technical Highlights
- **Next.js 14 App Router**: Modern React framework with server components
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling with custom theme
- **Framer Motion**: Smooth animations and transitions
- **Accessibility**: `prefers-reduced-motion` support
- **Performance**: Optimized animations, lazy loading, 60fps target

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run development server**
   ```bash
   npm run dev
   ```

3. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ritunj-portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles and theme variables
├── components/
│   ├── AnimatedBackground.tsx
│   ├── SplashScreen.tsx
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── AchievementsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── data/
│   └── resume.ts           # Resume data (structured JSON)
├── lib/
│   └── utils.ts            # Utility functions
├── public/                 # Static assets
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.mjs
└── next.config.mjs
```

## 🎨 Customization

### Update Resume Data
Edit `/data/resume.ts` to update:
- Personal information
- Experience
- Projects
- Skills
- Achievements
- Education
- Certifications

### Change Theme Colors
Edit `/app/globals.css` CSS variables:
```css
.dark {
  --primary: 239 84% 67%;
  --background: 222 47% 4%;
  /* ... other variables */
}
```

### Modify Fonts
Edit `/app/layout.tsx` to change fonts:
```typescript
import { YourFont } from "next/font/google";
```

## 📊 Resume Data Structure

The portfolio extracts data from a structured JSON object in `/data/resume.ts`:

```typescript
{
  basics: {
    name, title, summary, location, email, phone, links
  },
  experience: [
    { role, company, dates, duration, location, bullets[] }
  ],
  projects: [
    { title, links, bullets[], stack }
  ],
  achievements: [
    { metric, description, category }
  ],
  skills: {
    frontend[], backend[], languages[], databases[], cloudDevOps[], tools[]
  },
  education: [
    { degree, institution, location, dates, gpa }
  ],
  certifications: []
}
```

## 🎯 Performance Optimization

- **60fps animations**: RequestAnimationFrame with interval control
- **Mobile optimization**: Reduced particle count on mobile devices
- **Lazy loading**: Code splitting and dynamic imports
- **Accessibility**: Respects `prefers-reduced-motion`
- **Smooth scrolling**: Optimized anchor navigation

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📝 License

© 2026 Ritunj Kaushik. All rights reserved.

## 🤝 Contact

- **Email**: ritunj0120@gmail.com
- **LinkedIn**: [linkedin.com/in/ritunjkaushik](https://www.linkedin.com/in/ritunjkaushik)
- **GitHub**: [github.com/RitunjKaushik20](https://github.com/RitunjKaushik20)
- **Phone**: +91-8527027145

---

**Tech Stack**: Next.js 14 • TypeScript • Tailwind CSS • Framer Motion • Lucide Icons
