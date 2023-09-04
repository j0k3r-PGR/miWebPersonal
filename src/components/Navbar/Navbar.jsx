import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){
    return(
        <>
            <nav>
                <ul>
                    <li><Link to="/miWebPersonal/">Home</Link></li>
                    <li><Link to="/miWebPersonal/pokemons">Pokemons</Link></li>
                    <li><Link to="/miWebPersonal/game">Game</Link></li>
                </ul>
            </nav>
        </>
    );
}