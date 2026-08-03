export default function Footer() {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(201, 169, 110, 0.08)',
        padding: '32px 0',
        background: 'var(--bg-primary)',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 32px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'center',
          gap: 12,
        }}
      >
        <span
          className="font-dm-mono"
          style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.05em' }}
        >
          © 2026 · Shaista Gulnaar
        </span>
        <span
          className="font-dm-mono"
          style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.05em', textAlign: 'center' }}
        >
          Senior Technical Business Analyst
        </span>
        <span
          className="font-dm-mono"
          style={{ fontSize: 12, color: 'var(--text-muted)', letterSpacing: '0.05em', textAlign: 'right' }}
        >
          Enterprise SDLC Delivery
        </span>
      </div>

      <style>{`
        @media (max-width: 600px) {
          footer > div {
            grid-template-columns: 1fr !important;
            text-align: center !important;
          }
          footer > div span {
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
