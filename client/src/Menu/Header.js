import React from 'react';
import { Route } from 'react-router-dom';
import Menu from './Menu';

class Header extends React.Component {
    render() {
        return (
            <header id="Header-container" className="container">
                <Route path="/Six-Degrees/">
                <h1>{this.props.pageName}</h1>
                </Route>
                <Menu />
            </header>
        )
    }
}

export default Header;
