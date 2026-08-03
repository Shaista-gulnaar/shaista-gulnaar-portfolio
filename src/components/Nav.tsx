import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#case-studies' },
  {
    label: 'Expertise',
    dropdown: [
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Execution Approach', href: '#execution-approach' },
      { label: 'Technical Environment', href: '#technical-environment' },
      { label: 'Credibility', href: '#credibility' },
    ],
  },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollSection, setScrollSection] = useState('');
  const [clickedSection, setClickedSection] = useState('');
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [mobileExpertiseOpen, setMobileExpertiseOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastClickTime = useRef(0);
  const clickClearTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // clicked takes priority over scroll; both cleared when not applicable
  const activeSection = clickedSection || scrollSection;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'experience', 'case-studies', 'capabilities', 'execution-approach', 'technical-environment', 'credibility', 'contact'];
    const intersecting = new Map<string, number>();

    const obs = new IntersectionObserver(
      (entries) => {
        // Suppress scroll updates for 800ms after a click
        if (Date.now() - lastClickTime.current < 800) return;

        entries.forEach((entry) => {
          intersecting.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        let best = '';
        let bestRatio = 0;
        intersecting.forEach((ratio, id) => {
          if (ratio > 0.3 && ratio > bestRatio) { bestRatio = ratio; best = id; }
        });
        // Only update if a section meets the threshold; otherwise keep last valid state
        if (best) setScrollSection(best);
      },
      { threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0], rootMargin: '0px 0px -40% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setExpertiseOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (href: string, sectionId: string) => {
    // Immediately update active — no waiting for scroll or IntersectionObserver
    lastClickTime.current = Date.now();
    setClickedSection(sectionId);
    if (clickClearTimer.current) clearTimeout(clickClearTimer.current);
    clickClearTimer.current = setTimeout(() => setClickedSection(''), 800);

    setMenuOpen(false);
    setExpertiseOpen(false);
    setMobileExpertiseOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const expertiseSections = ['capabilities', 'execution-approach', 'technical-environment', 'credibility'];
  const expertiseActive = expertiseSections.includes(activeSection);

  return (
    <>
      <nav
        id="nav"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9000,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(10, 10, 15, 0.80)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201, 169, 110, 0.10)' : '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
          {/* Monogram */}
          <div style={{ position: 'relative', display: 'inline-block' }} className="group">
            <span
              title="Shaista Gulnaar"
              className="font-cormorant"
              style={{
                fontSize: 24,
                color: 'var(--accent-gold)',
                fontWeight: 400,
                letterSpacing: '0.12em',
                cursor: 'default',
                userSelect: 'none',
                textShadow: '0 1px 2px rgba(0,0,0,0.4)',
              }}
            >
              SG
            </span>
            <span
              className="font-dm-mono"
              style={{
                position: 'absolute',
                top: '100%',
                left: '50%',
                transform: 'translateX(-50%)',
                marginTop: 6,
                fontSize: 11,
                color: 'var(--text-secondary)',
                background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                padding: '4px 8px',
                borderRadius: 4,
                whiteSpace: 'nowrap',
                opacity: 0,
                pointerEvents: 'none',
                transition: 'opacity 0.2s ease',
                backdropFilter: 'blur(8px)',
              }}
              id="monogram-tooltip"
            >
              Shaista Gulnaar
            </span>
          </div>

          {/* Desktop nav links */}
          <div
            className="hidden md:flex"
            style={{ gap: 36, alignItems: 'center' }}
          >
            {links.map((link) => {
              if (link.dropdown) {
                return (
                  <div
                    key={link.label}
                    ref={dropdownRef}
                    style={{ position: 'relative' }}
                    onMouseEnter={() => setExpertiseOpen(true)}
                    onMouseLeave={() => setExpertiseOpen(false)}
                  >
                    <button
                      className={`nav-link ${expertiseActive ? 'active' : ''}`}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: 0,
                      }}
                      onClick={() => setExpertiseOpen((o) => !o)}
                    >
                      {link.label}
                      <ChevronDown
                        size={12}
                        style={{
                          color: 'var(--accent-gold)',
                          transition: 'transform 0.2s ease',
                          transform: expertiseOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>
                    {expertiseOpen && (
                      <div
                        style={{
                          position: 'absolute',
                          top: '100%',
                          right: 0,
                          paddingTop: 8,
                          background: 'transparent',
                          zIndex: 10000,
                        }}
                      >
                        <div
                          style={{
                            background: 'rgba(10, 10, 15, 0.92)',
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)',
                            border: '1px solid rgba(201, 169, 110, 0.15)',
                            borderRadius: 6,
                            padding: '8px 0',
                            minWidth: 200,
                          }}
                        >
                          {link.dropdown.map((item) => (
                            <a
                              key={item.href}
                              href={item.href}
                              className="font-dm-sans"
                              style={{
                                display: 'block',
                                padding: '10px 20px',
                                fontSize: 13,
                                color: activeSection === item.href.replace('#', '') ? 'var(--accent-gold)' : 'var(--text-secondary)',
                                textDecoration: 'none',
                                transition: 'color 0.2s ease',
                                whiteSpace: 'nowrap',
                              }}
                              onClick={(e) => { e.preventDefault(); handleNavClick(item.href, item.href.replace('#', '')); }}
                              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                              onMouseLeave={(e) => (e.currentTarget.style.color = activeSection === item.href.replace('#', '') ? 'var(--accent-gold)' : 'var(--text-secondary)')}
                            >
                              {item.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${activeSection === link.href!.replace('#', '') ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href!, link.href!.replace('#', '')); }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--accent-gold)',
              cursor: 'pointer',
              padding: 4,
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay nav */}
      <div className={`mobile-nav-overlay ${menuOpen ? 'open' : ''}`}>
        <button
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
          style={{
            position: 'absolute',
            top: 20,
            right: 24,
            background: 'none',
            border: 'none',
            color: 'var(--accent-gold)',
            cursor: 'pointer',
          }}
        >
          <X size={24} />
        </button>
        {links.map((link) => {
          if (link.dropdown) {
            return (
              <div key={link.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <button
                  className="font-cormorant"
                  style={{
                    fontSize: 36,
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    letterSpacing: '0.05em',
                    transition: 'color 0.2s ease',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                  }}
                  onClick={() => setMobileExpertiseOpen((o) => !o)}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
                >
                  {link.label}
                  <ChevronDown
                    size={20}
                    style={{
                      color: 'var(--accent-gold)',
                      transition: 'transform 0.2s ease',
                      transform: mobileExpertiseOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    }}
                  />
                </button>
                {mobileExpertiseOpen && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, marginTop: 8 }}>
                    {link.dropdown.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="font-dm-sans"
                        style={{
                          fontSize: 18,
                          color: 'var(--text-secondary)',
                          textDecoration: 'none',
                          letterSpacing: '0.05em',
                          transition: 'color 0.2s ease',
                        }}
                        onClick={(e) => { e.preventDefault(); handleNavClick(item.href, item.href.replace('#', '')); }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-secondary)')}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            );
          }
          return (
            <a
              key={link.href}
              href={link.href}
              className="font-cormorant"
              style={{
                fontSize: 36,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                transition: 'color 0.2s ease',
              }}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href!, link.href!.replace('#', '')); }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-gold)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      <style>{`
        #nav .group:hover #monogram-tooltip { opacity: 1; }
      `}</style>
    </>
  );
}
