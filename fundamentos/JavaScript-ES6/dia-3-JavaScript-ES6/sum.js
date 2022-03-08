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

//requisito 3

function myFizzBuzz(num) {
    if (typeof num !== 'number') return false;
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    if (num % 3 === 0) return 'fizz';
    if (num % 5 === 0) return 'buzz';
    return num;
  }

module.exports = {sum, myRemove, myFizzBuzz};