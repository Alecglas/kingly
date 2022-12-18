import { IResource } from "./interfaces";

export default class Building {
    id: string = "";
    owned: number = 0;
    cost: Array<IResource> = [];
    eff: number = 1;
    mult: number = 1;
    production: Array<IResource> = [];


    constructor(config: {
        id: string,
        cost: Array<IResource>,
        production: Array<IResource>
    }) {
        Object.assign(this,config)
    }
}