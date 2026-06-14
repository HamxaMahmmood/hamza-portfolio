import { useState } from "react";
import { profile } from "../data/portfolio";
import { Github, Linkedin, Mail, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ email: "", subject: "", message: "" });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = `From: ${form.email}\n\n${form.message}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      form.subject || "Portfolio contact"
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">
        <div className="flex items-center gap-4 mb-12">
          <span className="font-mono text-signal text-sm">05.</span>
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink">Get in touch</h2>
          <div className="flex-1 h-px bg-base-line" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-ink-muted leading-relaxed text-base md:text-lg max-w-md">
              I'm currently looking for AI/ML engineering roles. Whether you have an
              opportunity, a question about a project, or just want to say hi — my inbox
              is open.
            </p>

            <div className="flex flex-col gap-3 mt-8 font-mono text-sm">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-ink-muted hover:text-signal transition-colors">
                <Mail size={16} /> {profile.email}
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ink-muted hover:text-signal transition-colors">
                <Github size={16} /> github.com/HamxaMahmmood
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 text-ink-muted hover:text-signal transition-colors">
                <Linkedin size={16} /> linkedin.com/in/hamza-mahmood
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 font-mono text-sm">
            <div>
              <label className="text-ink-faint block mb-1">your email</label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-base-panel border border-base-line rounded px-4 py-3 text-ink focus:outline-none focus:border-signal/60"
              />
            </div>
            <div>
              <label className="text-ink-faint block mb-1">subject</label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                className="w-full bg-base-panel border border-base-line rounded px-4 py-3 text-ink focus:outline-none focus:border-signal/60"
              />
            </div>
            <div>
              <label className="text-ink-faint block mb-1">message</label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full bg-base-panel border border-base-line rounded px-4 py-3 text-ink focus:outline-none focus:border-signal/60 resize-none"
              />
            </div>
            <button
              type="submit"
              className="self-start flex items-center gap-2 bg-signal text-base font-medium px-6 py-3 rounded hover:bg-signal-dim transition-colors"
            >
              <Send size={16} /> send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
