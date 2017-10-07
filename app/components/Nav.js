import React, { Component } from "react"

import { Link } from "react-router";

class Main extends Component {

render() {
    return (
            <div className="ui secondary pointing menu"> 
                <a className="item active">
                Home
                </a>
                <a className="item">
                    Log In
                </a>
                <a className="item">
                    Profile
                </a>
                <a className="item">
                    Messages
                </a>
                <div className="logout">
                    <a className="ui item">
                        Logout
                    </a>
                </div>
            </div>
        ); 
    }
}
// Export the component back for use in other files
export default Main;