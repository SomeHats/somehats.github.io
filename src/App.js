import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Error404Page from './pages/Error404Page';

const App = () => (
  <Router>
    <Route render={({ location }) => (
      <Layout>
        <CSSTransitionGroup
          className="page-transition"
          transitionName="page"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={300}
        >
          <Switch key={location.key} location={location}>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/projects" component={ProjectsPage} /> */}
            {/* <Route path="/cv" component={CVPage} /> */}
            <Route path="/contact" component={ContactPage} />
            <Route path="*" component={Error404Page} />
          </Switch>
        </CSSTransitionGroup>
      </Layout>
    )} />
  </Router>
);

export default App;
