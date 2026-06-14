import { profile } from "../data/portfolio";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center bg-grid-pattern border-b border-base-line overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-base via-base/80 to-base pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 pt-24 pb-16 w-full">
        <p className="font-mono text-signal text-sm mb-4">
          <span className="text-ink-faint">$</span> whoami
        </p>

        <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-7xl leading-tight tracking-tight text-ink">
          {profile.name}
        </h1>

        <p className="font-mono text-signal-dim text-lg md:text-xl mt-3">
          // {profile.role} — LLMs · RAG · Computer Vision · MLOps
        </p>

        <p className="text-ink-muted text-base md:text-lg max-w-2xl mt-6 leading-relaxed">
          {profile.tagline}
        </p>

        <div className="flex flex-wrap items-center gap-4 mt-10">
          <a
            href="#projects"
            className="bg-signal text-base font-mono text-sm font-medium px-6 py-3 rounded hover:bg-signal-dim transition-colors"
          >
            view projects
          </a>
          <a
            href="#contact"
            className="border border-base-line text-ink font-mono text-sm px-6 py-3 rounded hover:border-signal/50 hover:text-signal transition-colors"
          >
            get in touch
          </a>
        </div>

        <div className="flex items-center gap-5 mt-12 text-ink-muted">
          <a href={profile.links.github} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors" aria-label="GitHub">
            <Github size={20} />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="hover:text-signal transition-colors" aria-label="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-signal transition-colors" aria-label="Email">
            <Mail size={20} />
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-ink-faint hover:text-signal transition-colors animate-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}
