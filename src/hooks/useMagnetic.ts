import { useEffect, useRef, RefObject } from 'react';

export function useMagnetic(strength = 6): RefObject<HTMLElement | HTMLAnchorElement | HTMLButtonElement> {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const el = ref.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const threshold = 80;

      if (distance < threshold) {
        const factor = (1 - distance / threshold) * strength;
        const x = (dx / distance) * factor;
        const y = (dy / distance) * factor;
        el.style.transform = `translate(${x}px, ${y}px) scale(${el.classList.contains('btn-primary') ? 1.04 : 1.03})`;
      }
    };

    const handleMouseLeave = () => {
      el.style.transform = 'translate(0, 0) scale(1)';
      el.style.transition = 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    };

    const handleMouseEnter = () => {
      el.style.transition = 'transform 0.1s ease';
    };

    document.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [strength]);

  return ref as RefObject<HTMLElement>;
}
