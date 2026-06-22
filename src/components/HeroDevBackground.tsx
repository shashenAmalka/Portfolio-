import React from 'react';

/* ── Static code symbols (no floating animations) ── */
const codeSymbols = [
  { text: '</>', x: '6%', y: '12%', size: 'text-3xl' },
  { text: '{ }', x: '88%', y: '18%', size: 'text-4xl' },
  { text: '=>', x: '10%', y: '78%', size: 'text-2xl' },
  { text: '/**/', x: '92%', y: '72%', size: 'text-xl' },
  { text: 'const', x: '3%', y: '42%', size: 'text-base' },
  { text: 'async', x: '94%', y: '42%', size: 'text-base' },
  { text: '[ ]', x: '14%', y: '90%', size: 'text-3xl' },
  { text: '( )', x: '82%', y: '88%', size: 'text-2xl' },
  { text: '&&', x: '22%', y: '8%', size: 'text-2xl' },
  { text: '||', x: '72%', y: '10%', size: 'text-xl' },
  { text: '...', x: '2%', y: '62%', size: 'text-3xl' },
  { text: '<AI/>', x: '96%', y: '58%', size: 'text-base' },
];

/* ── Static particles (no animations) ── */
const particles = [
  { id: 0, x: '12%', y: '25%', size: 4, color: 'hsl(262 83% 65%)' },
  { id: 1, x: '85%', y: '30%', size: 3, color: 'hsl(192 95% 68%)' },
  { id: 2, x: '25%', y: '75%', size: 5, color: 'hsl(330 85% 60%)' },
  { id: 3, x: '78%', y: '80%', size: 4, color: 'hsl(262 83% 65%)' },
  { id: 4, x: '45%', y: '15%', size: 3, color: 'hsl(192 95% 68%)' },
  { id: 5, x: '55%', y: '85%', size: 5, color: 'hsl(330 85% 60%)' },
  { id: 6, x: '8%', y: '55%', size: 4, color: 'hsl(262 83% 65%)' },
  { id: 7, x: '90%', y: '50%', size: 3, color: 'hsl(192 95% 68%)' },
];

/* ── Static concentric orbit rings (no spinning animations) ── */
const orbitRings = [
  { size: 500, opacity: 0.06, rotation: 15 },
  { size: 400, opacity: 0.05, rotation: -25 },
  { size: 650, opacity: 0.03, rotation: 45 },
];

const HeroDevBackground: React.FC = () => {
  return (
    <div
      className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
      style={{ contain: 'layout style paint' }}
    >
      {/* ── Grid pattern (pure CSS, highly optimized) ── */}
      <div
        className="absolute inset-0"
        style={{
          opacity: 0.04,
          backgroundImage: `
            linear-gradient(hsl(262 83% 65% / 0.3) 1px, transparent 1px),
            linear-gradient(90deg, hsl(262 83% 65% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* ── Static glow behind 3D model ── */}
      <div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, hsl(262 83% 65% / 0.15) 0%, hsl(192 95% 68% / 0.05) 40%, transparent 70%)',
        }}
      />

      {/* ── Large radial glow (static) ── */}
      <div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 65% / 0.12) 0%, hsl(192 95% 68% / 0.06) 35%, transparent 65%)',
        }}
      />

      {/* ── Static particles ── */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full opacity-[0.25]"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 6}px ${p.color}`,
          }}
        />
      ))}

      {/* ── Static concentric orbit rings around the 3D model ── */}
      {orbitRings.map((ring, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-[45%] rounded-full border border-dashed"
          style={{
            width: `${ring.size}px`,
            height: `${ring.size}px`,
            borderColor: `hsl(192 95% 68% / 0.2)`,
            opacity: ring.opacity,
            transform: `translate(-50%, -50%) rotate(${ring.rotation}deg)`,
            transformOrigin: 'center center',
          }}
        >
          {/* Static dot on each orbit ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: '6px',
              height: '6px',
              top: '-3px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'hsl(192 95% 68%)',
              boxShadow: '0 0 8px hsl(192 95% 68%)',
            }}
          />
        </div>
      ))}

      {/* ── Static code symbols ── */}
      {codeSymbols.map((symbol, i) => (
        <span
          key={i}
          className={`absolute font-mono ${symbol.size} font-bold select-none`}
          style={{
            left: symbol.x,
            top: symbol.y,
            color: i % 3 === 0
              ? 'hsl(262 83% 65% / 0.15)'
              : i % 3 === 1
                ? 'hsl(192 95% 68% / 0.15)'
                : 'hsl(330 85% 60% / 0.12)',
            textShadow: i % 3 === 0
              ? '0 0 20px hsl(262 83% 65% / 0.2)'
              : i % 3 === 1
                ? '0 0 20px hsl(192 95% 68% / 0.2)'
                : '0 0 20px hsl(330 85% 60% / 0.15)',
          }}
        >
          {symbol.text}
        </span>
      ))}

      {/* ── Static horizontal scan line effect ── */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(192 95% 68% / 0.15) 2px, hsl(192 95% 68% / 0.15) 4px)',
        }}
      />

      {/* ── Corner bracket decorations ── */}
      {/* Top-left */}
      <div className="absolute top-[8%] left-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.12]">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />
      </div>
      {/* Top-right */}
      <div className="absolute top-[8%] right-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.12]">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[hsl(192,95%,68%)] to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[hsl(192,95%,68%)] to-transparent" />
      </div>
      {/* Bottom-left */}
      <div className="absolute bottom-[8%] left-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.12]">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[hsl(330,85%,60%)] to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-[hsl(330,85%,60%)] to-transparent" />
      </div>
      {/* Bottom-right */}
      <div className="absolute bottom-[8%] right-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.12]">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-primary to-transparent" />
      </div>

      {/* ── Static Terminal snippet (left side) ── */}
      <div
        className="absolute top-[15%] left-[3%] font-mono text-xs leading-loose opacity-[0.15] hidden lg:block rounded-lg p-3"
        style={{
          background: 'hsl(240 15% 10% / 0.6)',
          border: '1px solid hsl(262 83% 65% / 0.2)',
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

      {/* ── Static Code snippet (right side) ── */}
      <div
        className="absolute bottom-[20%] right-[3%] font-mono text-xs leading-loose opacity-[0.15] hidden lg:block rounded-lg p-3"
        style={{
          background: 'hsl(240 15% 10% / 0.6)',
          border: '1px solid hsl(192 95% 68% / 0.2)',
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

      {/* ── Static Binary streams on edges ── */}
      <div
        className="absolute top-[5%] left-[1%] font-mono text-[10px] leading-relaxed opacity-[0.05] hidden md:block"
        style={{ color: 'hsl(192 95% 68%)' }}
      >
        01001010<br />11010110<br />00101101<br />10110010<br />01101001<br />11001010<br />00110101
      </div>
      <div
        className="absolute top-[5%] right-[1%] font-mono text-[10px] leading-relaxed opacity-[0.05] hidden md:block text-right"
        style={{ color: 'hsl(262 83% 65%)' }}
      >
        10110101<br />01001011<br />11100010<br />00011101<br />10100110<br />01110011<br />11001100
      </div>
    </div>
  );
};

export default HeroDevBackground;
