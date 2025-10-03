import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Header } from './feature/Header';
import { Layout } from './feature/Layout';
import { Home } from './feature/Home';
import { About } from './feature/About';
import { Experience } from './feature/Experience';
import { SectionHeader } from './shared/SectionHeader';
import { Footer } from './feature/Footer';
import { useIntersectionObserver } from './hooks/useSectionObserver';

import { DEFAULT_SECTION, SECTIONS } from './constants/sections';

import type { SectionIdProps } from './types/Section';

import { useLang } from './hooks/useLang';
import { updateVisits } from './utils/analytics';

export const App = () => {
  const [currentSection, setCurrentSection] = useState<SectionIdProps>(DEFAULT_SECTION);
  const { t } = useLang();

  useEffect(() => {
    updateVisits();

    console.log('Script ID PROD:', import.meta.env.VITE_GOOGLE_SCRIPT_ID);
  }, []);

  useIntersectionObserver(SECTIONS, setCurrentSection);

  const queryClient = new QueryClient();

  const handleSectionClick = (section: SectionIdProps) => {
    setCurrentSection(section);
    const clickedSection = document.getElementById(section);

    if (clickedSection) clickedSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Header currentSection={currentSection} onSectionClick={handleSectionClick} />
      <Layout>
        {
          <>
            <section id={'home'}>
              <Home />
            </section>
            <section id={'about'}>
              <SectionHeader title={t('about')} />
              <About />
            </section>
            <section id={'experience'}>
              <SectionHeader title={t('experienceSectionHeader')} />
              <Experience />
            </section>
          </>
        }
      </Layout>
      <Footer />
    </QueryClientProvider>
  );
};
