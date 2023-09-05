import BoxBattleGame from '../../components/BoxBattleGame/BoxBattleGame.jsx';
import CardDescription from '../../components/CardDesprition/CardDescription.jsx';
import { useBattleGameContext } from '../../providers/BattleGameProvider.jsx';
import './BattleGame.css';

const textDescription = "hola soy un texto descriptivo"

export default function BattleGame() {

    const [player, pc,init, setInit] = useBattleGameContext();

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
            <CardDescription text={textDescription} />
        </>
    );
}

