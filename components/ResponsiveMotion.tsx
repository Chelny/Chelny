
"use client";

import { useEffect, useState } from "react";
import { type HTMLMotionProps, motion } from "motion/react";

type SharedProps = {
  children: React.ReactNode;
  delay?: number;
};

type ResponsiveMotionProps =
  | (SharedProps & {
      as?: "div";
    } & Omit<HTMLMotionProps<"div">, "children" | "initial">)
  | (SharedProps & {
      as: "article";
    } & Omit<HTMLMotionProps<"article">, "children" | "initial">)
  | (SharedProps & {
      as: "a";
  } & Omit<HTMLMotionProps<"a">, "children" | "initial">);

  function useDesktopAnimation(): boolean {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const update = () => setEnabled(media.matches);

    update();
    media.addEventListener("change", update);

    return () => media.removeEventListener("change", update);
  }, []);

  return enabled;
}

export function ResponsiveMotion(
  props: ResponsiveMotionProps,
): React.JSX.Element {
  const {
    as = "div",
    children,
    delay = 0,
    ...rest
  } = props;

  const animateOnDesktop = useDesktopAnimation();

  const animationProps = animateOnDesktop
    ? {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.1 },
        transition: {
          duration: 0.5,
          delay,
          ease: "easeOut" as const,
        },
      }
    : {
        initial: false as const,
        animate: { opacity: 1, y: 0 },
      };

  const key = animateOnDesktop ? "desktop" : "mobile";

  if (as === "article") {
    return (
      <motion.article
        key={key}
        {...(rest as Omit<HTMLMotionProps<"article">, "children" | "initial">)}
        {...animationProps}
      >
        {children}
      </motion.article>
    );
  }

  if (as === "a") {
    return (
      <motion.a
        key={key}
        {...(rest as Omit<HTMLMotionProps<"a">, "children" | "initial">)}
        {...animationProps}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      key={key}
      {...(rest as Omit<HTMLMotionProps<"div">, "children" | "initial">)}
      {...animationProps}
    >
      {children}
    </motion.div>
  );
}