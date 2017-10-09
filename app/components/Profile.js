// Include React as a depedency"> 

import React, { Component } from 'react';

//import ReactDOM from "react-dom";

import { Link } from "react-router";

class Profile extends Component {

    render() {

        return (
        <div className="container">
            <div className="ui secondary pointing menu">
                <div className="ui menu">
                    <div className="item">
                        <a href="Home.html"> Home
                            </a>
                    </div>
                    <div className="item">
                        <a href="Login.html"> Log In
                            </a>
                    </div>
                    <div className="item active">
                        <a href="Profile.html"> Profile
                            </a>
                    </div>
                    <div className="item">
                        <a href="Messages.html"> Messages
                            </a>
                    </div>

                    <div className="right item">
                        <div className="item">
                            <a href="Logout.html"> Log Out
                                 </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="containter">
                <div className="ui segment">
                    <h1>Profile Page</h1>

                    <div className="rigth item">
                        <div id="speciality">
                            <h1>Speciality</h1>
                        </div>

                        <div className="ui text container">
                            <img src="./assets/images/avatar-placeholder.png" style="width:128px;height:128px;"/>
                                <p id="name"> First Name    Last Name </p>
                                <p id="email"> Email: admin@gmail.com </p>
                                <div className="ui form">
                                    <div class="field">
                                        <label>Background</label>
                                        <textarea>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tortor turpis, interdum blandit felis id, consequat ultrices arcu. Donec accumsan sollicitudin placerat. Etiam eu aliquet arcu. Aliquam cursus nulla vel urna rutrum ullamcorper. Vestibulum vel efficitur purus, vitae porttitor ligula. Nulla sit amet justo nec nibh porta commodo. Nulla sodales nisl erat, sit amet pellentesque urna semper at. Aliquam sapien dolor, pretium sit amet urna sed, molestie faucibus tortor. Morbi ac accumsan mauris. Etiam eget auctor mauris.</textarea>
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}
//export module back to the route  
export default Profile; 