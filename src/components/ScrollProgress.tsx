import { useScrollProgress } from '../hooks/useScrollProgress';

export default function ScrollProgress() {
  useScrollProgress();
  return (
    <div
      className="scroll-progress"
      style={{ width: 'var(--scroll-progress)' }}
    />
  );
}
