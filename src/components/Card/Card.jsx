import React from "react";
import "./card.css";
import PokemonTypeIcon from "../PokemonTypeIcon/PokemonTypeIcon";

const Card = (props) => {
    const [modalIsOpen, setModalIsOpen] = React.useState(false);

    const handleModalOpen = () => {
        setModalIsOpen(true);
    };

    const handleModalClose = () => {
        setModalIsOpen(false);
    };

    return (
        <>
            <div className="card" onClick={handleModalOpen}>
                <div className="contentCard">
                    <h3 className="pokemonName">{props.pokemon.name}</h3>

                    <div className="stats">
                        <div className="stat">{props.pokemon.attack}</div>
                        <div className="stat">{props.pokemon.defence}</div>
                    </div>
                    <div className="statsName">
                        <div className="statName">Attack</div>
                        <div className="statName">Defence</div>
                    </div>
                    <div className="pokemonTypes">
                        <div className="type">
                            {<PokemonTypeIcon content={props.pokemon.type1} />}
                        </div>
                        <div className="type">
                            {<PokemonTypeIcon content={props.pokemon.type2} />}
                        </div>
                    </div>
                </div>
                <div className={"imgPokemon " + props.pokemon.background}>
                    <img src={props.pokemon.imageUrl} alt="" />
                </div>
            </div>

            {/* --------------- MODAL -------------*/}

            {modalIsOpen && (
                <div className="modal">
                    {/* <div
                        className="modal-overlay"
                        onClick={handleModalClose}
                    ></div> */}
                    <div className="imgPokemonModal">
                        <img src={props.pokemon.imageUrlModal} alt="" />
                        <div className="pokemonTypesModal">
                            <div className="type">
                                {
                                    <PokemonTypeIcon
                                        content={props.pokemon.type1}
                                    />
                                }
                            </div>
                            <div className="type">
                                {
                                    <PokemonTypeIcon
                                        content={props.pokemon.type2}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                    <div className="modal-content">
                        <img
                            src="closeIcon.png"
                            alt=""
                            onClick={handleModalClose}
                            className="closeModal"
                        />
                        <div className="headerModal">
                            <h1>{props.pokemon.name}</h1>
                            <div className="generation">
                                <p>Generation 1</p>
                                <div className="cirlcleYellow">
                                    <span>578</span>
                                </div>
                            </div>
                        </div>
                        <div className="abilites">
                            <div>Abilities</div>
                            <div>Overgrow - Chlorophyll</div>
                        </div>
                        <div className="progress">
                            <div className="progress1">
                                <h3>Healthy Points</h3>
                                <span className="number">1 000 000</span>
                                <div className="relative">
                                    <div className="progressBar1"></div>
                                    <div className="progressBar2"></div>
                                </div>
                            </div>
                            <div className="progress2">
                                <h3>Experience</h3>
                                <span className="number">1 000 000</span>
                                <div className="relative">
                                    <div className="progressBar1"></div>
                                    <div className="progressBar3"></div>
                                </div>
                            </div>
                        </div>
                        <div className="statsModal">
                            <div className="statModal">
                                <div>
                                    <div className="statCircle">49</div>
                                </div>
                                <span>Defence</span>
                            </div>
                            <div className="statModal">
                                <div>
                                    <div className="statCircle">165</div>
                                </div>{" "}
                                <span>Attack</span>
                            </div>
                            <div className="statModal">
                                <div>
                                    <div className="statCircle">130</div>
                                </div>{" "}
                                <span>Sp Attack</span>
                            </div>
                            <div className="statModal">
                                <div>
                                    <div className="statCircle">271</div>
                                </div>{" "}
                                <span>Sp Defence</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Card;
