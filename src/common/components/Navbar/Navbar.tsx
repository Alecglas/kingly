import React, {useState, useEffect, useContext} from 'react';
import styles from './Navbar.module.scss';
import {GameContext} from 'common/Game/Game'

type NavbarProps = {
    changeView: React.Dispatch<React.SetStateAction<string>>
};

const Navbar = (props: NavbarProps) => {
    const {G} = useContext(GameContext)
    const { changeView } = props

    /*
    const getSkills = () => {
        let divs = []
        for(const key in G.king.skills){
            const skill = G.king.skills[key]
            const { xp, level, xpReq } = skill
            divs.push(
                <div className="Tile" id={key} onClick={() => changeView(key)}>
                    <div>{key} ({level}/99)</div>
                    <div>{xp.toFixed(0)}/{xpReq.toFixed(0)}</div>
                </div>
            )
        }
        return divs
    }
    */

    return (
        <div className={styles.Navbar}>
            <div className="Tile" onClick={() => changeView('home')}>KING</div>
            <div className="Tile" onClick={() => changeView('woodcutting')}>Woodcutting</div>
            <div className="Tile" onClick={() => changeView('mining')}>Mining</div>
        </div>

    )
}

export default Navbar;