import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} 3D Artist. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-white/50">
          <Link href="/work" className="transition hover:text-white">
            Work
          </Link>
          <Link href="/about" className="transition hover:text-white">
            About
          </Link>
          <Link href="/contact" className="transition hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
