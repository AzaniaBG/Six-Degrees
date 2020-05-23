import React from 'react';
import LogInPage from './LogInPage';

export default function Modal(props) {
    return (
        <section id="Modal-container" className="container">
            <header className="header">
                <h2>{props.page} Page (props)</h2>
            </header>
            {props.content}
            <LogInPage />
        </section>
    )
}