"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, TrendingUp, Zap, Award, Target } from "lucide-react";
import { resumeData } from "@/data/resume";

export function AchievementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Development":
        return Trophy;
      case "Quality":
        return Award;
      case "Performance":
        return Zap;
      case "Efficiency":
        return TrendingUp;
      case "Reliability":
        return Target;
      default:
        return Trophy;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Development":
        return "from-yellow-500/20 to-yellow-500/5 border-yellow-500/30";
      case "Quality":
        return "from-green-500/20 to-green-500/5 border-green-500/30";
      case "Performance":
        return "from-blue-500/20 to-blue-500/5 border-blue-500/30";
      case "Efficiency":
        return "from-purple-500/20 to-purple-500/5 border-purple-500/30";
      case "Reliability":
        return "from-indigo-500/20 to-indigo-500/5 border-indigo-500/30";
      default:
        return "from-primary/20 to-primary/5 border-primary/30";
    }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >

          <motion.div variants={item} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 font-display">
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Key Achievements
              </span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Measurable impact across development, quality, and performance
            </p>
          </motion.div>

          <motion.div variants={item} className="mb-12">
            <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-blue-500/10 border border-primary/20">
              <h3 className="text-lg font-semibold mb-4 text-center">Top Impact Highlights</h3>
              <div className="grid sm:grid-cols-3 gap-4">
                {resumeData.achievements.slice(0, 3).map((achievement, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent mb-2">
                      {achievement.metric}
                    </div>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumeData.achievements.map((achievement, index) => {
              const Icon = getCategoryIcon(achievement.category);
              const colorClass = getCategoryColor(achievement.category);

              return (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  className="group"
                >
                  <div className={`h-full p-6 rounded-2xl bg-gradient-to-br ${colorClass} border backdrop-blur-sm`}>

                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-xl bg-background/50">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>

                    <div className="mb-3">
                      <div className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                        {achievement.metric}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>

                    <div className="mt-4">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-background/50 text-primary border border-primary/20">
                        {achievement.category}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
