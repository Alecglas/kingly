export default class Skill{
    id: string
    eff: number = 1;
    level: number = 0;
    xp: number = 0;
    xpReq: number = 100;
    xpDiff: number = 100;

    constructor(id: string){
        this.id = id;
    }

    checkLevel() {
        if(this.xp < this.xpReq) return;
        this.level++
        this.xpDiff *= 1.1
        this.xpReq += this.xpDiff
        this.eff += 0.03
    }
}