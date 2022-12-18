export default class Resource {
    id: string = "";
    owned: number = 0;
    cap: number = 0;
    ps: number = 0;

    constructor(config: {
        id: string,
        cap: number,
        xp?: number
    }) {
        Object.assign(this,config)
    }
}