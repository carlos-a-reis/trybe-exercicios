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

//requisito 4

function encode(fraseCodificada) {
    let codificada = fraseCodificada;
    for (let cont = 0; cont < fraseCodificada.length; cont += 1){
      if(fraseCodificada[cont] === 'a' || fraseCodificada[cont] === 'e' || fraseCodificada[cont] === 'i' || fraseCodificada[cont] === 'o' || fraseCodificada[cont] === 'u'){
        codificada = codificada.replace('a', '1');
        codificada = codificada.replace('e', '2');
        codificada = codificada.replace('i', '3');
        codificada = codificada.replace('o', '4');
        codificada = codificada.replace('u', '5');
      }
    }
    return codificada;
}

function decode(fraseDecodificada) {
    let decodificada = fraseDecodificada;
    for (let cont = 0; cont < fraseDecodificada.length; cont += 1){
      if(fraseDecodificada[cont] === '1' || fraseDecodificada[cont] === '2' || fraseDecodificada[cont] === '3' || fraseDecodificada[cont] === '4' || fraseDecodificada[cont] === '5'){
        decodificada = decodificada.replace('1', 'a');
        decodificada = decodificada.replace('2', 'e');
        decodificada = decodificada.replace('3', 'i');
        decodificada = decodificada.replace('4', 'o');
        decodificada = decodificada.replace('5', 'u');
      }
    }
    return decodificada;
}

//requisito 5

function techList(tech, name) {
    let arrayResultante = [];
    let arrayTech = [];
    let vazio = 'Vazio!';
     
   if (tech.length === 0){ 
     return vazio; 
   }
     
   arrayResultante = tech.sort();
    
   for (let cont = 0; cont < tech.length; cont += 1){
     arrayTech.push({
       tech: tech[cont],
       name: name,
     })
   }
   return arrayTech;
}

//requisito 6

function hydrate(bebidas) {
    let resultado = bebidas.split(" ");
    let soma = 0;
    let coposDeAgua;
    for (let cont = 0; cont < resultado.length; cont += 1){
      if(parseFloat(resultado[cont]) >= 1 || parseFloat(resultado[cont]) <= 9){
        soma += parseFloat(resultado[cont]);
      }
    }

    soma === 1 ? coposDeAgua = soma + " copo de água" : coposDeAgua = soma + " copos de água";
    
    return coposDeAgua;
}

//requisito bônus

const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Dodds',
      specialities: ['Backend'],
    },
  ];

  const searchEmployee = (id, info) => {
    try {
    for (let index = 0; index < professionalBoard.length; index += 1) {
        if (professionalBoard[index].id === id) {
            if(professionalBoard[index][info] === undefined){
                throw new Error('Informação indisponível');
            }
            return professionalBoard[index][info];
        }
    }
    throw new Error('ID não identificada');
    } catch (error) {
    throw error.message;    
    }
};

module.exports = {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee};