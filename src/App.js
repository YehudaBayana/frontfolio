import './App.css';
import Layout from './components/features/layoutComp/Layout';
import RouterApp from './RouterApp';
import { HashRouter as Router } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <RouterApp />
      </Layout>
    </Router>
  );
}

export default App;
