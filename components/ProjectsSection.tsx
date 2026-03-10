"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { resumeData } from "@/data/resume";

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world applications built with modern technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.projects.map((project, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group"
              >
                <div className="h-full p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold mb-3 font-display group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-sm text-primary hover:text-primary/80 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </motion.a>
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </motion.a>
                    </div>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-2 mb-4">
                      {project.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                        <li
                          key={bulletIndex}
                          className="flex items-start space-x-2 text-sm text-muted-foreground"
                        >
                          <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                          <span className="leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2 font-semibold">Tech Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.split(", ").slice(0, 6).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 rounded text-xs bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
