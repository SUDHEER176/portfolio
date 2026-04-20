import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { theme, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border"
          : "py-5 bg-transparent",
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm font-bold tracking-tight flex items-center gap-2">
          <span className="inline-block size-2 rounded-full bg-primary shadow-glow" />
          sudheer<span className="text-primary">.dev</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
          {links.map((l, i) => (
            <a key={l.href} href={l.href} className="magnetic-link text-muted-foreground hover:text-foreground transition-colors">
              <span className="text-primary mr-1">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="size-9 grid place-items-center rounded-full border border-border hover:border-primary hover:text-primary transition-all hover:rotate-180 duration-500"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-primary text-primary-foreground hover:shadow-glow transition-all"
          >
            Let's talk →
          </a>
        </div>
      </div>
    </header>
  );
}
