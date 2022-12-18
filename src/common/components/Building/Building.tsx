import React, {useState, useEffect, useContext} from 'react';
import styles from './Building.module.scss';
import {GameContext} from 'common/Game/Game'
import B from "../../../scripts/classes/building";

type BuildingProps = {
    B: B
};

const Building = (props: BuildingProps) => {
    const {G} = useContext(GameContext)
    const {B} = props;

    const printProduction = () => {
        let production = []
        for(let prod of B.production){
            const amount = prod.amount?.toFixed(2)
            production.push(
                <div key={prod.id}>
                    {prod.id} {amount}/s
                </div>
            )
        }
        return production
    }

    const printCost = () => {
        let costs = []
        for(let cost of B.cost){
            const amount = cost.amount?.toFixed(0)
            costs.push(
                <div key={cost.id}>
                    {amount} {cost.id}
                </div>
            )
        }
        return costs
    }


    return (
        <div className="Tile">

            <b>{B.id}</b>

            <div>
                {B.owned.toFixed(0)} |
                x{(B.eff*B.mult).toFixed(2)}
            </div>

            <div>
                {printProduction()}
            </div>

            <button>
                Purchase
            </button>

            <div>
                {printCost()}
            </div>

        </div>
    )
}

export default Building;