import fs from 'fs';
import path from 'path';
const __dirname = path.resolve();

export const readFile = (day, puzzle) => {
  return fs.readFileSync(`${__dirname}/day${day}/input_${puzzle}.txt`, 'utf8');
}

export const splitInHalf = (str) => {
  let length = str.length;
  let half = length / 2;
  return [str.substring(0, half), str.substring(half, length)];
}

export const commonLetters = (...args) => {
  let common = new Set();
  let [first, ...rest] = args;
  for (let i = 0; i < first.length; i++) {
    if (rest.every((r) => r.includes(first[i]))) {
      common.add(first[i]);
    }
  }
  return Array.from(common).join('');
}

export const sum = (arr) => {
  return arr.reduce((a, b) => a + b, 0);
}

export const getLetterValue = (char) => {
  let value = char.charCodeAt(0);
  return value - (value > 96 ? 96 : 38);
}

export const oneContainsTheOther = (a, b) => {
  let aContainsB = a[0] <= b[0] && a[1] >= b[1];
  let bContainsA = b[0] <= a[0] && b[1] >= a[1];
  return aContainsB || bContainsA;
}
export const oneOverlapsTheOther = (a, b) => {
  let aOverlapsB = a[0] <= b[1] && a[1] >= b[1];
  let bOverlapsA = b[0] <= a[1] && b[1] >= a[1];
  return aOverlapsB || bOverlapsA;
}