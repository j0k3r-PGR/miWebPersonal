import BoxBattleGame from '../../components/BoxBattleGame/BoxBattleGame.jsx';
import BattleGameProvider from '../../providers/BattleGameProvider.jsx';
import { useBattleGameContext } from '../../providers/BattleGameProvider.jsx';
import './BattleGame.css';

export default function BattleGame(){

    const [player, pc] = useBattleGameContext();

    return(        
            <div className="battlegame">
                {
                    [...Array(100)].map( (_,index) =>{
                        return <BoxBattleGame key={index}/>
                    })
                }
            </div>
    );
}

