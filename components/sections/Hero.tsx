import Link from "next/link";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-white/[0.02]" />

      <Container className="pt-32 pb-20">
        <div className="max-w-5xl">
          <p className="mb-8 text-xs font-medium tracking-[0.3em] text-white/40 uppercase">
            3D Artist / Developer
          </p>

          <h1 className="text-6xl leading-[0.95] font-medium tracking-[-0.05em] sm:text-7xl lg:text-[9rem]">
            Digital
            <br />
            <span className="text-white/40">Craft.</span>
          </h1>

          <p className="mt-10 max-w-xl text-base leading-7 text-white/50 sm:text-lg">
            I create visual experiences through 3D art, product visualization,
            creative direction, and modern web technology.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/work"
              className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:scale-105"
            >
              View selected work
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-white/50"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
