import React, {useState, useEffect, useContext} from 'react';
import styles from './Navbar.module.scss';
import {GameContext} from 'common/Game/Game'

type NavbarProps = {};

const Navbar = (props: NavbarProps) => {
    const {G} = useContext(GameContext)
    return (
        <div className={styles.Navbar}>
            <div className="Tile">KING</div>
        </div>
    )
}

export default Navbar;