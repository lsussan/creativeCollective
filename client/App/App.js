// import React from "react"
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Profile from "./components/Profile";
// import signup from "./components/signup";
// import login from "./components/login";
// import Main from "./components/Main";

// const App = () =>
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={Main} />
//         <Route exact path="/Profile" component={Profile} />
//         <Route exact path="/signup" component={signup} />
//         <Route component="/login" component={login} />
//       </Switch>
//     </div>
//   </Router>

// export default App;

import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "react-router";

import Main from "./components/Main";

ReactDOM.render(
   <Main/> , 
     document.getElementById("root")
);

