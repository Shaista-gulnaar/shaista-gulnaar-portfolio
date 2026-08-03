import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const cursor = document.getElementById('cursor');
    if (!cursor) return;

    let mouseX = 0;
    let mouseY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    const expand = () => cursor.classList.add('expanded');
    const collapse = () => cursor.classList.remove('expanded');

    document.addEventListener('mousemove', move);

    const interactives = document.querySelectorAll('a, button, [role="button"]');
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', expand);
      el.addEventListener('mouseleave', collapse);
    });

    const obs = new MutationObserver(() => {
      const freshInteractives = document.querySelectorAll('a, button, [role="button"]');
      freshInteractives.forEach((el) => {
        el.addEventListener('mouseenter', expand);
        el.addEventListener('mouseleave', collapse);
      });
    });

    obs.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', move);
      obs.disconnect();
    };
  }, []);

  return <div id="cursor" />;
}
