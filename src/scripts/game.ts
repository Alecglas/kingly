import { resources, buildings, skills } from "./game-data";
import Resource from "./classes/resource";
import Building from "./classes/building";
import Skill from "./classes/skills";


export default class KingGame {
    time: number = 0;
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