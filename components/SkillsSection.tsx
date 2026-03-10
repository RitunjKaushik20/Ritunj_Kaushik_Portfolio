"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Server, Database, Cloud, Wrench, Layers } from "lucide-react";
import { resumeData } from "@/data/resume";

export function SkillsSection() {
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

  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: resumeData.skills.frontend,
      gradient: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/30",
      iconColor: "text-blue-400",
    },
    {
      title: "Backend",
      icon: Server,
      skills: resumeData.skills.backend,
      gradient: "from-purple-500/20 to-purple-500/5",
      border: "border-purple-500/30",
      iconColor: "text-purple-400",
    },
    {
      title: "Languages",
      icon: Layers,
      skills: resumeData.skills.languages,
      gradient: "from-green-500/20 to-green-500/5",
      border: "border-green-500/30",
      iconColor: "text-green-400",
    },
    {
      title: "Databases",
      icon: Database,
      skills: resumeData.skills.databases,
      gradient: "from-orange-500/20 to-orange-500/5",
      border: "border-orange-500/30",
      iconColor: "text-orange-400",
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: resumeData.skills.cloudDevOps,
      gradient: "from-indigo-500/20 to-indigo-500/5",
      border: "border-indigo-500/30",
      iconColor: "text-indigo-400",
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: resumeData.skills.tools,
      gradient: "from-pink-500/20 to-pink-500/5",
      border: "border-pink-500/30",
      iconColor: "text-pink-400",
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proficient in modern web technologies and cloud infrastructure
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={item}
                className="group"
              >
                <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${category.gradient} border ${category.border} backdrop-blur-sm`}>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 rounded-lg bg-background/50">
                      <category.icon className={`w-5 h-5 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold font-display">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-3 py-1.5 rounded-lg bg-background/70 text-sm text-foreground border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={item} className="mt-12">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 border border-primary/20 text-center">
              <h3 className="text-lg font-semibold mb-4">Core Strengths</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {resumeData.topSkillsHighlight.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-primary/20 text-primary font-semibold border-2 border-primary/30"
                  >
                    {skill}
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
