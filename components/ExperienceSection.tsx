"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp, MapPin, Calendar, Briefcase } from "lucide-react";
import { resumeData } from "@/data/resume";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Experience
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building production-grade applications and scalable systems
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-blue-500 hidden md:block" />

            <div className="space-y-8">
              {resumeData.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative"
                >
                  <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-background transform -translate-x-1.5 hidden md:block z-10" />

                  <div className="md:ml-24">
                    <motion.div
                      className="p-6 sm:p-8 rounded-2xl border border-border bg-background/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300 cursor-pointer"
                      onClick={() => toggleExpand(index)}
                      whileHover={{ scale: 1.01 }}
                      layout
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <Briefcase className="w-5 h-5 text-primary" />
                            <h3 className="text-xl sm:text-2xl font-bold font-display">
                              {exp.role}
                            </h3>
                          </div>
                          <p className="text-lg text-muted-foreground font-semibold mb-2">
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <span className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.dates}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </span>
                          </div>
                        </div>
                        <motion.button
                          className="p-2 rounded-lg hover:bg-muted transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          {expandedIndex === index ? (
                            <ChevronUp className="w-5 h-5 text-primary" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-muted-foreground" />
                          )}
                        </motion.button>
                      </div>

                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedIndex === index ? "auto" : 0,
                          opacity: expandedIndex === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-border">
                          <ul className="space-y-3">
                            {exp.bullets.map((bullet, bulletIndex) => (
                              <motion.li
                                key={bulletIndex}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{
                                  opacity: expandedIndex === index ? 1 : 0,
                                  x: expandedIndex === index ? 0 : -10,
                                }}
                                transition={{ delay: bulletIndex * 0.1 }}
                                className="flex items-start space-x-3"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                                <span className="text-muted-foreground leading-relaxed">
                                  {bullet}
                                </span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
