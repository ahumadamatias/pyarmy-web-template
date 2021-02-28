import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home__info-container">
                <h1 className="home__title">Hello World</h1>
                <div>
                    <Link to="/signin">
                        <Button color="secondary">Signin</Button>
                    </Link>
                    <Link to="/signup">
                        <Button variant="contained" color="primary">Signup</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
