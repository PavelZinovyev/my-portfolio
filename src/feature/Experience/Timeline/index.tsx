'use client';

import type { FC } from 'react';
import { useEffect, useRef, useState } from 'react';
import styles from './styles.module.scss';
import type { ExperienceType } from '@/constants/experienceList';

interface TimelineProps {
  data: ExperienceType[];
}

export const Timeline: FC<TimelineProps> = ({ data }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const [dotsPositions, setDotsPositions] = useState<number[]>([]);
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    let raf: number | null = null;

    const handleScroll = () => {
      if (!containerRef.current || !progressRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const total = rect.height;

      let scrolled = viewportCenter - rect.top;
      scrolled = Math.max(scrolled, 0);

      setProgressValue(Math.min(Math.max(scrolled / total, 0), 1));

      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleY(${progressValue})`;
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [progressValue]);

  useEffect(() => {
    if (!containerRef.current || !progressRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();
    const lineHeight = containerRect.height;

    const positions = dotsRef.current.map((dot) => {
      if (!dot) return 0;
      const dotRect = dot.getBoundingClientRect();
      const offset = dotRect.top - containerRect.top + dotRect.height / 2;
      return offset / lineHeight;
    });

    setDotsPositions(positions);
  }, [data.length]);

  return (
    <div className={styles.timeline} ref={containerRef}>
      <div className={styles.progressLine}>
        <div ref={progressRef} className={styles.progressFill} />
      </div>

      {data.map((exp, i) => (
        <section key={i} className={styles.timelineBlock}>
          <div className={styles.dotWithShortBlockWrapper}>
            <div
              className={`${styles.dot} ${
                progressValue >= dotsPositions[i] ? styles.activeDot : ''
              }`}
              ref={(el: HTMLDivElement) => {
                dotsRef.current[i] = el;
              }}
            />
            <div
              className={`${styles.shortBlock} ${
                progressValue >= dotsPositions[i] ? styles.active : ''
              }`}
            >
              <h3 className={styles.dateText}>{exp.date}</h3>
              <h3 className={styles.titleText}>{exp.title}</h3>
              <h3 className={styles.companyText}>{exp.company}</h3>
            </div>
          </div>

          <div
            className={`${styles.contents} ${
              progressValue >= dotsPositions[i] ? styles.active : ''
            }`}
          >
            {exp.contents.map((content: string, idx: number) => (
              <p key={idx}>{content}</p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};
