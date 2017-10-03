
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
