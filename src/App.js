import "./App.css";
import Nav from "./components/Nav/Nav";
import Landing from "./components/Landing/Landing";
import Pokedex from "./pages/Pokedex/Pokedex";
import { Routes, Route, useLocation } from "react-router-dom";
import Error404 from "./components/Error404/Error404";

function App() {
    const location = useLocation();
    const showNav = location.pathname !== "/404";
    return (
        <>
            {showNav && <Nav />}
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/pokedex" element={<Pokedex />} />
                <Route path="/404" element={<Error404 />} />
            </Routes>
        </>
    );
}
export default App;
