import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="border-b border-base-line bg-base-panel/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-signal text-sm">02.</span>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">Experience</h2>
          <div className="flex-1 h-px bg-base-line" />
        </div>

        <div className="space-y-12">
          {experience.map((job) => (
            <div key={job.org} className="grid md:grid-cols-4 gap-6">
              <div className="font-mono text-sm text-ink-faint">{job.period}</div>
              <div className="md:col-span-3">
                <h3 className="font-display font-semibold text-lg text-ink">{job.role}</h3>
                <p className="font-mono text-signal-dim text-sm mt-1">{job.org}</p>
                <ul className="mt-4 space-y-2">
                  {job.points.map((pt, i) => (
                    <li key={i} className="flex gap-3 text-ink-muted text-sm md:text-base leading-relaxed">
                      <span className="text-signal mt-1.5 text-xs">▸</span>
                      <span className="text-ink-muted">{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
