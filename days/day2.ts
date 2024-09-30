import * as readline from 'readline';
import * as fs from 'fs';
import { PresentWrapper } from '../PuzzlePieces/PresentWrapper';

const input: string[] = [];

readline.createInterface({
    input: fs.createReadStream(`data/day2`),
    terminal: false
}).on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const wrapper = new PresentWrapper(input);
    console.log(`The total amout of paper is ${wrapper.Area}`);
    console.log(`The total amout of ribbon is ${wrapper.Length}`);
});
