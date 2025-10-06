"use client";

import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import data from "@/data/experience.json";

export function Experience() {
  return (
    <section id="experience" className="section">
      <Container>
        <h2 className="section-title">Experience</h2>
        <div className="mt-8 relative">
          <div className="absolute left-4 top-0 h-full w-px bg-[var(--color-border)]" />
          <div className="space-y-8">
            {data.experience.map((item) => (
              <motion.div
                key={item.role}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4 }}
                className="relative pl-12"
              >
                <div className="absolute left-1 top-2 size-6 rounded-full border border-[var(--color-border)] bg-[var(--color-card)]" />
                <h3 className="text-lg font-semibold">{item.role} • {item.org}</h3>
                <p className="text-sm text-gray-400">{item.duration}</p>
                <ul className="mt-2 list-disc pl-5 text-sm text-gray-300">
                  {item.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
