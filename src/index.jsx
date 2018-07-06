import preact from 'preact';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';

const Home = () => (
  <Layout>
    <HomePage />
  </Layout>
);

preact.render(<Home />, document.body);
