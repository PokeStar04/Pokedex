import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./pokemonList.css";
// import Card from "../Card/Card";

const PokemonList = () => {
    const [pokemon, setPokemon] = useState({});

    const [datas, setDatas] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
        fetch(`http://localhost:5001/pokemonData`)
            .then((response) => response.json())
            .then((json) => setDatas(json));
    }, []);
    console.log(datas);
    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    };
    console.log(searchTerm);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:5001/pokemonData`);
                const result = await res.json();
                setPokemon(result);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="search">
                <input
                    type="text"
                    className="searchBar"
                    id="searchBar"
                    placeholder="Encuentra tu pokémon..."
                    onChange={handleSearchTerm}
                />
            </div>

            <div className="pokemonList">
                {Object.values(pokemon)
                    .filter((val) => {
                        return val.name.includes(searchTerm);
                    })
                    .map((val) => (
                        <Card key={val.name} pokemon={val} />
                    ))}{" "}
            </div>
        </>
    );
};

// console.log(pokemon);
// console.log;

export default PokemonList;
