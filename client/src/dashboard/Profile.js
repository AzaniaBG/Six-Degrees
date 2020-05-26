import React from 'react';

class Profile extends React.Component {
    render() {
        return (
            <section id="Profile-container" className="container">
                <header className="Profile-header">
                <h3>User Name</h3>
                <img alt="User Avatar" />
                </header>
                <section>
                    <h3>Interests</h3>
                </section>
                <address>Contact Information</address>

            </section>
        )
    }
}

export default Profile;