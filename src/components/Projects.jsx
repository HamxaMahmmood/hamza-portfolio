import { useState } from "react";
import { projects } from "../data/portfolio";
import { ExternalLink } from "lucide-react";

const categories = ["All", ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="border-b border-base-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="flex items-center gap-4 mb-8">
          <span className="font-mono text-signal text-sm">03.</span>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">Projects</h2>
          <div className="flex-1 h-px bg-base-line" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10 font-mono text-sm">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded border transition-colors ${
                active === cat
                  ? "border-signal text-signal bg-signal/10"
                  : "border-base-line text-ink-muted hover:border-signal/40 hover:text-ink"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="border border-base-line rounded-lg p-6 bg-base-panel hover:border-signal/40 transition-colors flex flex-col"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-signal-dim text-xs">{p.category} · {p.period}</p>
                  <h3 className="font-display font-semibold text-lg text-ink mt-1">{p.title}</h3>
                </div>
              </div>

              <p className="text-ink-muted text-sm mt-3 leading-relaxed">{p.description}</p>

              <p className="text-ink-faint text-sm mt-3 leading-relaxed border-l-2 border-signal/30 pl-3">
                {p.impact}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-signal-dim bg-signal/5 border border-signal/20 rounded px-2 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-5 pt-4 border-t border-base-line font-mono text-sm">
                {p.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1 text-ink-muted hover:text-signal transition-colors"
                  >
                    {l.label} <ExternalLink size={14} />
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
