"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import data from "@/data/projects.json";

const categories = ["All", "Web Apps", "AI/ML", "Full-Stack"] as const;

export function Projects() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const items = useMemo(() => {
    if (filter === "All") return data.projects;
    return data.projects.filter((p) => p.category === filter);
  }, [filter]);

  return (
    <section id="projects" className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="section-title">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                className={`rounded-full border px-3 py-1 text-xs ${
                  filter === c ? "bg-[var(--color-accent)] text-black" : "border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)]"
                }`}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((p) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4 }}
              className="group rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5"
            >
              {p.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.image} alt="" className="mb-4 h-40 w-full rounded-lg object-cover" />
              )}
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
              <div className="mt-4 flex gap-3">
                {p.github && (
                  <a className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)]" href={p.github} target="_blank" rel="noreferrer">
                    <Github className="size-4" /> GitHub
                  </a>
                )}
                {p.demo && (
                  <a className="inline-flex items-center gap-1 text-sm text-[var(--color-accent)]" href={p.demo} target="_blank" rel="noreferrer">
                    <ExternalLink className="size-4" /> Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
