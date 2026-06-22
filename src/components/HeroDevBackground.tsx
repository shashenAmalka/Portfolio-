import React from 'react';

/*
 * Performance-optimized developer background.
 * - Reduced particles from 30 → 12, no box-shadow glow (uses opacity only)
 * - Removed backdrop-filter on terminals (very expensive)
 * - Removed scan-line animation (constant repaints)
 * - Orbit rings reduced to 2, use GPU-friendly transforms
 * - All animated elements use will-change + translateZ(0) for GPU layer promotion
 * - CSS containment on the root to isolate reflows
 */

const codeSymbols = [
  { text: '</>', x: '6%', y: '12%', size: 'text-3xl', delay: '0s', duration: '18s' },
  { text: '{ }', x: '88%', y: '18%', size: 'text-4xl', delay: '2s', duration: '22s' },
  { text: '=>', x: '10%', y: '78%', size: 'text-2xl', delay: '4s', duration: '16s' },
  { text: '/**/', x: '92%', y: '72%', size: 'text-xl', delay: '1s', duration: '20s' },
  { text: 'const', x: '3%', y: '42%', size: 'text-base', delay: '3s', duration: '24s' },
  { text: 'async', x: '94%', y: '42%', size: 'text-base', delay: '5s', duration: '19s' },
  { text: '[ ]', x: '14%', y: '90%', size: 'text-3xl', delay: '2.5s', duration: '21s' },
  { text: '( )', x: '82%', y: '88%', size: 'text-2xl', delay: '6s', duration: '17s' },
  { text: '&&', x: '22%', y: '8%', size: 'text-2xl', delay: '1.5s', duration: '23s' },
  { text: '<AI/>', x: '96%', y: '58%', size: 'text-base', delay: '0.5s', duration: '18s' },
];

/* Only 12 particles, simpler rendering */
const particles = [
  { x: '8%', y: '20%', size: 3, delay: '0s', dur: '5s', c: 0 },
  { x: '92%', y: '15%', size: 4, delay: '1s', dur: '6s', c: 1 },
  { x: '15%', y: '70%', size: 3, delay: '2s', dur: '4s', c: 2 },
  { x: '85%', y: '75%', size: 4, delay: '0.5s', dur: '7s', c: 0 },
  { x: '50%', y: '5%', size: 2, delay: '3s', dur: '5s', c: 1 },
  { x: '30%', y: '85%', size: 3, delay: '1.5s', dur: '6s', c: 2 },
  { x: '70%', y: '90%', size: 2, delay: '4s', dur: '4s', c: 0 },
  { x: '5%', y: '50%', size: 3, delay: '2.5s', dur: '7s', c: 1 },
  { x: '95%', y: '50%', size: 3, delay: '3.5s', dur: '5s', c: 2 },
  { x: '40%', y: '10%', size: 2, delay: '1s', dur: '6s', c: 0 },
  { x: '60%', y: '95%', size: 4, delay: '0s', dur: '5s', c: 1 },
  { x: '20%', y: '35%', size: 2, delay: '4.5s', dur: '8s', c: 2 },
];

const COLORS = [
  'hsl(262 83% 65%)',
  'hsl(192 95% 68%)',
  'hsl(330 85% 60%)',
];

const HeroDevBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
      style={{ contain: 'layout style paint' }}
    >

      {/* ── Grid pattern (pure CSS, no animation) ── */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.06,
          backgroundImage: `
            linear-gradient(hsl(262 83% 65% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(262 83% 65% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
        }}
      />

      {/* ── Lightweight particles (no box-shadow, opacity-only animation) ── */}
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: COLORS[p.c],
            animation: `particleFade ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
            willChange: 'opacity, transform',
            transform: 'translateZ(0)',
          }}
        />
      ))}

      {/* ── 2 orbit rings (GPU-friendly rotation) ── */}
      <div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: '500px',
          height: '500px',
          border: '1px solid hsl(192 95% 68% / 0.12)',
          animation: 'orbitSpin 20s linear infinite',
          willChange: 'transform',
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: '6px', height: '6px',
            top: '-3px', left: '50%', transform: 'translateX(-50%)',
            background: 'hsl(192 95% 68%)',
          }}
        />
      </div>
      <div
        className="absolute left-1/2 top-1/2 rounded-full"
        style={{
          width: '650px',
          height: '650px',
          border: '1px solid hsl(262 83% 65% / 0.08)',
          animation: 'orbitSpin 30s linear infinite reverse',
          animationDelay: '2s',
          willChange: 'transform',
        }}
      >
        <div
          className="absolute rounded-full"
          style={{
            width: '5px', height: '5px',
            top: '-2.5px', left: '50%', transform: 'translateX(-50%)',
            background: 'hsl(262 83% 65%)',
          }}
        />
      </div>

      {/* ── Large radial glow (static, no animation — cheapest way) ── */}
      <div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 65% / 0.12) 0%, hsl(192 95% 68% / 0.06) 35%, transparent 65%)',
        }}
      />

      {/* ── Floating code symbols (transform-only animation, GPU-friendly) ── */}
      {codeSymbols.map((symbol, i) => (
        <span
          key={i}
          className={`absolute font-mono ${symbol.size} font-bold select-none`}
          style={{
            left: symbol.x,
            top: symbol.y,
            color: `${COLORS[i % 3].replace(')', ' / 0.2)')}`,
            animation: `codeSymbolFloat ${symbol.duration} ease-in-out infinite`,
            animationDelay: symbol.delay,
            willChange: 'transform',
            transform: 'translateZ(0)',
          }}
        >
          {symbol.text}
        </span>
      ))}

      {/* ── Corner bracket decorations (static — zero perf cost) ── */}
      <div className="absolute top-[8%] left-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.15]">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />
      </div>
      <div className="absolute top-[8%] right-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.15]">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[hsl(192,95%,68%)] to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[hsl(192,95%,68%)] to-transparent" />
      </div>
      <div className="absolute bottom-[8%] left-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.15]">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[hsl(330,85%,60%)] to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-[hsl(330,85%,60%)] to-transparent" />
      </div>
      <div className="absolute bottom-[8%] right-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.15]">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-primary to-transparent" />
      </div>

      {/* ── Terminal snippet (left) — NO backdrop-filter ── */}
      <div
        className="absolute top-[15%] left-[3%] font-mono text-xs leading-loose opacity-[0.12] hidden lg:block rounded-lg p-3"
        style={{
          background: 'hsl(240 15% 8% / 0.7)',
          border: '1px solid hsl(262 83% 65% / 0.15)',
          animation: 'codeSymbolFloat 25s ease-in-out infinite',
          animationDelay: '2s',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <span style={{ color: 'hsl(192 95% 68% / 0.7)' }}>$</span>
        <span style={{ color: 'hsl(0 0% 70%)' }}> npm run dev</span><br />
        <span style={{ color: 'hsl(120 60% 50% / 0.7)' }}>✓</span>
        <span style={{ color: 'hsl(0 0% 50%)' }}> ready in 320ms</span><br />
        <span style={{ color: 'hsl(0 0% 40%)' }}>→</span>
        <span style={{ color: 'hsl(262 83% 65% / 0.7)' }}> localhost:5173</span>
      </div>

      {/* ── Code snippet (right) — NO backdrop-filter ── */}
      <div
        className="absolute bottom-[20%] right-[3%] font-mono text-xs leading-loose opacity-[0.12] hidden lg:block rounded-lg p-3"
        style={{
          background: 'hsl(240 15% 8% / 0.7)',
          border: '1px solid hsl(192 95% 68% / 0.15)',
          animation: 'codeSymbolFloat 23s ease-in-out infinite',
          animationDelay: '4s',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-2 h-2 rounded-full bg-red-500/60" />
          <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
          <div className="w-2 h-2 rounded-full bg-green-500/60" />
        </div>
        <span style={{ color: 'hsl(330 85% 60% / 0.8)' }}>import</span>
        <span style={{ color: 'hsl(0 0% 70%)' }}> {'{ '}AI{' }'} </span>
        <span style={{ color: 'hsl(330 85% 60% / 0.8)' }}>from</span>
        <span style={{ color: 'hsl(120 60% 50% / 0.7)' }}> '@core'</span><br />
        <span style={{ color: 'hsl(262 83% 65% / 0.8)' }}>const</span>
        <span style={{ color: 'hsl(192 95% 68% / 0.7)' }}> model</span>
        <span style={{ color: 'hsl(0 0% 50%)' }}> = </span>
        <span style={{ color: 'hsl(262 83% 65% / 0.8)' }}>await</span><br />
        <span style={{ color: 'hsl(0 0% 50%)' }}>&nbsp;&nbsp;AI.</span>
        <span style={{ color: 'hsl(50 90% 60% / 0.8)' }}>generate</span>
        <span style={{ color: 'hsl(0 0% 50%)' }}>()</span>
      </div>

      {/* ── Binary streams (static text, transform-only animation) ── */}
      <div
        className="absolute top-[5%] left-[1%] font-mono text-[10px] leading-relaxed hidden md:block"
        style={{
          color: 'hsl(192 95% 68% / 0.08)',
          animation: 'binaryScroll 12s linear infinite',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        01001010<br />11010110<br />00101101<br />10110010<br />01101001
      </div>
      <div
        className="absolute top-[5%] right-[1%] font-mono text-[10px] leading-relaxed hidden md:block text-right"
        style={{
          color: 'hsl(262 83% 65% / 0.08)',
          animation: 'binaryScroll 15s linear infinite',
          animationDelay: '3s',
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        10110101<br />01001011<br />11100010<br />00011101<br />10100110
      </div>
    </div>
  );
};

export default HeroDevBackground;
