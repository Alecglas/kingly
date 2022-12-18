import Resource from "./classes/resource";
import Building from "./classes/building";
import { resources, buildings } from "./game-data";


export default class KingGame {
    time: number = 0;
    resources: Array<Resource> = resources;
    buildings: Array<Building> = buildings;


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