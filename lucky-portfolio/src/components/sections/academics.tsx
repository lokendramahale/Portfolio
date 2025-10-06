import { Container } from "@/components/ui/container";

const items = [
  {
    degree: "B.Tech in Computer Science",
    org: "NIT Bhopal",
    duration: "2019 – 2023",
    notes: ["CGPA: 8.5/10", "Hackathon participant"]
  },
];

export function Academics() {
  return (
    <section id="academics" className="section">
      <Container>
        <h2 className="section-title">Academics & Achievements</h2>
        <div className="mt-6 space-y-6">
          {items.map((i) => (
            <div key={i.degree} className="rounded-xl border border-[var(--color-border)] bg-[var(--color-card)] p-5">
              <h3 className="text-lg font-semibold">{i.degree} • {i.org}</h3>
              <p className="text-sm text-gray-400">{i.duration}</p>
              <ul className="mt-2 list-disc pl-5 text-sm text-gray-300">
                {i.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
