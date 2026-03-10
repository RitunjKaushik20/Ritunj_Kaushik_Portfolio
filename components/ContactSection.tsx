"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Download, GraduationCap, Award } from "lucide-react";
import { resumeData } from "@/data/resume";

export function ContactSection() {
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to contribute from Day 1. Let's connect!
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={item}>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 font-display">Contact Information</h3>
                  <div className="space-y-4">
                    <a
                      href={`mailto:${resumeData.basics.email}`}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <span>{resumeData.basics.email}</span>
                    </a>
                    <a
                      href={`tel:${resumeData.basics.phone}`}
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span>{resumeData.basics.phone}</span>
                    </a>
                    <div className="flex items-center space-x-3 text-muted-foreground">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <span>{resumeData.basics.location}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-4 font-display">Connect With Me</h3>
                  <div className="flex flex-col space-y-3">
                    <motion.a
                      href={resumeData.basics.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all group"
                      whileHover={{ x: 4 }}
                    >
                      <Linkedin className="w-5 h-5" />
                      <span>LinkedIn Profile</span>
                    </motion.a>
                    <motion.a
                      href={resumeData.basics.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all group"
                      whileHover={{ x: 4 }}
                    >
                      <Github className="w-5 h-5" />
                      <span>GitHub Profile</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <GraduationCap className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold font-display">Education</h3>
                  </div>
                  <div className="space-y-4">
                    {resumeData.education.map((edu, index) => (
                      <div key={index} className="pb-4 border-b border-border last:border-0 last:pb-0">
                        <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        {edu.location && (
                          <p className="text-xs text-muted-foreground mt-1">{edu.location}</p>
                        )}
                        {edu.dates && (
                          <p className="text-xs text-muted-foreground mt-1">{edu.dates}</p>
                        )}
                        {edu.gpa && (
                          <p className="text-xs text-primary mt-1">GPA: {edu.gpa}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-background/50 border border-border backdrop-blur-sm">
                  <div className="flex items-center space-x-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="text-xl font-bold font-display">Certifications</h3>
                  </div>
                  <div className="space-y-2">
                    {resumeData.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-2 text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <motion.a
                  href="/resume.pdf"
                  download="Ritunj_Kaushik_Resume.pdf"
                  className="w-full p-4 rounded-xl bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download className="w-5 h-5" />
                  <span>Download Full Resume</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
