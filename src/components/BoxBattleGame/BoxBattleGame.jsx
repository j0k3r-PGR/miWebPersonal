import { useBattleGameContext } from '../../providers/BattleGameProvider'
import './BoxBattleGame.css'

export default function BoxBattleGame({index}){

    const [player,_,init] = useBattleGameContext();

    const handleClick = (event) => {
        if (init) return 0;
        if(player.current.length <10 && !init && !player.current.includes(index)){
            event.target.className += " blue"
            player.current.push(index);
        } else if(event.target.className.includes("blue")){
            event.target.className = "box-battlegame"
            player.current.splice(player.current.indexOf(index),1);
        }
    }

    return(
        <>
            <div className="box-battlegame" onClick={handleClick}>
            </div>
        </>
    );

}

