import { useEffect, useState } from 'react';

export default function PageLoader() {
  const [hidden, setHidden] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setHidden(true), 300);
    const t2 = setTimeout(() => setRemoved(true), 900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (removed) return null;

  return (
    <div
      className={`page-overlay ${hidden ? 'hidden' : ''}`}
      aria-hidden="true"
    />
  );
}
