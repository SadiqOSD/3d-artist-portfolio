import Link from "next/link";
import Container from "@/components/ui/Container";

export default function ContactCTA() {
  return (
    <section className="py-32">
      <Container>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center sm:px-12 lg:py-24">
          <p className="text-xs font-medium tracking-[0.25em] text-white/40 uppercase">
            Start a project
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl tracking-tight sm:text-6xl lg:text-7xl">
            Have an idea worth building?
          </h2>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105"
          >
            Let's talk
          </Link>
        </div>
      </Container>
    </section>
  );
}
