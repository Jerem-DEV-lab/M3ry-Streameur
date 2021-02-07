import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import ModalEnter from "../ModalEnter";

const Routes = () => {
    return <Router>
        <Switch>
            <Route component={Home} exact path="/"/>
        </Switch>
    </Router>
};

export default Routes;
