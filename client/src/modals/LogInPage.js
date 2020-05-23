import React from 'react';

class LogInPage extends React.Component {
    render() {
        return (
            <section id="Login-Container" className="container">
                <form className="Login-form container">
                    <fieldset className="Login-fieldset container">
                        <legend>Log In</legend>
                        <label htmlFor="email">Email<abbr title="required" aria-label="required">*</abbr></label>
                        <input id="email" type="email" placeholder="email" className="Login-input" />
                        <label htmlFor="passwd">Password<abbr title="required" aria-label="required">*</abbr></label>
                        <input id="passwd" type="password" placeholder="password" className="Login-input" />
                        <button type="submit">Go</button>
                    </fieldset>
                </form>
            </section>
        )
    }
}

export default LogInPage;