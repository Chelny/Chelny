"use client";

import { useTheme } from "next-themes";
import { useRef, useState } from "react";
import {
  IconMenu2,
  IconMoon,
  IconSun,
  IconX,
} from "@tabler/icons-react";
import { WorkAvailability } from "@/components/WorkAvailability";
import { useIsMounted } from "@/hooks/useIsMounted";

const NAV_LINKS = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Work History", "#work-history"],
  ["Projects", "#projects"],
  ["Contact", "#contact"],
];

export function Header(): React.JSX.Element {
  const { resolvedTheme, setTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mounted = useIsMounted();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
    menuButtonRef.current?.focus();
  };

  return (
    <>
      <header className="sticky top-0 z-60 mx-auto grid h-14.5 w-[calc(100%-28px)] max-w-295 grid-cols-[auto_minmax(0,1fr)_auto] items-center border-b border-(--border) bg-[color-mix(in_srgb,var(--background)_92%,transparent)] backdrop-blur-md md:h-16">
        <a
          href="#"
          aria-label="Chelny home"
          className="inline-flex items-center text-3xl font-extrabold tracking-[-0.06em] no-underline"
        >
          C<span className="text-(--accent)">D</span>
        </a>

        <nav
          aria-label="Main navigation"
          className="hidden min-w-0 items-center justify-center gap-4 whitespace-nowrap lg:flex xl:gap-7"
        >
          {NAV_LINKS.map(([label, href]: string[]) => (
            <a
              key={href}
              href={href}
              className="shrink-0 font-semibold text-(--muted) underline decoration-transparent decoration-1 underline-offset-4 transition-colors duration-150 hover:text-foreground hover:decoration-(--accent)"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center justify-self-end gap-2 md:gap-3">
          <div className="hidden md:contents">
            <WorkAvailability />
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            disabled={!mounted}
            aria-label={
              !mounted
                ? "Toggle theme"
                : resolvedTheme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
            }
            title={
              !mounted
                ? undefined
                : resolvedTheme === "dark"
                  ? "Light theme"
                  : "Dark theme"
            }
            className="inline-flex size-8.5 shrink-0 cursor-pointer items-center justify-center rounded-md border border-(--border) bg-(--surface) text-(--muted) transition-colors duration-150 hover:text-foreground"
          >
            {!mounted ? (
              <span className="size-4" aria-hidden="true" />
            ) : resolvedTheme === "dark" ? (
              <IconSun size={17} aria-hidden="true" />
            ) : (
              <IconMoon size={17} aria-hidden="true" />
            )}
          </button>

          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((current: boolean) => !current)}
            aria-label={
              menuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex size-8.5 shrink-0 cursor-pointer items-center justify-center rounded-md border border-(--border) bg-(--surface) text-(--muted) lg:hidden"
          >
            {menuOpen ? (
              <IconX size={19} aria-hidden="true" />
            ) : (
              <IconMenu2 size={19} aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <div
        id="mobile-navigation-container"
        className={`fixed inset-0 z-70 flex flex-col
          bg-background text-foreground md:hidden
          ${
            menuOpen
              ? "visible pointer-events-auto [clip-path:polygon(0_0,100%_0,100%_100%,0_100%)]"
              : "invisible pointer-events-none [clip-path:polygon(100%_0,100%_0,100%_0,100%_0)]"
          }
          transition-[clip-path,visibility] duration-450
          ease-[cubic-bezier(0.76,0,0.24,1)]`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        {/* Top bar */}
        <div className="flex shrink-0 items-center justify-between px-3.5 py-1.5">
          <a
            href="#"
            onClick={closeMenu}
            aria-label="Home"
            className="text-3xl font-extrabold tracking-[-0.06em] text-foreground no-underline"
          >
            C<span className="text-(--accent)">D</span>
          </a>

          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close navigation menu"
            className="flex size-11 cursor-pointer items-center justify-center text-foreground transition-colors"
          >
            <IconX size={32} aria-hidden="true" />
          </button>
        </div>

        {/* Centered navigation */}
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="flex min-h-0 flex-1 flex-col items-center justify-center gap-4 overflow-y-auto px-4 py-3"
        >
          {NAV_LINKS.map(([label, href], index) => (
            <a
              key={href}
              href={href}
              onClick={closeMenu}
              className="group flex shrink-0 items-center justify-center gap-3 whitespace-nowrap text-foreground no-underline transition-colors duration-200 hover:text-(--accent)"
            >
              <span className="text-sm font-semibold tracking-wider text-(--accent)">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-[clamp(2rem,8vw,4.5rem)] leading-[1.15] font-extrabold tracking-tighter">
                {label}
              </span>
            </a>
          ))}
        </nav>

        {/* Sticky bottom availability */}
        <div className="sticky bottom-0 mt-auto block shrink-0 border-t border-(--border) bg-background px-6 py-5 md:hidden">
          <WorkAvailability />
        </div>
      </div>
    </>
  );
}