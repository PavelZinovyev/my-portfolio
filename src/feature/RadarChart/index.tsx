import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import { getTextAnchor, getLabelPosition, getDominantBaseline, getPoint } from './utils';
import { LEVELS, SKILLS, SIZE, TOOLTIP_MOBILE_OFFSET } from '../../constants/radar';
import type { RadarSectionProps, SectionHoverProps } from '@/types/Radar';
import { useLang } from '@/hooks/useLang';

export const RadarChart = ({
  data,
  hoveredSection,
}: {
  data: RadarSectionProps[];
  hoveredSection: SectionHoverProps;
}) => {
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const [lastTooltip, setLastTooltip] = useState<{ text: string; x: number; y: number } | null>(
    null
  );
  const [animatedIndex, setAnimatedIndex] = useState(0);
  const [animationActive, setAnimationActive] = useState(true);
  const [size, setSize] = useState(SIZE);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const { lang } = useLang();

  const selectedSkills = SKILLS[lang];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
      setSize(window.innerWidth < 480 ? 300 : SIZE);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!animationActive) return;
    const interval = setInterval(() => {
      setAnimatedIndex((prev) => (prev + 1) % selectedSkills.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [animationActive]);

  const currentCenter = size / 2;
  const currentRadius = currentCenter - 40;

  const showTooltip = (text: string, x: number, y: number) => {
    if (isMobile) {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      setTooltip({ text, x: cx, y: cy });
      setLastTooltip({ text, x: cx, y: cy });
    } else {
      setTooltip({ text, x, y });
      setLastTooltip({ text, x, y });
    }
    setAnimationActive(false);
  };
  const hideTooltip = () => setTooltip(null);

  const grid = Array.from({ length: LEVELS }, (_, lvl) => {
    const pts = selectedSkills
      .map((_, i) => {
        const p = getPoint(i, lvl + 1, LEVELS, currentCenter, currentRadius, lang);
        return `${p[0]},${p[1]}`;
      })
      .join(' ');
    return <polygon key={lvl} points={pts} className={styles.gridLine} />;
  });

  const axes = selectedSkills.map((_, i) => {
    const [x, y] = getPoint(i, LEVELS, LEVELS, currentCenter, currentRadius, lang);
    return (
      <line
        key={i}
        x1={currentCenter}
        y1={currentCenter}
        x2={x}
        y2={y}
        className={styles.axisLine}
      />
    );
  });

  const dots = selectedSkills.map((s, i) => {
    const [x, y] = getPoint(i, s.current, LEVELS, currentCenter, currentRadius, lang);
    const isBlinking = i === animatedIndex && animationActive;
    return (
      <circle
        key={i}
        cx={x}
        cy={y}
        r={5}
        className={`${styles.dot} ${isBlinking ? styles.dotBlink : ''}`}
        onMouseEnter={() => showTooltip(`${s.name}: ${s.current}/5 — ${s.tooltip}`, x, y)}
        onMouseLeave={hideTooltip}
      />
    );
  });

  return (
    <div className={styles.root}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g>
          {grid}
          {axes}

          {selectedSkills.map((s, i) => {
            const { x, y, angle } = getLabelPosition(i, 19, currentCenter, currentRadius, lang);
            return (
              <text
                key={s.name}
                x={x}
                y={y}
                className={styles.label}
                textAnchor={getTextAnchor(angle)}
                dominantBaseline={getDominantBaseline(angle)}
              >
                {s.name}
              </text>
            );
          })}

          {data.map((section) => {
            const ptsStr = selectedSkills
              .map((s, i) =>
                getPoint(i, Number(s[section.key]), LEVELS, currentCenter, currentRadius, lang)
              )
              .map((p) => `${p[0]},${p[1]}`)
              .join(' ');
            return (
              <polygon
                key={section.name}
                points={ptsStr}
                fill={hoveredSection === section.key ? section.hoverColor : section.fill}
                stroke={section.stroke}
                className={styles.polygon}
              />
            );
          })}

          {dots}
        </g>
      </svg>

      <div
        className={`${styles.tooltip} ${tooltip ? styles.visible : ''}`}
        style={{
          left: isMobile ? '50%' : (tooltip ?? lastTooltip)?.x,
          top: isMobile ? `calc(50% - ${TOOLTIP_MOBILE_OFFSET}px)` : (tooltip ?? lastTooltip)?.y,
        }}
      >
        <span className={styles.tooltipText}>{(tooltip ?? lastTooltip)?.text}</span>
      </div>
    </div>
  );
};
