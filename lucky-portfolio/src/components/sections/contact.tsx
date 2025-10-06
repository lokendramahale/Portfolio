"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Mail, Send } from "lucide-react";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const body = Object.fromEntries(formData.entries());
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="section">
      <Container>
        <h2 className="section-title">Contact</h2>
        <p className="mt-2 text-gray-400">Let’s collaborate on your next project or idea!</p>
        <form onSubmit={onSubmit} className="mt-6 grid gap-3 sm:max-w-lg">
          <input name="name" placeholder="Name" className="h-11 rounded-md border border-[var(--color-border)] bg-transparent px-3 outline-none" required />
          <input name="email" placeholder="Email" type="email" className="h-11 rounded-md border border-[var(--color-border)] bg-transparent px-3 outline-none" required />
          <textarea name="message" placeholder="Message" rows={5} className="rounded-md border border-[var(--color-border)] bg-transparent px-3 py-2 outline-none" required />
          <Button disabled={status === "loading"} className="gap-2">
            {status === "loading" ? "Sending..." : (<><Send className="size-4" /> Send</>)}
          </Button>
          {status === "success" && <p className="text-sm text-emerald-400">Thanks! I’ll get back to you soon.</p>}
          {status === "error" && <p className="text-sm text-red-400">Something went wrong. Try again later.</p>}
        </form>
        <div className="mt-6 flex flex-wrap gap-3 text-sm">
          <a href="https://www.linkedin.com/in/lokendra-mahale/" className="inline-flex items-center gap-2 text-[var(--color-accent)]"><Mail className="size-4" /> Email</a>
          <a href="https://github.com/lucky" className="inline-flex items-center gap-2 text-[var(--color-accent)]">GitHub</a>
          <a href="https://leetcode.com/u/lucky" className="inline-flex items-center gap-2 text-[var(--color-accent)]">LeetCode</a>
        </div>
      </Container>
    </section>
  );
}
