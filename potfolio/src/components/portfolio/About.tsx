import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { GraduationCap, Code2, Sparkles } from "lucide-react";

const facts = [
  { icon: GraduationCap, label: "B.Tech CSE", sub: "SRM University AP" },
  { icon: Code2, label: "Full Stack", sub: "MERN · Python · ML" },
  { icon: Sparkles, label: "2+ Internships", sub: "Real-world shipped products" },
];

export function About() {
  return (
    <section id="about" className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="01" kicker="About" title="Engineer by training, builder by obsession." />

        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-7 space-y-6 text-lg leading-relaxed text-foreground/80"
          >
            <p>
              I'm a Computer Science Engineering student at <span className="text-foreground font-medium">SRM University AP</span>,
              fascinated by the intersection of clean interfaces and intelligent systems.
            </p>
            <p>
              I've spent the last two years shipping production code — from{" "}
              <span className="text-primary">React dashboards</span> consumed by hundreds of users to{" "}
              <span className="text-primary">ML-powered sentiment engines</span> and real-time GPS tracking systems.
            </p>
            <p className="font-mono text-sm text-muted-foreground border-l-2 border-primary pl-4">
              {"// I love the moment a feature stops being an idea and starts solving someone's problem."}
            </p>
          </motion.div>

          <div className="col-span-12 md:col-span-5 grid gap-4">
            {facts.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative p-6 rounded-2xl border border-border bg-surface hover:border-primary transition-all hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="size-12 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <f.icon className="size-5" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold">{f.label}</div>
                    <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">{f.sub}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
