"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ArrowRight, Github, Mail } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section id="home" className="section relative overflow-hidden">
      <AnimatedBackground />
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-[var(--color-accent-3)] mb-3">
            Full-Stack Developer
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold mb-4">
            Hi, I’m Lokendra Mahale 👋
          </h1>
          <p className="max-w-2xl mx-auto text-[15px] sm:text-base text-gray-400">
            I build efficient, scalable, and user-focused web solutions using modern frameworks and clean architecture.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <a href="#projects">
              <Button className="gap-2">
                View Projects <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="secondary" className="gap-2">
                Get in Touch <Mail className="size-4" />
              </Button>
            </a>
            <a href={siteConfig.links.github} target="_blank" rel="noreferrer">
              <Button variant="outline" className="gap-2">
                <Github className="size-4" /> GitHub
              </Button>
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

function AnimatedBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -top-32 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(106,164,255,0.25),transparent_65%)] blur-2xl" />
      <div className="absolute top-24 left-1/3 h-[240px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.25),transparent_60%)] blur-2xl" />
      <div className="absolute top-1/2 right-1/4 h-[260px] w-[260px] rounded-full bg-[radial-gradient(circle,rgba(45,212,191,0.25),transparent_60%)] blur-2xl" />
    </div>
  );
}
