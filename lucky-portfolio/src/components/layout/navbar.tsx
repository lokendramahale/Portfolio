"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const sections = ["home", "about", "projects", "experience", "academics", "tech", "contact"] as const;

export function Navbar() {
  const [active, setActive] = useState<(typeof sections)[number]>("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id") as (typeof sections)[number];
            if (id) setActive(id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={cn("sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/30", scrolled && "border-b border-[var(--color-border)]")}
    >
      <nav className="px-4 sm:px-6 lg:px-8 mx-auto max-w-6xl flex h-14 items-center justify-between">
        <a href="#home" className="font-semibold">LM</a>
        <ul className="hidden gap-5 text-sm sm:flex">
          {sections.map((s) => (
            <li key={s}>
              <a
                href={`#${s}`}
                className={cn(
                  "text-gray-400 hover:text-white",
                  active === s && "text-white"
                )}
              >
                {s.charAt(0).toUpperCase() + s.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
