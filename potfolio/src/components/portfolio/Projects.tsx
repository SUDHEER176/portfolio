import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const projects = [
  {
    n: "01",
    title: "CareerConnect",
    tag: "Job Portal",
    desc: "Full-stack job marketplace with role-based dashboards, smart filtering, OAuth, and applicant tracking.",
    stack: ["React", "Node.js", "MongoDB", "OAuth"],
    github: "https://github.com/SUDHEER176/jobpoartal",
    live: "https://jobpoartal.vercel.app/",
    accent: "from-primary/30 to-transparent",
  },
  {
    n: "02",
    title: "Sentiment Analysis App",
    tag: "AI / ML",
    desc: "Web app that classifies text sentiment in real time using TF-IDF vectorization and a Logistic Regression model served via Flask.",
    stack: ["Python", "Flask", "scikit-learn", "NLP"],
    github: "https://github.com/SUDHEER176/sentiment-analysis",
    live: "https://sentiment-analysis-seven-woad.vercel.app/",
    accent: "from-blue-500/30 to-transparent",
  },
  {
    n: "03",
    title: "GPS Tracking System",
    tag: "Real-time",
    desc: "Real-time vehicle tracking with live maps, historical playback, and admin dashboards. Built during my internship at AddWise.",
    stack: ["PHP", "MySQL", "Leaflet.js"],
    github: "https://github.com/SUDHEER176/GPS-Tracking-System",
    live: "#",

    accent: "from-fuchsia-500/30 to-transparent",
  },
  {
    n: "04",
    title: "Mental health",
    tag: "Real-time",
    desc: "Real-time vehicle tracking with live maps, historical playback, and admin dashboards. Built during my internship at AddWise.",
    stack: ["PHP", "MySQL", "Leaflet.js"],
    github: "https://github.com/SUDHEER176/GPS-Tracking-System",
    live: "#",

    accent: "from-fuchsia-500/30 to-transparent",
  },
  {
    n: "05",
    title: "carrer maping",
    tag: "Real-time",
    desc: "Real-time vehicle tracking with live maps, historical playback, and admin dashboards. Built during my internship at AddWise.",
    stack: ["PHP", "MySQL", "Leaflet.js"],
    github: "https://github.com/SUDHEER176/GPS-Tracking-System",
    live: "#",

    accent: "from-fuchsia-500/30 to-transparent",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-32 md:py-40 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          index="03"
          kicker="Selected Work"
          title="Projects that taught me how to think."
          sub="A mix of production internships, hackathon hustles, and personal experiments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative flex flex-col h-full rounded-2xl border border-border bg-card/50 overflow-hidden hover:border-primary/50 transition-all duration-300 transform-gpu"
            >
              {/* 1. Background gradient layer (behind everything) */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />
              
              {/* 2. The main "Live Demo" link covering the whole card (z-10) */}
              <a 
                href={p.live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="absolute inset-0 z-10 cursor-pointer" 
                aria-label={`View ${p.title} live demo`}
              />

              {/* 3. The Content (z-20, pointer-events-none so click passes through to the Live link) */}
              <div className="relative z-20 p-6 flex flex-col h-full pointer-events-none">
                <div className="flex items-start justify-between mb-4">
                  <span className="font-display text-4xl font-bold text-stroke opacity-50">{p.n}</span>
                  
                  {/* 4. Action Buttons (z-30, pointer-events-auto so they ARE clickable) */}
                  <div className="flex gap-2 pointer-events-auto">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-foreground hover:text-background transition-colors relative z-30"
                      title="View Code"
                    >
                      <Github className="size-4" />
                    </a>
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform relative z-30"
                      title="Live Demo"
                    >
                      <ArrowUpRight className="size-4" />
                    </a>
                  </div>
                </div>

                <div className="mb-2">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary/80">{p.tag}</span>
                  <h3 className="font-display text-xl font-bold mt-1 group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
                </div>

                <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                  {p.desc}
                </p>

                <div className="mt-auto pt-4 flex flex-wrap gap-1.5 border-t border-border/50">
                  {p.stack.map((s) => (
                    <span key={s} className="font-mono text-[10px] px-2 py-0.5 rounded-md border border-border bg-background/40">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
