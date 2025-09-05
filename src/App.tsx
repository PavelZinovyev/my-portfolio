import './App.css';
import { Header } from './feature/Header';
import { Layout } from './feature/Layout';
import { Home } from './feature/Home';

export const App = () => {
  return (
    <>
      <Header />
      <Layout>{<Home />}</Layout>
    </>
  );
};
