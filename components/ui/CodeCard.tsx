"use client";

import { useMemo } from "react";

type CodeCardProps = {
  cardAriaLabel: string;
  filename: string;
  language: string;
  code: string;
};

type Token = { type: string; value: string };

const KEYWORDS = new Set([
  "import", "from", "export", "default", "const", "let", "var",
  "function", "return", "if", "else", "for", "while", "type",
  "interface", "class", "extends", "new", "await", "async", "in",
  "of", "true", "false", "null", "undefined",
]);

function tokenize(code: string): Token[] {
  const tokens: Token[] = [];
  const regex =
    /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|(["'`])(?:\\.|(?!\2).)*\2|(\b\d+(?:\.\d+)?\b)|([A-Za-z_$][\w$]*)|(\s+)|([^\s\w])/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(code)) !== null) {
    const [raw, comment, quote, number, word, space, punct] = match;
    if (comment) tokens.push({ type: "comment", value: raw });
    else if (quote) tokens.push({ type: "string", value: raw });
    else if (number) tokens.push({ type: "number", value: raw });
    else if (word) {
      const next = regex.lastIndex < code.length ? code[regex.lastIndex] : "";
      if (KEYWORDS.has(word)) tokens.push({ type: "keyword", value: word });
      else if (next === "(") tokens.push({ type: "function", value: word });
      else if (/^[A-Z]/.test(word)) tokens.push({ type: "type", value: word });
      else tokens.push({ type: "plain", value: word });
    } else if (space) tokens.push({ type: "plain", value: raw });
    else if (punct) tokens.push({ type: "punct", value: raw });
  }
  return tokens;
}

const TOKEN_CLASS: Record<string, string> = {
  comment: "text-(--code-comment) italic",
  string: "text-(--code-string)",
  number: "text-(--code-number)",
  keyword: "text-(--code-keyword)",
  function: "text-(--code-function)",
  type: "text-(--code-type)",
  punct: "text-(--code-punct)",
  plain: "text-(--code-foreground)",
};

export function CodeCard(props: CodeCardProps): React.JSX.Element {
  const tokens = useMemo(() => tokenize(props.code), [props.code]);

  return (
    <div
      className="overflow-hidden rounded-[10px] border border-solid border-(--border) bg-(--code-background) shadow-[0_16px_45px_var(--shadow),0_2px_5px_var(--shadow)]"
      aria-label={props.cardAriaLabel}
    >
      <div className="flex h-9.5 items-center gap-2.25 border-b border-solid border-b-(--border) bg-(--surface-2) px-3.25 font-mono text-sm text-(--muted)">
        <span className="size-2 shrink-0 rounded-full bg-(--accent)" aria-hidden="true" />
        <span>{props.filename}</span>
        <span className="ml-auto text-sm text-(--subtle)">{props.language}</span>
      </div>
      <pre className="tab-2 overflow-x-auto p-4.5 text-xs leading-[1.8] text-(--code-foreground) font-mono md:text-sm">
        <code>
          {tokens.map((token, i) => (
            <span key={i} className={TOKEN_CLASS[token.type] ?? TOKEN_CLASS.plain}>
              {token.value}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}