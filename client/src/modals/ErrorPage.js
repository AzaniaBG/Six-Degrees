import React from 'react';
import { Route } from 'react-router-dom';

export default function(props) {
    return (
        <section id="ErrorPage-container">
            <Route exact path="/Six-Degrees/error">
            <h3>Heck! We haz error. </h3>
            </Route>
        </section>
    )
}