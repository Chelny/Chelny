"use client";

import {
  Children,
  createContext,
  useContext,
} from "react";

export const SectionNumberContext = createContext<number | null>(null);

type SectionNumberProviderProps = {
  children: React.ReactNode;
};

export function SectionNumberProvider(
  props: SectionNumberProviderProps,
): React.JSX.Element {
  return (
    <>
      {Children.map(props.children, (child, index) => (
        <SectionNumberContext.Provider value={index + 1}>
          {child}
        </SectionNumberContext.Provider>
      ))}
    </>
  );
}

export function useSectionNumber(): number {
  const number: number | null = useContext(SectionNumberContext);

  if (number === null) {
    throw new Error(
      "useSectionNumber must be used within a SectionNumberProvider",
    );
  }

  return number;
}