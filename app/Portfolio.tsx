"use client";

import { useEffect, useState, type CSSProperties } from "react";
import Image from "next/image";
import {
  Briefcase, GraduationCap, BookOpen, Wrench, Mail, MapPin, Languages,
  Monitor, Server, Database, GitBranch, MessageCircle, Rocket, ExternalLink, Sun, Moon,
} from "lucide-react";
import { content, profile, type Lang } from "@/data/content";

// Mesma ordem de `skills` em data/content.ts
const skillMeta = [
  { Icon: Monitor, color: "#5b6cff" },
  { Icon: Server, color: "#14a89a" },
  { Icon: Database, color: "#e8920c" },
  { Icon: GitBranch, color: "#e0488f" },
];

const projectColors = ["#5b6cff", "#14a89a", "#e0488f", "#e8920c"];

const tint = (c: string): CSSProperties => ({ ["--c" as string]: c });

export default function Portfolio() {
  const [lang, setLang] = useState<Lang>("pt");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let saved: string | null = null;
    try {
      saved = localStorage.getItem("lang");
    } catch {}
    if (saved === "pt" || saved === "en") setLang(saved);
    else if (navigator.language.toLowerCase().startsWith("en")) setLang("en");
  }, []);

  useEffect(() => {
    const d = document.documentElement.dataset.theme;
    if (d === "light" || d === "dark") setTheme(d);
    else setTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const choose = (l: Lang) => {
    setLang(l);
    try {
      localStorage.setItem("lang", l);
    } catch {}
  };

  const t = content[lang];

  return (
    <div className="page">
      <header>
        <div className="who">
          <Image src="/alan.jpg" alt="" width={64} height={64} className="avatar" priority />
          <div>
            <h1>{profile.name}</h1>
            <p className="muted">{t.role}</p>
            <p className="muted meta">
              <MapPin size={14} aria-hidden /> {t.location}
            </p>
          </div>
        </div>
        <div className="controls">
        <div className="lang" role="group" aria-label="Idioma / Language">
          <Languages size={16} aria-hidden />
          {(["pt", "en"] as Lang[]).map((l) => (
            <button key={l} onClick={() => choose(l)} aria-pressed={lang === l}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          className="theme"
          onClick={toggleTheme}
          aria-label={lang === "pt" ? "Alternar tema claro/escuro" : "Toggle light/dark theme"}
          title={lang === "pt" ? "Alternar tema" : "Toggle theme"}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        </div>
      </header>

      <main>
        <p className="about">{t.about}</p>

        <section>
          <h2>
            <span className="ico" style={tint("#5b6cff")}><Briefcase size={16} /></span>
            {t.labels.experience}
          </h2>
          {t.experience.map((e) => (
            <article key={e.period}>
              <h3>
                {e.role}, {e.company}
              </h3>
              <p className="muted">{e.period}</p>
              <ul>
                {e.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </section>

        <section>
          <h2>
            <span className="ico" style={tint("#14a89a")}><Wrench size={16} /></span>
            {t.labels.skills}
          </h2>
          <div className="cards">
            {t.skills.map((s, i) => {
              const { Icon, color } = skillMeta[i];
              return (
                <div key={s.group} className="card" style={tint(color)}>
                  <div className="card-head">
                    <span className="ico"><Icon size={18} /></span>
                    <h3>{s.group}</h3>
                  </div>
                  <ul className="tags">
                    {s.list.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h2>
            <span className="ico" style={tint("#e0488f")}><Rocket size={16} /></span>
            {t.labels.projects}
          </h2>
          <div className="cards">
            {t.projects.map((p, i) => (
              <div key={p.name} className="card" style={tint(projectColors[i % projectColors.length])}>
                <div className="card-head">
                  <h3>{p.name}</h3>
                  {p.href && (
                    <a href={p.href} target="_blank" rel="noreferrer" className="ext" aria-label={`${p.name} (link)`}>
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
                <p className="desc">{p.desc}</p>
                <span className="status">{t.labels.status}</span>
                <ul className="tags">
                  {p.stack.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2>
            <span className="ico" style={tint("#e8920c")}><GraduationCap size={16} /></span>
            {t.labels.education}
          </h2>
          {t.education.map((e) => (
            <p key={e.title} className="item">
              {e.title}
              <br />
              <span className="muted">
                {e.place} · {e.note}
              </span>
            </p>
          ))}
        </section>

        <section>
          <h2>
            <span className="ico" style={tint("#e0488f")}><BookOpen size={16} /></span>
            {t.labels.courses}
          </h2>
          {t.courses.map((c) => (
            <p key={c.title} className="item">
              {c.title} <span className="muted">· {c.place}</span>
            </p>
          ))}
        </section>

        <section>
          <h2>
            <span className="ico" style={tint("#5b6cff")}><Mail size={16} /></span>
            {t.labels.contact}
          </h2>
          <p className="muted item">{t.contactLead}</p>
          <p className="contact">
            <a
              href={`mailto:${profile.email}?subject=${encodeURIComponent(t.msg.subject)}&body=${encodeURIComponent(t.msg.body)}`}
            >
              <Mail size={16} aria-hidden /> {profile.email}
            </a>
            <a
              href={`https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(t.msg.whatsapp)}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={16} aria-hidden /> {profile.phone}
            </a>
            {profile.links.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noreferrer">
                {l.label}
              </a>
            ))}
          </p>
        </section>
      </main>
    </div>
  );
}
