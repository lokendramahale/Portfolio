import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Academics } from "@/components/sections/academics";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Academics />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}
