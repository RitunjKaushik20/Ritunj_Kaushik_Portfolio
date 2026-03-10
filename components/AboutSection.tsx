"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, Code, Zap, Target } from "lucide-react";
import { resumeData } from "@/data/resume";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >

          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Passionate full-stack developer building scalable, production-ready applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              variants={item}
              className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 border border-primary/10 backdrop-blur-sm"
            >
              <h3 className="text-2xl font-bold mb-4 font-display">Background</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {resumeData.basics.summary}
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-muted-foreground">{resumeData.basics.location}</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <a
                    href={`mailto:${resumeData.basics.email}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resumeData.basics.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <a
                    href={`tel:${resumeData.basics.phone}`}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {resumeData.basics.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item} className="space-y-4">
              <div className="p-6 rounded-xl bg-gradient-to-br from-indigo-500/10 to-indigo-500/5 border border-indigo-500/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-indigo-500/20">
                    <Code className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Full Stack Expertise</h4>
                    <p className="text-sm text-muted-foreground">
                      Expert in MERN stack with TypeScript, Next.js, and modern cloud technologies
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-purple-500/20">
                    <Zap className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Performance Focused</h4>
                    <p className="text-sm text-muted-foreground">
                      40% faster load times through optimization, code splitting, and lazy loading
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-blue-500/10 to-blue-500/5 border border-blue-500/20">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-lg bg-blue-500/20">
                    <Target className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Quality Driven</h4>
                    <p className="text-sm text-muted-foreground">
                      30% bug reduction through comprehensive testing and code quality tools
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div variants={item} className="mt-8">
            <div className="p-6 rounded-xl bg-muted/50 border border-border">
              <h4 className="font-semibold mb-3">Open To</h4>
              <div className="flex flex-wrap gap-2">
                {["Full Stack Developer", "Software Developer", "Backend Developer", "Software Engineer (SDE-1)", "Internship opportunities"].map((role) => (
                  <span
                    key={role}
                    className="px-3 py-1.5 rounded-lg bg-primary/10 text-primary text-sm border border-primary/20"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
