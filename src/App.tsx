import './App.css';
import { Header } from './feature/Header';
import { Layout } from './feature/Layout';
import { Home } from './feature/Home';
import { About } from './feature/About';
import { SectionHeader } from './shared/SectionHeader';

export const App = () => {
  return (
    <>
      <Header />
      <Layout>
        {
          <>
            <Home />
            <SectionHeader title={'About'} />
            <About />
          </>
        }
      </Layout>
    </>
  );
};
