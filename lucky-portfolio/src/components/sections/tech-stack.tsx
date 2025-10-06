import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";

const groups = [
  {
    name: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    name: "Backend",
    items: ["Node.js", "Express", "REST", "WebSockets"],
  },
  {
    name: "Database",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    name: "Tools",
    items: ["Git", "Docker", "Firebase", "Vercel"],
  },
] as const;

export function TechStack() {
  return (
    <section id="tech" className="section">
      <Container>
        <h2 className="section-title">Tech Stack</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {groups.map((g) => (
            <div key={g.name} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
              <h3 className="font-semibold">{g.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <Badge key={i}>{i}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
