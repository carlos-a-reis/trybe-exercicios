//requisito 1

const isNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number'){
        throw new Error('parameters must be numbers');
    }
}

const sum = (a, b) => {
    isNumber(a,b);
    return a + b;
} 

//requisito 2

const myRemove = (array, item) => {
    for (let index = 0; index < array.length; index += 1) {
        if(item === array[index]){
            array.splice(array.indexOf(item), 1);
            return array;
        }
    }
    return array;
};

myRemove([1, 2, 3, 4], 5)

module.exports = {sum, myRemove};