import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Download } from "lucide-react";

const stack = ["React", "Node.js", "Python", "FastAPI", "PostgreSQL", "Tailwind", "TypeScript", "ML/NLP", "MongoDB", "Docker"];

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-noise">
      <div className="absolute inset-0 bg-mesh pointer-events-none" />
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />



      <div className="relative mx-auto max-w-7xl px-6">
        {/* meta line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3"
        >
          <span className="size-1.5 rounded-full bg-primary animate-pulse" />
          Available for opportunities — Andhra Pradesh, IN
        </motion.div>

        {/* Massive name — constrained on lg so image has room */}
        <div className="mt-8 grid grid-cols-12 gap-4 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-12 lg:col-span-8 font-display font-bold leading-[0.85] tracking-tight text-[18vw] md:text-[12vw] lg:text-[8.5vw]"
          >
            V S S M
            <br />
            <span className="text-stroke">Sudheer</span>
            <span className="text-primary">.</span>
          </motion.h1>
        </div>

        {/* sub-grid — keep text on the left half so it doesn't collide with the image */}
        <div className="mt-12 grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="col-span-12 lg:col-span-7 font-mono text-xs uppercase tracking-widest text-muted-foreground"
          >
            <div className="flex gap-3">
              <span className="text-primary">{">"}</span>
              <span className="blink">Full Stack Developer · AI/ML Enthusiast</span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="col-span-12 lg:col-span-7 text-xl md:text-2xl text-foreground/80 font-light leading-snug"
          >
            Building <em className="text-primary not-italic font-display font-medium">scalable web applications</em> and intelligent systems — from
            React UIs to ML pipelines.
          </motion.p>
        </div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
          className="mt-14 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-3 rounded-full bg-foreground text-background px-7 py-4 font-mono text-xs uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View Projects
            <span className="size-7 rounded-full bg-background/10 grid place-items-center group-hover:rotate-45 transition-transform">
              →
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-4 font-mono text-xs uppercase tracking-widest hover:border-primary hover:text-primary transition-all"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors magnetic-link"
          >
            <Download className="size-3.5" /> Resume.pdf
          </a>

          <div className="ml-auto flex items-center gap-2">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: Mail, href: "#contact", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="size-11 grid place-items-center rounded-full border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all hover:-translate-y-1"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="mt-24 border-y border-border py-6 overflow-hidden bg-surface/50">
        <div className="marquee flex gap-12 whitespace-nowrap font-display text-2xl md:text-4xl font-medium">
          {[...stack, ...stack].map((s, i) => (
            <span key={i} className="flex items-center gap-12">
              <span className={i % 3 === 0 ? "text-primary" : i % 3 === 1 ? "text-stroke" : ""}>{s}</span>
              <span className="text-muted-foreground">✦</span>
            </span>
          ))}
        </div>
      </div>

      <a href="#about" className="mt-12 mx-auto max-w-7xl px-6 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors w-fit">
        <ArrowDown className="size-3.5 animate-bounce" /> Scroll to explore
      </a>
    </section>
  );
}
