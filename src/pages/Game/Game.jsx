import Table from "../../components/table/table";
import CardDescription from '../../components/CardDesprition/CardDescription.jsx';

const textDescription = "hola soy un texto descriptivo"

export default function Game() {

    return (
        <>
            <Table />
            <CardDescription text={textDescription} />
        </>
    );
}