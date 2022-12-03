import * as utils from './../utils.js';

const getInputData = () => {
    let input = utils.readFile(3, "three");
    let rucksacks = input.split('\n');
    return rucksacks
}

export const f = () => {
    let rucksacks = getInputData();
    rucksacks = rucksacks.map((r) => utils.splitInHalf(r));
    let priorities = rucksacks.map((r) => utils.commonLetters(r[0], r[1])).map(r => utils.getLetterValue(r));
    return utils.sum(priorities);
}

export const s = () => {
    let rucksacks = getInputData();
    let priorities = [];
    for (let i = 2; i < rucksacks.length; i += 3) {
        priorities.push(utils.commonLetters(rucksacks[i - 2], rucksacks[i - 1], rucksacks[i]));
    }
    priorities = priorities.map(r => utils.getLetterValue(r));
    return utils.sum(priorities);
}
