import Hero from "@/components/sections/Hero";
import FeaturedWork from "@/components/sections/FeaturedWork";
import AboutPreview from "@/components/sections/AboutPreview";
import Skills from "@/components/sections/Skills";
import ContactCTA from "@/components/sections/ContactCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedWork />
      <AboutPreview />
      <Skills />
      <ContactCTA />
    </main>
  );
}
