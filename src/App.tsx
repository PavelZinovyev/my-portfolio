import { Header } from './feature/Header';
import { Layout } from './feature/Layout';
import { Home } from './feature/Home';
import { About } from './feature/About';
import { Experience } from './feature/Experience';
import { SectionHeader } from './shared/SectionHeader';
import { Footer } from './feature/Footer';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Layout>
        {
          <>
            <Home />
            <SectionHeader title={'About'} />
            <About />
            <SectionHeader title={'My work experience'} />
            <Experience />
          </>
        }
      </Layout>
      <Footer />
    </QueryClientProvider>
  );
};
