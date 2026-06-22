import React from 'react';

/* ── Floating code symbols with glow ── */
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
  { text: '||', x: '72%', y: '10%', size: 'text-xl', delay: '3.5s', duration: '15s' },
  { text: '...', x: '2%', y: '62%', size: 'text-3xl', delay: '4.5s', duration: '20s' },
  { text: '<AI/>', x: '96%', y: '58%', size: 'text-base', delay: '0.5s', duration: '18s' },
];

/* ── Glowing particles ── */
const particles = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  size: 2 + Math.random() * 4,
  delay: `${Math.random() * 6}s`,
  duration: `${3 + Math.random() * 5}s`,
  color: i % 3 === 0 ? 'hsl(262 83% 65%)' : i % 3 === 1 ? 'hsl(192 95% 68%)' : 'hsl(330 85% 60%)',
}));

/* ── Orbit ring data ── */
const orbitRings = [
  { size: 500, mdSize: 700, opacity: 0.08, delay: '0s', duration: '20s', direction: 'normal' },
  { size: 400, mdSize: 550, opacity: 0.06, delay: '2s', duration: '25s', direction: 'reverse' },
  { size: 650, mdSize: 900, opacity: 0.04, delay: '4s', duration: '30s', direction: 'normal' },
];

const HeroDevBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-[1] pointer-events-none overflow-hidden">

      {/* ── Animated grid pattern ── */}
      <div className="absolute inset-0" style={{ opacity: 0.06 }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(262 83% 65% / 0.3) 1px, transparent 1px),
              linear-gradient(90deg, hsl(262 83% 65% / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 20%, transparent 70%)',
          }}
        />
      </div>

      {/* ── Glowing particles scattered across ── */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.x,
            top: p.y,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 3}px ${p.color}, 0 0 ${p.size * 6}px ${p.color}`,
            animation: `particleFade ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}

      {/* ── Orbit rings around 3D model ── */}
      {orbitRings.map((ring, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: `${ring.size}px`,
            height: `${ring.size}px`,
            border: `1px solid hsl(192 95% 68% / ${ring.opacity * 4})`,
            opacity: ring.opacity,
            animation: `orbitSpin ${ring.duration} linear infinite ${ring.direction}`,
            animationDelay: ring.delay,
            transformOrigin: 'center center',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Dot on the orbit ring */}
          <div
            className="absolute rounded-full"
            style={{
              width: '6px',
              height: '6px',
              top: '-3px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'hsl(192 95% 68%)',
              boxShadow: '0 0 10px hsl(192 95% 68%), 0 0 25px hsl(192 95% 68% / 0.6)',
            }}
          />
        </div>
      ))}

      {/* ── Large radial glow behind the model ── */}
      <div
        className="absolute left-1/2 top-[45%] -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(262 83% 65% / 0.15) 0%, hsl(192 95% 68% / 0.08) 35%, hsl(330 85% 60% / 0.04) 55%, transparent 70%)',
          animation: 'radialPulse 6s ease-in-out infinite',
        }}
      />

      {/* ── Floating code symbols ── */}
      {codeSymbols.map((symbol, i) => (
        <span
          key={i}
          className={`absolute font-mono ${symbol.size} font-bold select-none`}
          style={{
            left: symbol.x,
            top: symbol.y,
            color: i % 3 === 0
              ? 'hsl(262 83% 65% / 0.2)'
              : i % 3 === 1
                ? 'hsl(192 95% 68% / 0.18)'
                : 'hsl(330 85% 60% / 0.15)',
            textShadow: i % 3 === 0
              ? '0 0 20px hsl(262 83% 65% / 0.3), 0 0 40px hsl(262 83% 65% / 0.1)'
              : i % 3 === 1
                ? '0 0 20px hsl(192 95% 68% / 0.3), 0 0 40px hsl(192 95% 68% / 0.1)'
                : '0 0 20px hsl(330 85% 60% / 0.3), 0 0 40px hsl(330 85% 60% / 0.1)',
            animation: `codeSymbolFloat ${symbol.duration} ease-in-out infinite`,
            animationDelay: symbol.delay,
          }}
        >
          {symbol.text}
        </span>
      ))}

      {/* ── Horizontal scan line effect ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(192 95% 68% / 0.15) 2px, hsl(192 95% 68% / 0.15) 4px)',
          animation: 'scanlineMove 8s linear infinite',
        }}
      />

      {/* ── Corner bracket decorations ── */}
      {/* Top-left */}
      <div className="absolute top-[8%] left-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.15]">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
        <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />
      </div>
      {/* Top-right */}
      <div className="absolute top-[8%] right-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.15]">
        <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-[hsl(192,95%,68%)] to-transparent" />
        <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-[hsl(192,95%,68%)] to-transparent" />
      </div>
      {/* Bottom-left */}
      <div className="absolute bottom-[8%] left-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.15]">
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[hsl(330,85%,60%)] to-transparent" />
        <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-[hsl(330,85%,60%)] to-transparent" />
      </div>
      {/* Bottom-right */}
      <div className="absolute bottom-[8%] right-[4%] w-16 h-16 md:w-24 md:h-24 opacity-[0.15]">
        <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary to-transparent" />
        <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-primary to-transparent" />
      </div>

      {/* ── Terminal snippet (left side) ── */}
      <div
        className="absolute top-[15%] left-[3%] font-mono text-xs leading-loose opacity-[0.12] hidden lg:block rounded-lg p-3"
        style={{
          background: 'hsl(240 15% 10% / 0.5)',
          border: '1px solid hsl(262 83% 65% / 0.15)',
          backdropFilter: 'blur(8px)',
          animation: 'codeSymbolFloat 25s ease-in-out infinite',
          animationDelay: '2s',
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

      {/* ── Code snippet (right side) ── */}
      <div
        className="absolute bottom-[20%] right-[3%] font-mono text-xs leading-loose opacity-[0.12] hidden lg:block rounded-lg p-3"
        style={{
          background: 'hsl(240 15% 10% / 0.5)',
          border: '1px solid hsl(192 95% 68% / 0.15)',
          backdropFilter: 'blur(8px)',
          animation: 'codeSymbolFloat 23s ease-in-out infinite',
          animationDelay: '4s',
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

      {/* ── Binary streams on edges ── */}
      <div
        className="absolute top-[5%] left-[1%] font-mono text-[10px] leading-relaxed opacity-[0.06] hidden md:block"
        style={{ color: 'hsl(192 95% 68%)', animation: 'binaryScroll 12s linear infinite' }}
      >
        01001010<br />11010110<br />00101101<br />10110010<br />01101001<br />11001010<br />00110101
      </div>
      <div
        className="absolute top-[5%] right-[1%] font-mono text-[10px] leading-relaxed opacity-[0.06] hidden md:block text-right"
        style={{ color: 'hsl(262 83% 65%)', animation: 'binaryScroll 15s linear infinite', animationDelay: '3s' }}
      >
        10110101<br />01001011<br />11100010<br />00011101<br />10100110<br />01110011<br />11001100
      </div>
    </div>
  );
};

export default HeroDevBackground;
