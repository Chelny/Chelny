import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Intro } from "@/components/Intro";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WorkHistory } from "@/components/WorkHistory";
import { SectionNumberProvider } from "@/contexts/SectionNumberProvider";

export default function HomePage(): React.JSX.Element {
  return (
    <main>
      <a
        href="#main-content"
        className="fixed left-2 top-2 z-1000 -translate-y-37.5 rounded-md border border-foreground bg-(--surface) px-3 py-2 text-foreground transition-transform duration-150"
      >
        Skip to content
      </a>

      <Header />

      <div id="main-content">
        <Intro />
        <SectionNumberProvider>
          <About />
          <Skills />
          <WorkHistory />
          <Projects />
          <Contact />
        </SectionNumberProvider>
      </div>

      <Footer />
    </main>
  );
}