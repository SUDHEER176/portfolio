import { motion } from "framer-motion";

export function SectionHeader({ index, kicker, title, sub }: { index: string; kicker: string; title: string; sub?: string }) {
  return (
    <div className="mb-16 grid grid-cols-12 gap-6 items-end">
      <motion.div
        initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
        className="col-span-12 md:col-span-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-3"
      >
        <span className="text-primary">{index}</span>
        <span className="h-px w-10 bg-border" />
        {kicker}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.1 }}
        className="col-span-12 md:col-span-8 font-display text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight"
      >
        {title}
      </motion.h2>
      {sub && (
        <p className="col-span-12 md:col-span-8 md:col-start-5 mt-2 text-muted-foreground text-lg max-w-2xl">
          {sub}
        </p>
      )}
    </div>
  );
}
