import React from 'react';
import { Route } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (
            <div>
                <Route exact path="/">
                <h1>Header</h1>
                </Route>
            </div>
        )
    }
}

export default Header;
