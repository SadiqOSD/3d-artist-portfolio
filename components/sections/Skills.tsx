import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

export default function Skills() {
  return (
    <section className="py-32">
      <Container>
        <SectionHeading
          eyebrow="Capabilities"
          title="Tools I use to turn ideas into experiences."
        />

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-black p-8">
              <h3 className="text-lg font-medium">{group.title}</h3>

              <ul className="mt-8 space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-white/50">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
