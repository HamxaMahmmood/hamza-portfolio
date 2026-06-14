import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "about" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#skills", label: "skills" },
  { href: "#contact", label: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-base/90 backdrop-blur border-b border-base-line" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#top" className="font-mono text-sm text-signal tracking-tight">
          hamza<span className="text-ink-faint">@</span>mahmood
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-sm text-ink-muted">
          {links.map((l, i) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-signal transition-colors">
                <span className="text-signal/60 mr-1">0{i + 1}.</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block font-mono text-sm border border-signal/40 text-signal px-4 py-2 rounded hover:bg-signal/10 transition-colors"
        >
          get in touch
        </a>

        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-base-line bg-base px-6 py-4">
          <ul className="flex flex-col gap-4 font-mono text-sm text-ink-muted">
            {links.map((l, i) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-signal transition-colors"
                >
                  <span className="text-signal/60 mr-1">0{i + 1}.</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
