import { useState, useEffect } from 'react';

export const useBreakpoint = (): 'default' | 'md' | 'lg' | 'xl' => {
  const [breakpoint, setBreakpoint] = useState<'default' | 'md' | 'lg' | 'xl'>(
    'default'
  );

  useEffect(() => {
    const updateBreakpoint = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setBreakpoint('xl');
      } else if (width >= 1024) {
        setBreakpoint('lg');
      } else if (width >= 768) {
        setBreakpoint('md');
      } else {
        setBreakpoint('default');
      }
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
};
