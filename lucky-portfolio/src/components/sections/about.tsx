import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { FileDown } from "lucide-react";

export function About() {
  return (
    <section id="about" className="section">
      <Container>
        <h2 className="section-title">About Me</h2>
        <p className="mt-4 text-gray-400 max-w-3xl">
          I am a Full-Stack Software Developer focused on building scalable backends, clean APIs, and delightful user experiences.
          I enjoy solving complex problems, designing robust architectures, and delivering high-quality code.
        </p>
        <div className="mt-6 grid gap-3 text-sm text-gray-300 sm:grid-cols-2">
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
            <Button className="gap-2"><FileDown className="size-4" /> Download Resume</Button>
          </a>
        </div>
      </Container>
    </section>
  );
}
