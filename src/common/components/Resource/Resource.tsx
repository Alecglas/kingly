import React, {useState, useEffect, useContext} from 'react';
import styles from './Resource.module.scss';
import { GameContext } from 'common/Game/Game';
import R from "../../../scripts/classes/resource";

type ResourceProps = {
    R: R
};

const Resource = (props: ResourceProps) => {
    const { G } = useContext(GameContext)
    const { R } = props

    return (
        <div className="Tile">
            <div>
                {R.id}  {R.owned.toFixed(0)}  /  {R.cap}  ({R.ps.toFixed(2)}/s)
            </div>
        </div>
    )
}

export default Resource;
