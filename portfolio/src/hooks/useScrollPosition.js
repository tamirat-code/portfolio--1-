import { useEffect, useState } from 'react';

/**
 * Tracks vertical scroll position and exposes a boolean once the user
 * has scrolled past `threshold` px. Used for navbar elevation and the
 * scroll-to-top button visibility.
 */
export function useScrollPosition(threshold = 80) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  return scrolled;
}
