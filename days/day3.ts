import * as readline from 'readline';
import * as fs from 'fs';
import { SphericalHouses } from '../PuzzlePieces/SphericalHouses';

const input: string[] = [];

readline.createInterface({
    input: fs.createReadStream(`data/day3`),
    terminal: false
}).on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const spherical = new SphericalHouses(input[0]);
    console.log(`The total number of houses is ${spherical.DistinctHouses}`);
    console.log(`The total number of robo enhanced houses is ${spherical.DistinctHousesWithRobotAssistance}`);
});
