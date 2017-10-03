<<<<<<< HEAD
// Include the Main React Dependencies
import React from "react";
import ReactDOM from "react-dom";
import ReactRouter from "react-router";
// Include the Main Component
import Main from "./components/Main";

// This code here allows us to render our main component (in this case "Main")
ReactDOM.render(<Main />, document.getElementById("app"));
=======

import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route } from "react-router-dom"; 

import Home from "./components/Home";

ReactDOM.render(
    (
        <BrowserRouter>
            <Route path="/" component={Home} />
        </BrowserRouter>
    ),
    document.getElementById("app")
);
>>>>>>> update server file
