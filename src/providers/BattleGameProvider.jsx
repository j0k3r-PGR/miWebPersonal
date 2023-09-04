import { createContext, useContext, useRef } from "react";

const BattleGameContext = createContext();

export const useBattleGameContext = () =>{
    return useContext(BattleGameContext);
}

export default function BattleGameProvider({children}){

    const player = useRef([]);
    const pc = useRef([]);

    return(
        <BattleGameContext.Provider value={[player,pc]}>
            {children}
        </BattleGameContext.Provider>
    )
}