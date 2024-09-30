import * as readline from 'readline';
import * as fs from 'fs';
import { Elevator } from '../PuzzlePieces/Elevator';

const input: string[] = [];

readline.createInterface({
    input: fs.createReadStream(`data/day1`),
    terminal: false
}).on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const elevator = new Elevator(input[0]);
    console.log(`The final floor is ${elevator.Floor}`);
    console.log(`Entered basement on move ${elevator.EnteredBasement}`)
});
