import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent!", { description: "I'll get back to you soon." });
      (e.target as HTMLFormElement).reset();
    }, 800);
  };

  return (
    <section id="contact" className="relative py-32 md:py-40 px-6 bg-surface overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl">
        <SectionHeader index="06" kicker="Contact" title="Let's build something." />

        <div className="grid grid-cols-12 gap-10">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-7 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" placeholder="Your name" />
              <Field label="Email" name="email" type="email" placeholder="you@domain.com" />
            </div>
            <Field label="Subject" name="subject" placeholder="Project, role, idea…" />
            <div>
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                name="message"
                rows={6}
                placeholder="Tell me a bit about it."
                className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="inline-flex items-center gap-3 rounded-full bg-primary text-primary-foreground px-7 py-4 font-mono text-xs uppercase tracking-widest hover:shadow-glow transition-all disabled:opacity-60"
            >
              {sending ? "Sending…" : "Send Message"} <Send className="size-3.5" />
            </button>
          </motion.form>

          <motion.aside
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 md:col-span-5 space-y-4"
          >
            <Info icon={Mail} label="Email" value="sudheer@example.com" href="mailto:sudheer@example.com" />
            <Info icon={MapPin} label="Location" value="Andhra Pradesh, India" />
            <Info icon={Github} label="GitHub" value="@vssmsudheer" href="https://github.com" />
            <Info icon={Linkedin} label="LinkedIn" value="V S S M Sudheer" href="https://linkedin.com" />
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...rest }: React.InputHTMLAttributes<HTMLInputElement> & { label: string }) {
  return (
    <div>
      <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        {...rest}
        className="mt-2 w-full bg-background border border-border rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
  );
}

function Info({ icon: Icon, label, value, href }: { icon: React.ElementType; label: string; value: string; href?: string }) {
  const Comp: React.ElementType = href ? "a" : "div";
  return (
    <Comp
      href={href}
      className="group flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary transition-all hover:-translate-y-0.5"
    >
      <div className="size-12 rounded-xl bg-primary/10 grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        <Icon className="size-5" />
      </div>
      <div>
        <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
        <div className="font-display text-lg">{value}</div>
      </div>
    </Comp>
  );
}
