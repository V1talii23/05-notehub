import { useEffect, useRef } from 'react';

export function useCardEffect() {
  const ref = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const height = el.clientHeight;
    const width = el.clientWidth;

    function handleMove(e: MouseEvent) {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const xVal = e.clientX - rect.left;
      const yVal = e.clientY - rect.top;
      const yRotation = 20 * ((xVal - width / 2) / width);
      const xRotation = 20 * ((yVal - height / 2) / height);

      el.style.transform = `
        perspective(500px) 
        scale(1.1) 
        rotateX(${xRotation}deg) 
        rotateY(${yRotation}deg)
      `;
    }

    function reset() {
      if (!el) return;
      el.style.transform =
        'perspective(500px) scale(1) rotateX(0deg) rotateY(0deg)';
    }

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseout', reset);

    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseout', reset);
    };
  }, []);

  return ref;
}
