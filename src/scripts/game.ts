import {resources, buildings, skills, king} from "./game-data";
import Resource from "./classes/resource";
import Building from "./classes/building";
import Skill from "./classes/skills";
import King from "./classes/king";


export default class KingGame {
    time: number = 0;
    king: King = king;
    resources: Array<Resource> = resources;
    buildings: Array<Building> = buildings;
    skills: Array<Skill> = skills;


    gameLoop = (frameTime: number) => {
        const diff: number = frameTime - this.time
        this.time = frameTime;

        this.startFrame()

        //frame/diff dependent actions

        this.endFrame()
    }

    startFrame = () => {

    }

    endFrame = () => {

    }
}