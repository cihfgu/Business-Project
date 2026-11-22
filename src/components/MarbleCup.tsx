import type { Product } from '@/data/products';

interface MarbleCupProps {
  tone?: string;
  variant?: number;
  className?: string;
}

const VEINS: string[][] = [
  [
    'M28 44 C42 60, 46 96, 38 150',
    'M44 30 C58 70, 50 120, 62 170',
    'M22 90 C36 110, 34 140, 44 168',
  ],
  [
    'M30 40 C50 80, 40 130, 56 172',
    'M48 24 C40 60, 66 110, 52 150',
    'M60 60 C70 100, 58 140, 66 175',
  ],
  [
    'M26 60 C44 90, 36 130, 50 170',
    'M52 28 C62 70, 48 110, 64 160',
    'M34 110 C46 130, 42 155, 52 174',
  ],
  [
    'M32 34 C44 76, 54 120, 40 168',
    'M50 44 C60 90, 44 130, 60 172',
    'M24 78 C40 100, 48 140, 38 166',
  ],
  [
    'M40 26 C36 70, 58 120, 46 170',
    'M28 54 C48 88, 38 132, 54 168',
    'M56 90 C64 118, 54 148, 62 172',
  ],
  [
    'M30 48 C46 84, 42 128, 58 166',
    'M46 30 C42 74, 62 116, 50 158',
    'M26 100 C42 122, 46 150, 40 170',
  ],
];

export function MarbleCup({ tone = '#d9cfc0', variant = 0, className = '' }: MarbleCupProps) {
  const veins = VEINS[variant % VEINS.length];
  const gid = `gloss-${variant}-${tone.replace('#', '')}`;

  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-hidden="true"
      className={`h-full w-full ${className}`}
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#3a342e" stopOpacity="0.14" />
        </linearGradient>
      </defs>

      <ellipse cx="100" cy="176" rx="56" ry="7" fill="#3a342e" opacity="0.1" />

      <path
        d="M56 42 h78 v46 c0 24 -14 42 -34 46 l0 26 h14 a6 6 0 0 1 6 6 v4 a2 2 0 0 1 -2 2 h-52 a2 2 0 0 1 -2 -2 v-4 a6 6 0 0 1 6 -6 h14 v-26 c-20 -4 -34 -22 -34 -46 z"
        fill={tone}
      />
      <path
        d="M56 42 h78 v46 c0 24 -14 42 -34 46 l0 26 h14 a6 6 0 0 1 6 6 v4 a2 2 0 0 1 -2 2 h-52 a2 2 0 0 1 -2 -2 v-4 a6 6 0 0 1 6 -6 h14 v-26 c-20 -4 -34 -22 -34 -46 z"
        fill={`url(#${gid})`}
      />
      <path
        d="M134 52 c16 4 24 12 24 24 0 14 -12 24 -28 26"
        fill="none"
        stroke={tone}
        strokeWidth="9"
        strokeLinecap="round"
      />
      <path
        d="M134 52 c16 4 24 12 24 24 0 14 -12 24 -28 26"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.25"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {veins.map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke="#ffffff"
          strokeOpacity={i === 0 ? 0.5 : 0.3}
          strokeWidth={i === 0 ? 2 : 1.1}
          strokeLinecap="round"
        />
      ))}
      {veins.map((d, i) => (
        <path
          key={`s-${i}`}
          d={d}
          fill="none"
          stroke="#3a342e"
          strokeOpacity="0.08"
          strokeWidth={i === 0 ? 0.8 : 0.5}
          strokeLinecap="round"
          transform="translate(1.5 0)"
        />
      ))}
    </svg>
  );
}

export function ProductImage({ product, variant }: { product: Product; variant: number }) {
  return (
    <div
      className="marble-grain flex aspect-square items-center justify-center rounded-2xl border border-[#75695d]/10 p-6"
      style={{ backgroundColor: product.tone }}
    >
      <div className="h-full w-full max-w-[220px]">
        <MarbleCup tone={product.tone} variant={variant} />
      </div>
    </div>
  );
}
