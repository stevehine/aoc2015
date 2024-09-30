import * as readline from 'readline';
import * as fs from 'fs';
import { NiceString } from '../PuzzlePieces/NiceString';

const input: string[] = [];

readline.createInterface({
    input: fs.createReadStream(`data/day5`),
    terminal: false
}).on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const niceStrings = input.map(x => new NiceString(x));
    console.log(`The total number of nice strings is ${niceStrings.filter(x => x.IsNice).length}`);
    console.log(`The total number of really nice strings is ${niceStrings.filter(x => x.IsReallyNice).length}`);
});