import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';

export default function Modal(props) {
    return (
        <section id="Modal-container" className="container">
            <header className="header">
                <h2>{props.page} Page (props)</h2>
            </header>
            <Switch>
            <Route exact path="https://azaniabg.github.io/Six-Degrees//error-page">
            {props.content}
            </Route>
            <Route exact path="https://azaniabg.github.io/Six-Degrees//login">
            <LogInPage />
            </Route>
            <Route exact path="https://azaniabg.github.io/Six-Degrees//signup">
            <SignUpPage />
            </Route>
            </Switch>
        </section>
    )
}