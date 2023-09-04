import { createContext, useContext, useRef, useState } from "react";

const BattleGameContext = createContext();

export const useBattleGameContext = () =>{
    return useContext(BattleGameContext);
}

export default function BattleGameProvider({children}){

    const player = useRef([]);
    const pc = useRef([]);

    const [init, setInit] = useState(false);

    return(
        <BattleGameContext.Provider value={[player,pc,init,setInit]}>
            {children}
        </BattleGameContext.Provider>
    )
}