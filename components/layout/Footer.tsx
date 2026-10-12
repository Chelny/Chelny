"use client";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer(): React.JSX.Element {
  return (
    <footer className="mx-auto flex w-[calc(100%-28px)] max-w-295 flex-col gap-2 py-6.25 pb-8.75 text-center font-(--font-mono) text-sm text-(--subtle) md:flex-row md:justify-between md:gap-0 md:text-left">
      <span>© {CURRENT_YEAR} Chelny Duplan</span>
      <span>Built with Next.js · React · TypeScript</span>
    </footer>
  );
}