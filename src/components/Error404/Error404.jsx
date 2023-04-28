import React from "react";
import "./error404.css";
import CTA from "../CTA/CTA";
const Error404 = () => {
    return (
        <>
            <div className="backgroudError ">
                <div className="ErrorImg wrapper">
                    <img src="./404.png" alt="" />
                </div>
                <h1>
                    The rocket team{" "}
                    <span className="black">has won this time.</span>
                </h1>
                <div className="center">
                    <CTA
                        path="/"
                        color="yellow"
                        content="Return"
                        className="BTN"
                    />
                </div>
            </div>
        </>
    );
};
export default Error404;
