import React from "react";

import HomeHeader from "../components/HomeComponents/HomeHeader";
import HomeMain from '../components/HomeComponents/HomeMain';
import HomeAbout from '../components/HomeComponents/HomeAbout';
import HomeWhoHelp from '../components/HomeComponents/HomeWhoHelp';
import HomeContact from '../components/HomeComponents/HomeContact';


const Home = () => {
    return (
        <div className="Home">
            <HomeHeader/>
            <HomeMain/>
            <HomeAbout/>
            <HomeWhoHelp/>
            <HomeContact/>
        </div>
    )
}

export default Home;