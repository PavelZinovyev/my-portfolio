import { useEffect } from 'react';
import type { useIntersectionObserverProps, SectionIdProps } from '@/types/Section';

const THRESHOLDS = Array.from({ length: 101 }, (_, i) => i / 100);

export const useIntersectionObserver: useIntersectionObserverProps = (
  sectionIds,
  onSectionChange
) => {
  useEffect(() => {
    const visibility = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibility.set(entry.target.id, entry.intersectionRatio);
        });

        let activeId: SectionIdProps | null = null;
        let maxRatio = 0;

        sectionIds.forEach((id) => {
          const ratio = visibility.get(id) ?? 0;
          if (ratio > maxRatio) {
            maxRatio = ratio;
            activeId = id;
          }
        });

        if (activeId && maxRatio > 0) onSectionChange(activeId);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: THRESHOLDS,
      }
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
