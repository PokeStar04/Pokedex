import React, { useEffect, useState } from "react";

import Nav from "../../components/Nav/Nav";

// import Landing from "../../components/Landing/Landing";
import PokemonList from "../../components/PokemonList/PokemonList";
import "./pokedex.css";
import Modal from "../../components/Modal/Modal";

const Pokedex = (props) => {
    // const [pokemon, setPokemon] = useState([]);
    // // useEffect(() => {
    // //     fetch("http://localhost:5001/pokemonData").then((response) =>
    // //         console.log({ response })
    // //     );
    // // });

    // useEffect(() => {
    //     fetch("http://localhost:5001/pokemonData")
    //         .then((response) => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //         })
    //         .then((data) => {
    //             setPokemon({ data });
    //         });
    // });
    // console.log(pokemon);
    //   try {
    //     const res =  fetch(
    //       "http://localhost:5001/pokemonData"
    //     );
    //     const result =  res.json();
    //     setData(result);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }, []);

    return (
        <>
            <div className="wrapper">
                {/* <Landing /> */}
                <div className="pokedexTitle">
                    800 <span> Pokemons</span> for you to choose your favorite
                </div>
                {/* <Search /> */}
                <PokemonList />
            </div>
            {/* <Card /> */}
        </>
    );
};
export default Pokedex;
