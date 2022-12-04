import * as utils from './../utils.js';

const getInputData = () => {
    let input = utils.readFile(4, "four");
    let pairs = input.split('\n');
    return pairs.map((line) => line.split(','))
        .map((pair) => pair
            .map((p) => p.split('-')
                .map((x) => parseInt(x)
                )
            )
        );
}

export const f = () => {
    let pairs = getInputData();
    return pairs.reduce((acc, p) => {
        if (utils.oneContainsTheOther(p[0], p[1])) acc++;
        return acc;
    }, 0);
}

export const s = () => {
    let pairs = getInputData();
    return pairs.reduce((acc, p) => {
        if (utils.oneOverlapsTheOther(p[0], p[1])) acc++;
        return acc;
    }, 0);
}
