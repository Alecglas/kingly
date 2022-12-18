import React, {useState, useEffect, useContext} from 'react';
import styles from './Mining.module.scss';
import {GameContext} from '../../Game/Game';
import Building from '../../components/Building/Building';

function Mining() {
    const {G} = useContext(GameContext);
    const quarry = G.buildings.find((b) => b.id === 'quarry')!
    return (
        <div className={styles.stoneContainer}>
            <div className="Tile">
                <button className={styles.Button} onClick={() => console.log("mine stone")}>
                    Pick up rocks
                </button>
            </div>

            <Building B={quarry}/>
        </div>
    )
};

export default Mining;
