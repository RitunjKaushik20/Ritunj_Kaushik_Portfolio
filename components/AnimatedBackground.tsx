"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    
    if (prefersReducedMotion) {

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "rgba(99, 102, 241, 0.05)");
      gradient.addColorStop(0.5, "rgba(139, 92, 246, 0.03)");
      gradient.addColorStop(1, "rgba(59, 130, 246, 0.05)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      return;
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 30 : 80;
    
    particlesRef.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
      opacity: Math.random() * 0.3 + 0.1,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    let lastTime = 0;
    const fps = 60;
    const interval = 1000 / fps;

    const animate = (currentTime: number) => {
      const deltaTime = currentTime - lastTime;

      if (deltaTime > interval) {
        lastTime = currentTime - (deltaTime % interval);

        const gradient = ctx.createRadialGradient(
          canvas.width / 2,
          canvas.height / 2,
          0,
          canvas.width / 2,
          canvas.height / 2,
          Math.max(canvas.width, canvas.height)
        );
        gradient.addColorStop(0, "rgba(15, 23, 42, 1)");
        gradient.addColorStop(0.5, "rgba(30, 41, 59, 1)");
        gradient.addColorStop(1, "rgba(15, 23, 42, 1)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const meshGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        meshGradient.addColorStop(0, "rgba(99, 102, 241, 0.08)");
        meshGradient.addColorStop(0.3, "rgba(139, 92, 246, 0.05)");
        meshGradient.addColorStop(0.6, "rgba(59, 130, 246, 0.06)");
        meshGradient.addColorStop(1, "rgba(16, 185, 129, 0.04)");
        ctx.fillStyle = meshGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const particles = particlesRef.current;
        
        particles.forEach((particle, i) => {

          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < 0) particle.x = canvas.width;
          if (particle.x > canvas.width) particle.x = 0;
          if (particle.y < 0) particle.y = canvas.height;
          if (particle.y > canvas.height) particle.y = 0;

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(148, 163, 184, ${particle.opacity})`;
          ctx.fill();

          particles.slice(i + 1).forEach((other) => {
            const dx = particle.x - other.x;
            const dy = particle.y - other.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(other.x, other.y);
              const opacity = (1 - distance / 150) * 0.15;
              ctx.strokeStyle = `rgba(100, 116, 139, ${opacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          });
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ background: "transparent" }}
    />
  );
}
