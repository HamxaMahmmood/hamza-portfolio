import { profile, education } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="border-b border-base-line">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="flex items-center gap-4 mb-10">
          <span className="font-mono text-signal text-sm">01.</span>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">About</h2>
          <div className="flex-1 h-px bg-base-line" />
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          <div className="md:col-span-2">
            <p className="text-ink-muted leading-relaxed text-base md:text-lg">
              {profile.about}
            </p>
          </div>

          <div className="font-mono text-sm">
            <p className="text-signal mb-3">// education</p>
            {education.map((e) => (
              <div key={e.school} className="border border-base-line rounded p-4 bg-base-panel">
                <p className="text-ink">{e.degree}</p>
                <p className="text-ink-muted mt-1">{e.school}</p>
                <p className="text-ink-faint mt-1">{e.location}</p>
                <div className="flex justify-between mt-3 text-ink-faint">
                  <span>{e.detail}</span>
                  <span>{e.period}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
