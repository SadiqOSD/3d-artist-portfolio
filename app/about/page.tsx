import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <SectionHeading
          eyebrow="About"
          title="3D artist and developer creating visual digital experiences."
          description="I combine 3D visualization, creative direction, and modern web development to build polished digital experiences."
        />

        <div className="mt-20 grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm leading-8 text-white/50">
              My creative work focuses on 3D modeling, product visualization,
              lighting, rendering, and visual storytelling.
            </p>
          </div>

          <div>
            <p className="text-sm leading-8 text-white/50">
              Alongside 3D art, I work with modern frontend technologies to
              create responsive and interactive websites that bring visual
              ideas to life.
            </p>
          </div>
        </div>
      </Container>
    </main>
  );
}
