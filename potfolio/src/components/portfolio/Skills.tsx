import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";

const groups = [
  { label: "Languages", items: ["Python", "C++", "C", "JavaScript", "PHP"] },
  { label: "Frameworks", items: ["React", "Node.js", "Express", "FastAPI", "Tailwind CSS"] },
  { label: "Tools", items: ["Git", "GitHub", "Figma"] },
  { label: "AI / ML", items: ["NLP", "Machine Learning", "TF-IDF", "Logistic Regression"] },
  { label: "Databases", items: ["MySQL", "PostgreSQL", "Supabase", "MongoDB"] },
  { label: "Cloud", items: ["GCP", "Vercel"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 md:py-40 px-6 bg-surface">
      <div className="mx-auto max-w-7xl">
        <SectionHeader index="04" kicker="Toolkit" title="Stack I reach for." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden border border-border">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-background p-8 hover:bg-card transition-colors group"
            >
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display text-2xl font-semibold">{g.label}</h3>
                <span className="font-mono text-xs text-muted-foreground">0{i + 1}</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="font-mono text-sm px-3 py-1.5 rounded-md bg-surface border border-border group-hover:border-primary/40 transition-colors"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
