export type SectionIdProps = 'home' | 'about' | 'experience';
export type SectionIdsProps = SectionIdProps[];

export type useIntersectionObserverProps = (
  sectionIds: SectionIdsProps,
  onSectionChange: (sectionId: SectionIdProps) => void
) => void;
