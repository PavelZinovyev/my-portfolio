const ANIMATION_TYPE = 'easeInOut' as const;
const ANIMTATION_DURATION = 0.4;
const ANIMATION_START_COORD = 14;
const ANIMATION_END_COORD = 0;
const ANIMATION_VIEWPORT_IN = 0.2;

export const FADE_IN_LEFT = {
  initial: { x: -ANIMATION_START_COORD, opacity: 0 },
  whileInView: { x: ANIMATION_END_COORD, opacity: 1 },
  transition: { duration: ANIMTATION_DURATION, ease: ANIMATION_TYPE },
  viewport: { amount: ANIMATION_VIEWPORT_IN, once: true },
};

export const FADE_IN_RIGHT = {
  initial: { x: ANIMATION_START_COORD, opacity: 0 },
  whileInView: { x: ANIMATION_END_COORD, opacity: 1 },
  transition: { duration: ANIMTATION_DURATION, ease: ANIMATION_TYPE },
  viewport: { amount: ANIMATION_VIEWPORT_IN, once: true },
};

export const FADE_IN_TOP = {
  initial: { y: -10, opacity: 0 },
  whileInView: { y: ANIMATION_END_COORD, opacity: 1 },
  transition: { duration: ANIMTATION_DURATION, ease: ANIMATION_TYPE },
  viewport: { amount: ANIMATION_VIEWPORT_IN, once: true },
};
