import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();

export const readFile = (day, puzzle) => {
  return fs.readFileSync(`${__dirname}/day${day}/input_${puzzle}.txt`, 'utf8');
}