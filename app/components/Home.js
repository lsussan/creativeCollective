import React from "react";

// import Profile from "./children/";
// import from "./";

import helpers from "./utils/helpers";

class Home extends React.Component {
    constructor(props) {
        super(props);
    
    }
}

render() {

    return ( <div className = "container">
    
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

<div className="container">
  <h2 className="homeHeader">Creative Collective</h2>

    <div id="myCarousel" class="carousel slide" data-ride="carousel">

      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

    {/* Wrapper for slides */}
    <div className="carousel-inner">
      <div className="item active">
        <img src="../public/assets/images/turntable.jpeg" alt="Music" style="width:100%;"/>
      <div className="carousel-caption">
        <h3>Musicians</h3>
          <p>Join the community!</p>
      </div>
      </div>

      <div className="item">
        <img src="../public/assets/images/photography.jpg" alt="Photography" style="width:100%;"/>
      <div className="carousel-caption">
        <h3>Photographers</h3>
          <p>Join the community!</p>
      </div>
      </div>
      
      <div className="item">
        <img src="../public/assets/images/movie2.jpg" alt="Movies" style="width:100%;"/>
          <div className="carousel-caption">
            <h3>Film Makers</h3>
              <p>Join the community!</p>
          </div>
      </div>
    </div>

    {/* Left and right controls */}
    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>

     </div>
    </div>
</div>
  
    );
  }



export default Home;