import React from 'react';

class SignUpPage extends React.Component {
    render() {
        return (
            <section id="Signup-Container" className="container">
                <form className="Signup-form container">
                    <fieldset className="Signup-fieldset container">
                        <legend>Sign Up</legend>
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

export default SignUpPage;