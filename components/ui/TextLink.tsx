"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function TextLink(props: TextLinkProps): React.JSX.Element {
  return (
    <a
      {...props}
      className={`underline decoration-double decoration-(--accent) underline-offset-5 decoration-[1.5px] ${props.className ?? ""}`}
    >
      {props.children}
    </a>
  );
}