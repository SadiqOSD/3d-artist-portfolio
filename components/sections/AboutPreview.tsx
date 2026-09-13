import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AboutPreview() {
  return (
    <section className="border-y border-white/10 py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium tracking-[0.25em] text-white/40 uppercase">
              About
            </p>
          </div>

          <div>
            <h2 className="text-3xl leading-tight tracking-tight sm:text-5xl">
              Building visual experiences where art and technology meet.
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/50">
              My work combines 3D visualization, design, storytelling, and
              modern frontend development to create polished digital
              experiences.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-block text-sm underline underline-offset-8"
            >
              More about me →
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
