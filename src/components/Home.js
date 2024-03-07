import React from "react";
import Hero from './Hero';
import Community from "./Community";
import Connect from "./Connect";
import Explained from "./Explained";
import Finance from "./Finance";
import Future from "./Future";
import Needs from "./Needs";
import Powered from "./Powered";
import Questions from "./Questions";
import Roadmap from "./Roadmap";
import Tito from "./Tito";


const Home = () => {
    return (
        <>
            <Hero />
            <Community />
            <Finance />
            <Needs />
            <Explained />
            <Tito />
            <Roadmap />
            <Powered />
            <Connect />
            <Questions />
            <Future />

        </>
    );
}

export default Home;