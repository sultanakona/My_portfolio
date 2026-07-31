import { Hero } from "@/components/sections/Hero";
import { Marquee } from "@/components/sections/Marquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { DesignProcess } from "@/components/sections/DesignProcess";
import { DesignHighlights } from "@/components/sections/DesignHighlights";
import { SelectedWorks } from "@/components/sections/SelectedWorks";
import { Tools } from "@/components/sections/Tools";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Marquee />
      <About />
      <Services />
      <DesignProcess />
      <DesignHighlights />
      <SelectedWorks />
      <Tools />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
