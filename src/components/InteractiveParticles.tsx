import React, { useEffect, useRef, useState } from "react";

interface InteractiveParticlesProps {
  color?: string; // e.g. "245, 158, 11" (amber-500 rgb values)
  quantity?: number;
  className?: string;
  staticDrift?: boolean;
  key?: string;
}

export default function InteractiveParticles({
  color = "245, 158, 11", // Amber-500 default
  quantity = 70,
  className = "",
  staticDrift = false,
}: InteractiveParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mouseRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      baseAlpha: number;
      spark?: boolean;
      life?: number;
      maxLife?: number;
    }> = [];

    // Resize handler with High-DPI support
    const handleResize = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
      
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;

      initParticles(rect.width, rect.height);
    };

    // Initialize particles
    const initParticles = (width: number, height: number) => {
      particles = [];
      const count = Math.min(quantity, Math.floor((width * height) / 15000));
      
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 2 + 1,
          alpha: Math.random() * 0.5 + 0.2,
          baseAlpha: Math.random() * 0.5 + 0.2,
        });
      }
    };

    // Trigger initial resize & setup
    handleResize();

    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    // Mouse events
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      
      mouseRef.current = { x: clientX, y: clientY };

      // Generate spark particles on hover movement (simulates electrical sparks)
      if (Math.random() < 0.4 && clientX >= 0 && clientY >= 0 && clientX <= rect.width && clientY <= rect.height) {
        particles.push({
          x: clientX,
          y: clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          size: Math.random() * 3 + 1,
          alpha: 1.0,
          baseAlpha: 1.0,
          spark: true,
          life: 0,
          maxLife: Math.random() * 30 + 20,
        });
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: null, y: null };
      setIsHovered(false);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mouseenter", handleMouseEnter);
    }

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Mouse position
      const mouse = mouseRef.current;

      // Draw connections & update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Particle physics
        if (p.spark && p.life !== undefined && p.maxLife !== undefined) {
          // Spark particle behavior (fade out and decay)
          p.x += p.vx;
          p.y += p.vy;
          p.vy += 0.02; // gravity drop for spark effect
          p.life++;
          p.alpha = 1 - p.life / p.maxLife;

          if (p.life >= p.maxLife) {
            particles.splice(i, 1);
            i--;
            continue;
          }
        } else {
          // Regular particle drift
          p.x += p.vx;
          p.y += p.vy;

          // Pull slightly towards mouse if hovered (magnetic circuit effect)
          if (mouse.x !== null && mouse.y !== null) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);
            
            if (dist < 180) {
              const force = (180 - dist) / 180;
              p.x += (dx / dist) * force * 0.4;
              p.y += (dy / dist) * force * 0.4;
            }
          }

          // Boundary bounce / wrap
          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${p.alpha})`;
        ctx.fill();

        // Draw electrical filament lines between nearby nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          if (p2.spark) continue;

          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.hypot(dx, dy);

          // Render link if within distance threshold
          if (dist < 90) {
            const linkAlpha = (1 - dist / 90) * 0.15 * Math.min(p.alpha, p2.alpha);
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(${color}, ${linkAlpha})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }

        // Draw connection to cursor
        if (mouse.x !== null && mouse.y !== null && !p.spark) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.hypot(dx, dy);

          if (dist < 140) {
            const lineAlpha = (1 - dist / 140) * 0.35;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(${color}, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mouseenter", handleMouseEnter);
      }
    };
  }, [color, quantity]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full overflow-hidden ${className}`}
      style={{ pointerEvents: "auto" }}
    >
      <canvas
        ref={canvasRef}
        className="block pointer-events-none"
      />
      {isHovered && (
        <div className="absolute top-4 right-4 pointer-events-none bg-slate-900/80 border border-amber-500/20 px-2 py-1 rounded text-[10px] font-mono tracking-wider text-amber-400 backdrop-blur-sm shadow animate-fade-in">
          ★ SIGNAL ACTIVE: HOVERING
        </div>
      )}
    </div>
  );
}
