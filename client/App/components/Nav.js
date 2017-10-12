import React, { Component } from "react"


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



export default Main; 
