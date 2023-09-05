import { useState, useEffect, useRef } from "react";
import Card from "../../components/Card/Card";
import './pokemons.css'


export default function Pokemons(){

    const [pokemons, setPokemons] = useState([]);
    const [page, setPage] = useState("https://pokeapi.co/api/v2/pokemon?limit=100");
    const [nextPage, setNextPage] = useState();
    const [previousPage, setPreviousPage] = useState();

    const [enableSearch, setEnableSearch] = useState(false);
    const [textInput, setTextInput] = useState("");
    const inputSearch = useRef();
    const divSearch = useRef();

    const num = useRef(0);

    useEffect(() => {
        fetch(page)
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data.results);
                setNextPage(data.next);
                setPreviousPage(data.previous);
            });
    }, [page]);


    const handleNextPage = () => {
            setPage(nextPage);
    };

    const handlePreviousPage = () => {
            setPage(previousPage);
    };

    const handleClickSearch = () => {
        if (enableSearch){
            inputSearch.current.style.display = "none";
            divSearch.current.style.width = "";
        }else{
            inputSearch.current.style.display = "block";
            divSearch.current.style.width = "90%";
        }
        setEnableSearch(!enableSearch);
    }

    const changeTextSearch = (event) =>{
        setTextInput(event.target.value.toLowerCase());
    }


    const handleClickChangeLimit = (event) =>{
        setPage("https://pokeapi.co/api/v2/pokemon?limit="+event.target.childNodes[0].data)
    }


    return(
        <>
            <h1>Pokemons</h1>
            <div className="container">
                <div className="search">
                    <div className="img-container" ref={divSearch}>
                        <img src="/imgs/loupe.png" alt="search image" onClick={handleClickSearch} />
                        <input type="text" className="none" id="search" placeholder="Search for Name" ref={inputSearch} onChange={changeTextSearch} />
                    </div>
                </div>
                <div className="pages">
                    <button onClick={handlePreviousPage}>{"<"}</button>
                    <button onClick={handleNextPage}> {">"} </button>
                </div>
                <div className="showpokemons">
                    <h3>SHOWS POKEMONS</h3>
                    <div className="numbers">
                        <p onClick={handleClickChangeLimit}>100</p>
                        <p onClick={handleClickChangeLimit}>250</p>
                        <p onClick={handleClickChangeLimit}>500</p>
                    </div>
                </div>
            </div>
            <div className="pokemons">
                {
                    pokemons.filter( (pokemon) => {
                        if(textInput == ''){
                            return pokemon;
                        } else if(pokemon.name.includes(textInput)){
                            return pokemon;
                        }
                    }).map((pokemon) => (
                        <Card pokemon={pokemon} key={pokemon.name}/>
                    ))
                }
            </div>
            
        </>
    );
}