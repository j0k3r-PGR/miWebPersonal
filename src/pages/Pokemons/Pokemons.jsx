import { useState, useEffect, useRef } from "react";
import Card from "../../components/Card/Card";
import './pokemons.css'
import { ClipLoader } from "react-spinners";


export default function Pokemons(){

    const [isLoader, setIsLoader] = useState(true);

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
            setTimeout(() => {
                if (isLoader){
                    setIsLoader(false);
                }
            },2500)
    }, [page, isLoader]);


    const handleNextPage = () => {
        setIsLoader(true);
        setPage(nextPage);
    };

    const handlePreviousPage = () => {
        setIsLoader(true);
        setPage(previousPage);
    };

    const handleClickSearch = () => {
        if (enableSearch){
            inputSearch.current.style.width="-1";
            inputSearch.current.style.display="none";
            divSearch.current.style.width = "50px";
        }else{
            divSearch.current.style.width = "90%";
            inputSearch.current.style.display="block";
            inputSearch.current.style.width="100%";
        }
        setEnableSearch(!enableSearch);
    }

    const changeTextSearch = (event) =>{
        setTextInput(event.target.value.toLowerCase());
    }


    const handleClickChangeLimit = (event) =>{
        setIsLoader(true)
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
            {
                isLoader && 
                        <div className="spinner-container">
                            <ClipLoader color="#ff0" size={150} />
                        </div>
            }
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
            <ClipLoader color="#f00" loading={pokemons.length === 0} size={150} />
            
        </>
    );
}