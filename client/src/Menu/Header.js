import { React, Component} from 'react';
import { Route } from 'react-router-dom';

class Header extends Component {
    render() {
        <header>
            <Route exact path='/'>
            <h1>Nav Header</h1>
            </Route>
        </header>
    }
}