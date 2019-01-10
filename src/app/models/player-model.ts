export class Player {
    name: string;
    college: string;
    position: string;
    analysises: [{ analysis: string, popularity: number, _id: false, contributor: string }];
    attributes: {
        athleticism: [number],
        size: [number],
        defense: [number],
        shooting: [number],
        nba_ready: [number],
        dribbling: [number],
        potential: [number],
        passing: [number],
        intangibles: [number],
        leadership: [number],
        projectedDurability: [number]
    };
    height: string;
    weight: number;
    year: string;
}