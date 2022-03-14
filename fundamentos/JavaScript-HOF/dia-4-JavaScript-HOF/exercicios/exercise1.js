const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten(array) {
    return array.reduce((acc, value) => acc.concat(value));
}

console.log(flatten(arrays));