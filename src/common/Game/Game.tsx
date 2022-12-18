import React, {useState, useEffect, useContext, createContext, useReducer} from 'react';
import styles from './Game.module.scss';

import KingGame from "../../scripts/game";
import Building from "../components/Building/Building";
import Resource from "../components/Resource/Resource";
import Navbar from "../components/Navbar/Navbar";

type GameProps = {

};

export const GameContext = createContext({
    G: new KingGame()
})

const Game = (props: GameProps) => {
    const [ignored, forceUpdate] = useReducer(x => x+1, 0);
    const { G } = useContext(GameContext)

    useEffect(() => {
        const frame = (time: number) => {
            G.gameLoop(time);
            forceUpdate();
            requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
    })


    return(
        <div className={styles.Game}>
            <Navbar/>
            <div className={styles.resourceContainer}>
                {G.resources.map((r) => <Resource R={r}/>)}
            </div>
            <div>
                {G.buildings.map((b) => <Building B={b}/>)}
            </div>
        </div>
    )
}

export default Game;


