import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { ActiveSectionIndicator } from "./components/ActiveSectionIndicator";
import { ParticleBackground } from "./components/ParticleBackground";
import { CursorTrail } from "./components/CursorTrail";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <CursorTrail />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <ActiveSectionIndicator />
    </>
  );
}
