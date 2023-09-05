import { createContext, useContext } from "react";

const GameContext = createContext();

export const useGameContext = () =>{
    return useContext(GameContext);
}

export default function BattleGameProvider({children}){

    return(
        <GameContext.Provider value={[]}>
            {children}
        </GameContext.Provider>
    )
}