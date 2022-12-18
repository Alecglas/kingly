import React, {useState, useEffect, useContext, createContext, useReducer} from 'react';
import styles from './Game.module.scss';

import KingGame from "../../scripts/game";
import Building from "../components/Building/Building";
import Resource from "../components/Resource/Resource";
import Navbar from "../components/Navbar/Navbar";
import Mining from "../pages/Mining/Mining";
import Woodcutting from "../pages/Woodcutting/Woodcutting";

type GameProps = {

};

export const GameContext = createContext({
    G: new KingGame()
})

const Game = (props: GameProps) => {
    const [ignored, forceUpdate] = useReducer(x => x+1, 0);
    const [view, changeView] = useState('woodcutting');
    const { G } = useContext(GameContext)

    useEffect(() => {
        const frame = (time: number) => {
            G.gameLoop(time);
            forceUpdate();
            requestAnimationFrame(frame)
        }
        requestAnimationFrame(frame)
    })

    const renderView = () => {
        switch(view){
            case 'woodcutting':
                return <Woodcutting/>
            case 'mining':
                return <Mining/>
        }
    }


    return(
        <div className={styles.Game}>
            <Navbar changeView={changeView}/>
            <div className={styles.resourceContainer}>
                {G.resources.map((r) => <Resource R={r}/>)}
            </div>
            <div className="Tile">
                {renderView()}
            </div>
            <div>
                {G.buildings.map((b) => <Building B={b}/>)}
            </div>
        </div>
    )
}

export default Game;


