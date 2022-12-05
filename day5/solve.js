import * as utils from './../utils.js';

const getInputData = () => {
    let input = utils.readFile(5, "five");
    let [crates, instructions] = input.split('\n\n').map((x) => x.split('\n'));
    let namesOfCrates = crates.pop().split(' ').filter((x) => !!x);
    crates = fillCrates(crates, namesOfCrates);
    instructions = instructions
        .map((x) => x.split(' '))
        .map((x) => [x[1], x[3], x[5]])
    return [crates, instructions];
}

const fillCrates = (crates, namesOfCrates) => {
    let map = {};
    namesOfCrates.forEach(name => map[name] = []);
    for (let row of crates) {
        let currNameIndex = 0;
        for (let i = 1; i < row.length; i+=4) {
            let crate = row[i].trim();
            if (crate) {
                map[namesOfCrates[currNameIndex]].unshift(crate);
            }
            currNameIndex++;
        }
    }
    return map;
}

const move = (crates, amount, from, to) => {
    while(amount > 0) {
        crates[to].push(crates[from].pop());
        amount--;
    }
    return crates;
}
const moveInOrder = (crates, amount, from, to) => {
    let moving = crates[from].slice(-amount);
    crates[from] = crates[from].slice(0, -amount);
    crates[to] = crates[to].concat(moving);
    return crates;
}

const topRow = (crates) => {
    let top = [];
    for (let crate in crates) {
        top.push(crates[crate].at(-1));
    }
    return top.join('');
}

export const f = () => {
    let [crates, instructions] = getInputData();
    for (let instruction of instructions) {
        let [amount, from, to] = instruction;
        crates = move(crates, parseInt(amount), from, to);
    }
    return topRow(crates);
}

export const s = () => {
    let [crates, instructions] = getInputData();
    for (let instruction of instructions) {
        let [amount, from, to] = instruction;
        crates = moveInOrder(crates, parseInt(amount), from, to);
    }
    return topRow(crates);
}
