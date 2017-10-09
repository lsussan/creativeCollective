import React from "react";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
}
    

render() {
    return (
        <div class="ui secondary pointing menu">
            <a class="item active">
                Home
                    </a>
            <a class="item">
                Log In
                          </a>
            <a class="item">
                Profile
                    </a>
            <a class="item">
                Messages
                    </a>
            <div class="logout">
                <a class="ui item">
                    Logout
                </a>
            </div>
        </div>

        <div class="container">
            <h2 class="homeHeader">Creative Collective</h2>
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <!-- Indicators -->
            <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <!-- Wrapper for slides -->
            <div class="carousel-inner">
                    <div class="item active">
                        <img src="../public/assets/images/turntable.jpeg" alt="Music" style="width:100%;">
                            <div class="carousel-caption">
                                <h3>Musicians</h3>
                                <p>Join the community!</p>
                            </div>
                </div>

                        <div class="item">
                            <img src="../public/assets/images/photography.jpg" alt="Photography" style="width:100%;">
                                <div class="carousel-caption">
                                    <h3>Photographers</h3>
                                    <p>Join the community!</p>
                                </div>
                </div>


                            <div class="item">
                                <img src="../public/assets/images/movie2.jpg" alt="Movies" style="width:100%;">
                                    <div class="carousel-caption">
                                        <h3>Film Makers</h3>
                                        <p>Join the community!</p>
                                    </div>
                </div>

                            </div>

                            <!-- Left and right controls -->
            <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span class="glyphicon glyphicon-chevron-left"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="right carousel-control" href="#myCarousel" data-slide="next">
                                <span class="glyphicon glyphicon-chevron-right"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
  
    );
    }
}

export default main;