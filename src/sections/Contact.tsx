import { useRef, useEffect } from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';
import { useMagnetic } from '../hooks/useMagnetic';

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const primaryBtnRef = useMagnetic(6);
  const secondaryBtnRef = useMagnetic(4);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            lineRef.current?.classList.add('visible');
            el.querySelectorAll('.contact-reveal').forEach((child, i) => {
              setTimeout(() => child.classList.add('visible'), i * 100);
            });
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{ background: 'var(--bg-primary)', padding: '120px 0' }}
    >
      <div style={{ maxWidth: 680, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <div ref={lineRef} className="section-line" style={{ margin: '0 auto 20px' }} />
          <div
            className="reveal contact-reveal font-dm-mono"
            style={{ fontSize: 11, color: 'var(--accent-gold)', letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}
          >
            Let's Connect
          </div>
          <h2
            className="reveal contact-reveal font-cormorant"
            style={{ fontSize: 'clamp(30px, 4vw, 48px)', fontWeight: 300, color: 'var(--text-primary)', lineHeight: 1.15 }}
          >
            Available for Senior Technical BA Opportunities
          </h2>
        </div>

        <div className="reveal contact-reveal glass-card" style={{ padding: '48px 40px', textAlign: 'center' }}>
          <p
            className="font-dm-sans"
            style={{ fontSize: 16, color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: 40 }}
          >
            Open to senior technical business analyst roles within banking, financial services, and enterprise software delivery teams.
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 44, alignItems: 'center' }}>
            <a
              href="https://linkedin.com/in/shaistagulnaar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tertiary font-dm-sans"
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <Linkedin size={16} color="var(--accent-gold)" />
              linkedin.com/in/shaistagulnaar
            </a>
            <a
              href="mailto:shaistagulnaar.sg@gmail.com"
              className="btn-tertiary font-dm-sans"
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <Mail size={16} color="var(--accent-gold)" />
              shaistagulnaar.sg@gmail.com
            </a>
            <div
              className="font-dm-sans"
              style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--text-secondary)' }}
            >
              <Phone size={16} color="var(--accent-gold)" />
              +1 (312) 383-0490
            </div>
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
            <a
              ref={primaryBtnRef as React.RefObject<HTMLAnchorElement>}
              href="https://linkedin.com/in/shaistagulnaar"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Connect on LinkedIn
            </a>
            <a
              ref={secondaryBtnRef as React.RefObject<HTMLAnchorElement>}
              href="mailto:shaistagulnaar.sg@gmail.com"
              className="btn-secondary"
            >
              Send an Email
            </a>
            <button
              className="btn-tertiary"
              style={{ alignSelf: 'center' }}
              onClick={() => {
                fetch('https://drive.google.com/uc?export=download&id=1ngPCz-ouGofjIBnTVhpQ2WHV0ioMWtpw')
                  .then((res) => res.blob())
                  .then((blob) => {
                    const url = URL.createObjectURL(blob);
                    const a = document.createElement('a');
                    a.href = url;
                    a.download = 'Shaista_Gulnaar_Senior_TechBA_Resume.pdf';
                    a.click();
                    URL.revokeObjectURL(url);
                  });
              }}
            >
              Download Resume →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
