import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const jobs = [
  {
    role: "Frontend Developer Intern",
    company: "VHASS Softwares Pvt. Ltd",
    period: "2024",
    bullets: [
      "Built responsive React UIs with reusable component architecture.",
      "Integrated REST APIs and managed client-side state for production dashboards.",
      "Collaborated with backend team to refine data contracts and DX.",
    ],
    stack: ["React", "REST", "Tailwind"],
  },
  {
    role: "Full Stack Developer Intern",
    company: "AddWise Tech Pvt. Ltd",
    period: "2024 — 2025",
    bullets: [
      "Engineered an end-to-end GPS tracking system with live map dashboards.",
      "Implemented JWT authentication, role-based access, and REST APIs.",
      "Designed PostgreSQL schemas and optimized geo-queries for real-time updates.",
    ],
    stack: ["Node.js", "PostgreSQL", "Leaflet", "JWT"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-32 md:py-40 px-6 bg-surface">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="02" kicker="Experience" title="Where I've shipped." />

        <div className="space-y-2">
          {jobs.map((j, i) => (
            <motion.article
              key={j.company}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group grid grid-cols-12 gap-6 py-10 border-t border-border hover:bg-background/40 transition-colors px-2 -mx-2 rounded-lg"
            >
              <div className="col-span-12 md:col-span-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {j.period}
              </div>
              <div className="col-span-12 md:col-span-7">
                <h3 className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                  {j.role}
                  <span className="text-primary"> @ </span>
                  <span className="text-foreground/70">{j.company}</span>
                </h3>
                <ul className="mt-4 space-y-2 text-foreground/75">
                  {j.bullets.map((b) => (
                    <li key={b} className="flex gap-3">
                      <span className="text-primary font-mono text-sm mt-1.5">▹</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-span-12 md:col-span-3 flex flex-wrap gap-2 md:justify-end items-start">
                {j.stack.map((s) => (
                  <span key={s} className="font-mono text-xs px-3 py-1 rounded-full border border-border bg-background">
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
