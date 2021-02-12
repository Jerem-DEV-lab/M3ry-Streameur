import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "../../Pages/Home/Home";
import HelpCharms from "../../Pages/HelpCharms/HelpCharms";
import PageViewVideo from "../../Pages/PageViewVideo/PageViewVideo";
import Navbar from "../Navbar/Navbar";
import YoutubeList from "../../Pages/YoutubeList";
import Footer from "../Footer/Footer";

const Routes = () => {
    return <Router>
        <Navbar/>
        <Switch>
            <Route path="/" exact true/>
            <Route component={Home} exact path="/twitch-stream"/>
            <Route component={HelpCharms} exact path="/aide/charms"/>
            <Route component={YoutubeList} exact path="/videos/youtube"/>
            <Route component={PageViewVideo} exact path="/videos/youtube/video_id=:videoId"/>
        </Switch>
        <Footer/>

    </Router>
};

export default Routes;
