import React from "react";
import "./landing.css";
import CTA from "../../components/CTA/CTA";

const Landing = (props) => {
    return (
        <>
            <div className="bg-yellow wrapper">
                <div className="content">
                    <div className="left">
                        <h1>
                            <span>Find</span> all your favorite{" "}
                            <span>Pokemon</span>
                        </h1>
                        <h2>
                            You can know the type of Pokemon, its strengths,
                            disadvantages and abilities
                        </h2>
                        {<CTA path="/pokedex" content="See pokemons" />}
                    </div>
                    <div className="right">
                        <img src="banner.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Landing;
