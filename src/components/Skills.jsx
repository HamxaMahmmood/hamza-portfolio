import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-b border-base-line bg-base-panel/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-signal text-sm">04.</span>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">Skills</h2>
          <div className="flex-1 h-px bg-base-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category}>
              <p className="font-mono text-signal-dim text-sm mb-3">// {category}</p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-sm text-ink-muted border border-base-line rounded px-3 py-1.5 hover:border-signal/40 hover:text-ink transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
