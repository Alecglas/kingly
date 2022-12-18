import {ICost, IProduction} from "./interfaces";

export default class Building {
    id: string = "";
    owned: number = 0;
    cap: number = 0;
    cost: Array<ICost> = [];
    production: Array<IProduction> = [];


    constructor(config: {
        id: string,
        cap: number,
        cost: Array<ICost>,
        production: Array<IProduction>
    }) {
        Object.assign(this,config)
    }
}