type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <p className="mb-4 text-xs font-medium tracking-[0.25em] text-white/40 uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-medium tracking-tight sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/50">
          {description}
        </p>
      )}
    </div>
  );
}
