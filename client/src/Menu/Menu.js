import React from 'react';

export default function Menu(props) {
    return (
        <menu role="menu" id="Menu-container" className="container">
            <button>{props.home}Home/Dashboard</button>
            <button>{props.profile}Profile</button>
            <button>{props.settings}Settings</button>
            <button>{props.status}Log In/Log Out</button>
            <button>{props.register}Sign Up</button>
        </menu>
    )
}