import { useEffect, useRef } from 'react';
import { useMagnetic } from '../hooks/useMagnetic';

const focusTags = [
  'Messaging Systems',
  'Financial Reporting Platforms',
  'Cloud Migration Programs',
  'ETL & Data Validation',
  'Enterprise Integrations',
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useMagnetic(6);
  const secondaryBtnRef = useMagnetic(4);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (lineRef.current) lineRef.current.classList.add('visible');
      const children = containerRef.current?.querySelectorAll('.hero-reveal');
      children?.forEach((el, i) => {
        setTimeout(() => el.classList.add('visible'), 200 + i * 120);
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--bg-primary)',
        paddingTop: 68,
      }}
    >
      {/* Ambient orbs */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 600,
          height: 600,
          background: 'rgba(201, 169, 110, 0.06)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          top: -100,
          right: -150,
          pointerEvents: 'none',
          animation: 'float 8s ease-in-out infinite alternate',
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 400,
          height: 400,
          background: 'rgba(100, 80, 200, 0.04)',
          borderRadius: '50%',
          filter: 'blur(120px)',
          bottom: 50,
          left: -100,
          pointerEvents: 'none',
          animation: 'float 8s ease-in-out infinite alternate-reverse',
        }}
      />

      {/* Content */}
      <div
        ref={containerRef}
        style={{
          maxWidth: 860,
          width: '100%',
          padding: '0 32px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* Section line */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
          <div ref={lineRef} className="section-line" />
        </div>

        {/* Label */}
        <div
          className="hero-reveal reveal font-dm-mono"
          style={{
            fontSize: 11,
            color: 'var(--accent-gold)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 16,
          }}
        >
          Senior Technical Business Analyst
        </div>

        {/* Name */}
        <div
          className="hero-reveal reveal font-cormorant"
          style={{
            fontSize: 'clamp(28px, 4vw, 36px)',
            fontWeight: 400,
            color: 'var(--accent-gold-light)',
            letterSpacing: '0.05em',
            marginBottom: 20,
          }}
        >
          Shaista Gulnaar
        </div>

        {/* Headline */}
        <h1
          className="hero-reveal reveal font-cormorant"
          style={{
            fontSize: 'clamp(40px, 7vw, 72px)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: 'var(--text-primary)',
            marginBottom: 32,
            letterSpacing: '-0.01em',
          }}
        >
          Where Business Strategy<br />Meets Engineering Execution
        </h1>

        {/* Subheadline */}
        <p
          className="hero-reveal reveal font-dm-sans"
          style={{
            fontSize: 18,
            color: 'var(--text-secondary)',
            lineHeight: 1.7,
            maxWidth: 900,
            margin: '0 auto 20px',
          }}
        >
          Embedded in cross-functional SDLC teams across banking and financial enterprises — collaborating with developers, QA engineers, DevOps, and solution architects to translate complex business requirements into structured system specifications and executable technical solutions.
        </p>

        {/* Value statement */}
        <p
          className="hero-reveal reveal font-dm-sans"
          style={{
            fontSize: 15,
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            maxWidth: 900,
            margin: '0 auto 36px',
          }}
        >
          Specialized in bridging business and engineering across large-scale banking systems by decomposing end-to-end workflows into clear functional and technical specifications spanning APIs, batch processing systems, event-driven architectures, and cloud-based data platforms.
        </p>

        {/* Tags */}
        <div
          className="hero-reveal reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 44,
          }}
        >
          {focusTags.map((tag) => (
            <span key={tag} className="tech-pill">{tag}</span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div
          className="hero-reveal reveal"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            flexWrap: 'wrap',
            marginBottom: 56,
          }}
        >
          <button
            ref={primaryBtnRef as React.RefObject<HTMLButtonElement>}
            className="btn-primary"
            onClick={() => scrollTo('case-studies')}
          >
            Explore Case Studies
          </button>
          <button
            ref={secondaryBtnRef as React.RefObject<HTMLButtonElement>}
            className="btn-secondary"
            onClick={() => scrollTo('experience')}
          >
            View Experience
          </button>
        </div>

      </div>
    </section>
  );
}
