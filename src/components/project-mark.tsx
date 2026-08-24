import type { ProjectMark } from "@/lib/content";

type Props = {
  mark: ProjectMark;
  className?: string;
};

export function ProjectMark({ mark, className }: Props) {
  const common = {
    viewBox: "0 0 200 140",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
    className,
    "aria-hidden": true as const,
  };

  switch (mark) {
    case "nodes":
      return (
        <svg {...common}>
          <circle cx="40" cy="36" r="6" />
          <circle cx="100" cy="28" r="8" />
          <circle cx="160" cy="44" r="6" />
          <circle cx="70" cy="88" r="7" />
          <circle cx="132" cy="96" r="9" />
          <circle cx="48" cy="118" r="5" />
          <path d="M40 36 L100 28 L160 44 M100 28 L70 88 L132 96 M70 88 L48 118 M132 96 L160 44" />
        </svg>
      );
    case "radar":
      return (
        <svg {...common}>
          <circle cx="100" cy="72" r="18" />
          <circle cx="100" cy="72" r="38" />
          <circle cx="100" cy="72" r="58" />
          <path d="M100 14 V130 M42 72 H158" />
          <path d="M100 72 L148 38" />
        </svg>
      );
    case "flow":
      return (
        <svg {...common}>
          <path d="M16 40 C50 40, 50 100, 84 100 H186" />
          <path d="M16 100 C50 100, 50 40, 84 40 H186" />
          <circle cx="16" cy="40" r="4" fill="currentColor" stroke="none" />
          <circle cx="16" cy="100" r="4" fill="currentColor" stroke="none" />
          <circle cx="186" cy="40" r="4" fill="currentColor" stroke="none" />
          <circle cx="186" cy="100" r="4" fill="currentColor" stroke="none" />
        </svg>
      );
    case "grid":
      return (
        <svg {...common}>
          <rect x="28" y="22" width="48" height="32" />
          <rect x="88" y="22" width="84" height="32" />
          <rect x="28" y="64" width="144" height="24" />
          <rect x="28" y="98" width="64" height="24" />
          <rect x="104" y="98" width="68" height="24" />
        </svg>
      );
    case "ledger":
      return (
        <svg {...common}>
          <path d="M36 28 H164 M36 52 H164 M36 76 H164 M36 100 H164 M36 124 H120" />
          <path d="M64 28 V124" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}>
          <path d="M100 18 L162 40 V78 C162 110 132 128 100 136 C68 128 38 110 38 78 V40 Z" />
          <path d="M78 76 L94 92 L126 56" />
        </svg>
      );
  }
}
