import { Container } from "@/components/ui/container";

export function Footer() {
  return (
    <footer className="section pt-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row">
          <p>© 2025 Lokendra “Lucky” Mahale</p>
          <nav className="flex gap-4">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
