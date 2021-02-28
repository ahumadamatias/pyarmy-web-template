import { Button } from "@material-ui/core";
import React from "react";

import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home__info-container">
                <h1 className="home__title">Hello World</h1>
                <div>
                    <Button color="secondary">Signin</Button>
                    <Button variant="contained" color="primary">Signup</Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
