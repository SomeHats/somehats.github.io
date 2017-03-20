import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CVPage from './pages/CVPage';
import ContactPage from './pages/ContactPage';
import Error404Page from './pages/Error404Page';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects" component={ProjectsPage} />
        <Route path="/cv" component={CVPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="*" component={Error404Page} />
      </Switch>
    </Layout>
  </Router>
);

export default App;
