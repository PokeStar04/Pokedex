import React from "react";
import "./PokemonTypeIcon.css";

const PokemonTypeIcon = (props) => {
    let background = props.content;
    if (background === "Grass") {
        let background = "green";
        return (
            <div className={"PokemonTypeIcon " + background}>
                {props.content}
            </div>
        );
    }

    return <div className={"PokemonTypeIcon blue"}>{props.content}</div>;
};
export default PokemonTypeIcon;
