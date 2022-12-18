import React, {useState, useEffect, useContext} from 'react';
import styles from './Navbar.module.scss';
import {GameContext} from 'common/Game/Game'

type NavbarProps = {
    changeView: React.Dispatch<React.SetStateAction<string>>
};

const Navbar = (props: NavbarProps) => {
    const {G} = useContext(GameContext)
    const { changeView } = props

    const getSkills = () => {
        let divs = []
        for(const skill of G.skills){
            const { id, xp, level, xpReq } = skill
            divs.push(
                <div className="Tile" id={id} onClick={() => changeView(id)}>
                    <div>{id} ({level}/99)</div>
                    <div>{xp.toFixed(0)}/{xpReq.toFixed(0)}</div>
                </div>
            )
        }
        return divs
    }

    return (
        <div className={styles.Navbar}>
            <div
                className="Tile"
                onClick={() => changeView('home')}
            >
                KING {G.king.name}
            </div>
            {getSkills()}
        </div>

    )
}

export default Navbar;