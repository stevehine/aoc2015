export class SphericalHouses {
    private _distinctHouses: number;
    private _distinctHousesWithRobotAssistance: number;
    constructor(input: string) {
        let location = { x: 0, y: 0 };
        let santa = { x: 0, y: 0 };
        let robo = { x: 0, y: 0 };
        const visited = [JSON.stringify(location)];
        const visitedWithRobot = [JSON.stringify(santa)];
        input.split('').forEach((action, index) => {

            location = calcLocation(action, location);

            if (!visited.includes(JSON.stringify(location)))
                visited.push(JSON.stringify(location));

            if (index % 2 == 0) {
                santa = calcLocation(action, santa);
                if (!visitedWithRobot.includes(JSON.stringify(santa)))
                    visitedWithRobot.push(JSON.stringify(santa));
            } else {
                robo = calcLocation(action, robo);
                if (!visitedWithRobot.includes(JSON.stringify(robo)))
                    visitedWithRobot.push(JSON.stringify(robo));
            }

        });
        this._distinctHouses = visited.length;
        this._distinctHousesWithRobotAssistance = visitedWithRobot.length;
    }
    public get DistinctHouses(): number { return this._distinctHouses; }
    public get DistinctHousesWithRobotAssistance(): number { return this._distinctHousesWithRobotAssistance; }
}
function calcLocation(action: string, location: { x: number, y: number }) {
    switch (action) {
        case '<': return { x: location.x - 1, y: location.y };
        case '>': return { x: location.x + 1, y: location.y };
        case '^': return { x: location.x, y: location.y - 1 };
        default: return { x: location.x, y: location.y + 1 };
    }
}