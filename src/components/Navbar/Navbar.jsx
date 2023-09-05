import { useRef } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){

    const menu = useRef();

    const handleShowMenu = () => {
        menu.current.style.left= "0";
    }

    return(
        <>
            <nav>
                <div className="buttonMenu">
                    <img src="/imgs/menu-button.png" alt="menu-button" onClick={handleShowMenu} />
                </div>
                <ul ref={menu}>
                    <div className="buttonClose">
                        <img src="/imgs/close.png" alt="close-button" onClick={() => menu.current.style.left= "-100%"} />
                    </div>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/pokemons">Pokemons</Link></li>
                    <li><Link to="/game">Five In Line</Link></li>
                    <li><Link to="/battlegame">Battle Game</Link></li>
                </ul>
            </nav>
        </>
    );
}