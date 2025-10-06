"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileDown } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section relative">
      {/* subtle decorative glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(106,164,255,0.18),transparent_60%)] blur-2xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.18),transparent_60%)] blur-2xl" />
      </div>

      <Container>
        <div className="flex items-end justify-between">
          <h2 className="section-title">
            <span className="bg-gradient-to-r from-[var(--color-accent)] via-[var(--color-accent-2)] to-[var(--color-accent-3)] bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="order-last lg:order-first"
          >
            <div className="relative inline-block rounded-2xl p-[2px] bg-gradient-to-tr from-[var(--color-accent)] via-[var(--color-accent-2)] to-[var(--color-accent-3)]">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)]">
                <Image
                  src="/images/lucky.svg"
                  width={640}
                  height={640}
                  alt="Lokendra ‘Lucky’ Mahale"
                  className="h-auto w-full max-w-md rounded-2xl"
                  priority={false}
                />
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="flex flex-wrap gap-2">
              <Badge>Full‑Stack Developer</Badge>
              <Badge>Problem Solver</Badge>
              <Badge>Tech Enthusiast</Badge>
            </div>

            <p className="mt-4 text-gray-300">
              I build scalable backends, clean APIs, and elegant user interfaces. My focus is on performance,
              reliability, and developer experience — using modern frameworks and sound software design.
            </p>

            <div className="mt-6 grid gap-4 text-sm text-gray-300 sm:grid-cols-2">
              <ul className="space-y-1">
                <li><strong>Languages:</strong> JavaScript, TypeScript, Python, C++</li>
                <li><strong>Frameworks:</strong> React, Next.js, Express.js, Node.js</li>
              </ul>
              <ul className="space-y-1">
                <li><strong>Databases:</strong> PostgreSQL, MongoDB, MySQL</li>
                <li><strong>Tools:</strong> Git, Docker, Firebase, Vercel</li>
              </ul>
            </div>

            <div className="mt-6">
              <a href="/Lokendra_Mahale_Resume.pdf" download>
                <Button className="gap-2">
                  <FileDown className="size-4" /> Download Resume
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
