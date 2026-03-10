"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { resumeData } from "@/data/resume";

export function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2026 {resumeData.basics.name}. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Built with</span>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-4 h-4 text-red-500 fill-current" />
            </motion.div>
            <span>using Next.js, TypeScript & Tailwind CSS</span>
          </div>

          <div className="text-center md:text-right">
            <p className="text-xs text-muted-foreground">
              Quick learner | Team player | Ready to contribute
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
