import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-40 pb-24">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's create something memorable."
          description="Have a project, collaboration, or idea in mind? Get in touch."
        />

        <div className="mt-16">
          <a
            href="mailto:hello@example.com"
            className="inline-flex rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:scale-105"
          >
            hello@example.com
          </a>
        </div>

        <div className="mt-16 flex gap-6 text-sm text-white/50">
          <Link href="https://github.com/" target="_blank">
            GitHub
          </Link>

          <Link href="https://www.linkedin.com/" target="_blank">
            LinkedIn
          </Link>

          <Link href="https://www.instagram.com/" target="_blank">
            Instagram
          </Link>
        </div>
      </Container>
    </main>
  );
}
