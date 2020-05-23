import React from 'react';
import { withRouter, BrowserRouter as Router, Route, NavLinks } from 'react-router-dom';
import './App.css';
import Header from './menu/Header';
import LandingPage from './landingpage/LandingPage';
import Modal from './modals/Modal';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <Route exact path="/landing-page" render={() => <Header pageName="LandingPage" />} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Route exact path="/landing-page" render={() => <LandingPage />} />
        <Route exact path='/' render={() => <Modal page="Modal" /> } />
        <Route path='/error' render={() => <Modal page="Error" content="Heck! We haz error." /> } />
        <Route path='/login' render={() => <Modal page="Log In" />} />
        <Route path='/signup' render={() => <Modal page="Sign Up" />} />
      </main>
      <footer>

      </footer>
      </Router>
    </div>
  );
}

export default withRouter(App);
