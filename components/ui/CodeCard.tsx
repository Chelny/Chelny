"use client";

type CodeCardProps = {
  cardAriaLabel: string;
  filename: string;
  language: string;
  code: string;
};

export function CodeCard(props: CodeCardProps): React.JSX.Element {
  return (
    <div
      className="overflow-hidden rounded-[10px] border border-solid border-(--border) bg-(--code-background) shadow-[0_16px_45px_var(--shadow),0_2px_5px_var(--shadow)]"
      aria-label={props.cardAriaLabel}
    >
      <div className="flex h-9.5 items-center gap-2.25 border-b border-solid border-b-(--border) bg-(--surface-2) px-3.25 font-mono text-sm text-(--muted)">
        <span
          className="size-2 shrink-0 rounded-full bg-(--accent)"
          aria-hidden="true"
        />

        <span>{props.filename}</span>

        <span className="ml-auto text-sm text-(--subtle)">
          {props.language}
        </span>
      </div>

      <pre className="tab-2 overflow-x-auto p-4.5 text-xs leading-[1.8] text-(--code-foreground) font-mono md:text-sm">
        <code>{props.code}</code>
      </pre>
    </div>
  );
}