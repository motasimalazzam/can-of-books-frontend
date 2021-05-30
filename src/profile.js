import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
    render() {
        const { user, isAuthenticated } = this.props.auth0;
        return (
            <>
                { isAuthenticated &&
                    <>

                        Hello {user.name} <br></br>
                        Email: {user.email}

                    </>
                }
            </>
        )
    }

}

export default withAuth0(Profile);