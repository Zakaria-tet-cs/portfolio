import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedWork from "@/components/FeaturedWork";
import TechStack from "@/components/TechStack";
import AboutMe from "@/components/AboutMe";
import LearningJourney from "@/components/Roadmap";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative w-full">
      <Navbar />

      <main className="flex-grow w-full overflow-hidden">
        <Hero />
        <FeaturedWork />
        <TechStack />
        <AboutMe />
        <Projects />
        <LearningJourney />
        <Timeline />
        <Achievements />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
