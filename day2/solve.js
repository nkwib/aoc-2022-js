import * as utils from './../utils.js';

const mappedVals = {
    'A X': [ 4, 3 ],
    'A Y': [ 8, 4 ],
    'A Z': [ 3, 8 ],
    'B X': [ 1, 1 ],
    'B Y': [ 5, 5 ],
    'B Z': [ 9, 9 ],
    'C X': [ 7, 2 ],
    'C Y': [ 2, 6 ],
    'C Z': [ 6, 7 ],
};

const getInputData = () => {
    let input = utils.readFile(2, "two");
    let hands = input.split('\n');
    return hands.map((hand) => mappedVals[hand]);
}

export const f = () => {
    let hands = getInputData();
    let totalScore = 0;
    hands.forEach((hand) => totalScore += hand[0]);
    return totalScore;
}

export const s = () => {
    let hands = getInputData();
    let totalScore = 0;
    hands.forEach((hand) => totalScore += hand[1]);
    return totalScore;
}
