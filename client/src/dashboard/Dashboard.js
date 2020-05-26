import React from 'react';
import { Route } from 'react-router-dom';
import Profile from './Profile';

export default function Dashboard(props) {
    return (
        <section id="Dashboard-container" className="container">
            <Route path="/dashboard">
            <h1>Heya (user name){props.user}</h1>
            <Profile />
            </Route>
        </section>
    )
}