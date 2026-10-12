"use client";

export function WorkAvailability(): React.JSX.Element {
  if (!process.env.NEXT_PUBLIC_WORK_AVAILABILITY) return <></>;

  return (
    <a
      href="#contact"
      className="flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold text-(--muted) no-underline"
    >
      <span
        aria-hidden="true"
        className="size-1.75 shrink-0 rounded-full bg-[#3b9b67] shadow-[0_0_0_3px_color-mix(in_srgb,#3b9b67_16%,transparent)]"
      />
      Available for work
    </a>
  );
}