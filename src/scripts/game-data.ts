import Resource from "./classes/resource";
import Building from "./classes/building";
import Skill from "./classes/skills";

export const skills: Array<Skill> = [
    new Skill("woodcutting"),
    new Skill("mining")
]

export const resources: Array<Resource> = [
    new Resource({
        id: "gold",
        cap: 10000
    }),
    new Resource({
        id: "wood",
        cap: 10000,
        xp: 1
    }),
    new Resource({
        id: "leaves",
        cap: 100000,
        xp: 0.2
    }),
    new Resource({
        id: "stone",
        cap: 8000,
        xp: 1
    }),
]

export const buildings: Array<Building> = [
    new Building({
        id: "lumber",
        cost: [
            {
                id: "wood",
                amount: 25
            },
            {
                id: "gold",
                amount: 20
            }
        ],
        production: [
            {
                id: "wood",
                amount: 0.08
            }
        ]
    }),
    new Building({
        id: "quarry",
        cost: [
            {
                id: "stone",
                amount: 25
            },
            {
                id: "gold",
                amount: 20
            }
        ],
        production: [
            {
                id: "stone",
                amount: 0.08
            }
        ]
    })
]