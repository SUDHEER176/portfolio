import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const items = [
  { rank: "10th", event: "Code for Connection Hackathon", scale: "Out of 220+ teams", year: "2024" },
  { rank: "5th", event: "Hackverse Hackathon", scale: "Out of 120+ teams", year: "2024" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="05" kicker="Wins" title="Recognition." />

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it, i) => (
            <motion.div
              key={it.event}
              initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-10 group hover:border-primary transition-colors"
            >
              <Trophy className="absolute -right-6 -top-6 size-40 text-primary/10 group-hover:text-primary/20 group-hover:rotate-12 transition-all duration-700" />
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{it.year}</div>
              <div className="mt-4 font-display font-bold leading-none">
                <span className="text-7xl md:text-8xl text-primary">{it.rank}</span>
                <span className="text-3xl text-muted-foreground"> place</span>
              </div>
              <div className="mt-6 font-display text-2xl font-semibold">{it.event}</div>
              <div className="mt-1 text-muted-foreground">{it.scale}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
