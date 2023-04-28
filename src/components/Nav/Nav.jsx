import React from "react";
import "./nav.css";

// const Nav = (props) => {
//     return (
//         <header className="header">
//             <a className="logo" href="/">
//                 <img src="Logo.png" alt="Logo de Pokemon" />
//             </a>
//             <nav>
//                 <div>
//                     <a href="/">Home</a>
//                 </div>
//                 <div>
//                     <a href="/pokedex">Pokédex</a>
//                 </div>
//             </nav>
//         </header>
//     );
// };

import { NavLink, useLocation } from "react-router-dom";

const Nav = (props) => {
    const location = useLocation();

    return (
        <header className="header">
            <a className="logo" href="/">
                <img src="Logo.png" alt="Logo de Pokemon" />
            </a>
            <nav>
                <div>
                    <NavLink to="/" exact activeClassName="active">
                        Home
                    </NavLink>
                </div>
                <div>
                    <NavLink to="/pokedex" activeClassName="active">
                        Pokédex
                    </NavLink>
                </div>
            </nav>
        </header>
    );
};
export default Nav;
