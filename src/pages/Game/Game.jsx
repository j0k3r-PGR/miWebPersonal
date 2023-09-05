import { useState } from "react";
import Table from "../../components/table/table";
import CardDescription from '../../components/CardDesprition/CardDescription.jsx';

const textDescription = "El objetivo del juego es poder formar 5 colores en lineas sin importar la direccion (horizontal, vertical o diagonal). Cada jugador tiene un turno para colocar una ficha en el tablero, el jugador que logre formar 5 colores en linea gana."

export default function Game() {

    const [showDescription, setShowDescription] = useState(true);

    return (
        <>
            <Table />
            {showDescription && <CardDescription text={textDescription} setShowDescription={setShowDescription} />}
        </>
    );
}