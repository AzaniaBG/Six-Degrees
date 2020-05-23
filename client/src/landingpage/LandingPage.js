import React from 'react';
import { Route } from 'react-router-dom';
import Header from '../menu/Header';

export default function LandingPage(props) {
    return (
        <section id="LandingPage-container">
        <header className="LandingPage-headline">
            {/* <Route exact path="/landing-page"> */}
            {/* <Header pageName="Landing Page" /> */}
            {/* </Route> */}
            <h3>Headline here</h3>
            
        </header>
        <section className="LandingPage-about">
        <h3>About</h3>
        <p>Summary about Six Degrees</p>
        <figure className="LandingPage-images">
            <p>images...</p>
        </figure>
        </section>
        <section className="LandingPage-more">
        <h3>Find out More</h3>
        <button>Go</button>
        </section>
        </section>

    )
}