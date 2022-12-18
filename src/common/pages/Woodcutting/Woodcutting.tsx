import React, {useContext} from 'react';
import styles from './Woodcutting.module.scss';
import {GameContext} from '../../Game/Game';
import Building from '../../components/Building/Building';

function Woodcutting() {
    const {G} = useContext(GameContext);
    const lumber = G.buildings.find((b) => b.id === 'lumber')!
    return (
        <div className={styles.woodcuttingContainer}>
            <div className="Tile">
                <button className={styles.Button} onClick={() => console.log("cut wood")}>
                    Gather Twigs
                </button>
            </div>

            <Building B={lumber}/>
        </div>
    )
};

export default Woodcutting;
