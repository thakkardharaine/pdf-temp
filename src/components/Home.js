import React from "react";
import Template1 from "./templates/Template1";
import "./assets/css/styles.css"
import Template2 from "./templates/Template2";
import Template3 from "./templates/Template3";

const HomePage = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Choose Your Template</h1>
            <div className="button-container">
                <Template1 />
                <Template2 />
                <Template3 />
            </div>
        </div>
    );
};

export default HomePage;
