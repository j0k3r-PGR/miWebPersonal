import { useState } from 'react';
import BoxBattleGame from '../../components/BoxBattleGame/BoxBattleGame.jsx';
import CardDescription from '../../components/CardDesprition/CardDescription.jsx';
import { useBattleGameContext } from '../../providers/BattleGameProvider.jsx';
import './BattleGame.css';

const textDescription = "Hay diez barcos escondidos al azar dentro de este tablero, solo dispone de 30 errores para ganar el juego. Para ganar el juego, debe encontrar todos los barcos sin exceder el límite de errores."

export default function BattleGame() {

    const [player, pc,init, setInit] = useBattleGameContext();

    const [showDescription, setShowDescription] = useState(true);

    console.log(player, pc)

    return (
        <>
            <div className="battlegame">
                {
                    [...Array(100)].map((_, index) => {
                        return <BoxBattleGame index={index} key={index} />
                    })
                }
            </div>
            {showDescription && <CardDescription text={textDescription} setShowDescription={setShowDescription} />}
        </>
    );
}

