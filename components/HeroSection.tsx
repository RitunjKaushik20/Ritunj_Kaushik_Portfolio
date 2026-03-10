"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { resumeData } from "@/data/resume";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <motion.div
        className="max-w-5xl mx-auto text-center"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
            👋 Welcome to my portfolio
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 font-display"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            {resumeData.basics.name}
          </span>
        </motion.h1>

        <motion.div variants={item} className="mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-medium">
            Full Stack Developer | MERN Stack Expert
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground/80 mt-2">
            React.js, Node.js, PostgreSQL | AWS Cloud
          </p>
        </motion.div>

        <motion.p
          variants={item}
          className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          {resumeData.basics.summary}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <motion.button
            onClick={() => scrollToSection("experience")}
            className="group px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View Experience</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </motion.button>

          <motion.a
            href="/resume.pdf"
            download="Ritunj_Kaushik_Resume.pdf"
            className="px-8 py-4 rounded-xl bg-background border-2 border-primary/20 text-foreground font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        <motion.div
          variants={item}
          className="flex items-center justify-center space-x-6"
        >
          <motion.a
            href={resumeData.basics.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Github className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={resumeData.basics.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
          <motion.a
            href={`mailto:${resumeData.basics.email}`}
            className="p-3 rounded-full bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <Mail className="w-6 h-6" />
          </motion.a>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
