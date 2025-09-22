import { useEffect } from 'react';
import type { useIntersectionObserverProps, SectionIdProps } from '@/types/Section';

export const useIntersectionObserver: useIntersectionObserverProps = (
  sectionIds,
  onSectionChange
) => {
  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) onSectionChange(entry.target.id as SectionIdProps);
        }),
      options
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () =>
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) observer.unobserve(section);
      });
  }, [sectionIds, onSectionChange]);
};
