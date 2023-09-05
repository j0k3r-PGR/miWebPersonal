import { useBattleGameContext } from '../../providers/BattleGameProvider'
import './BoxBattleGame.css'

export default function BoxBattleGame({index}){

    const [player,_,init,setInit] = useBattleGameContext();

    const handleClick = (event) => {
        if (init) return 0;
        if(player.current.length <10 && !init){
            event.target.className += " blue"
            player.current.push(index);
            console.log(player)
        }
    }

    return(
        <>
            <div className="box-battlegame" onClick={handleClick}>
            </div>
        </>
    );

}

