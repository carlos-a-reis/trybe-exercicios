// parte 1
const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
  const showEmailList = (email) => {
    console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  };
  
emailListInData.forEach(showEmailList);

// parte 2
// 1
const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = () => {
    const result = numbers.find((number) => number % 3 === 0 && number % 5 === 0);
    return result;
};

console.log(findDivisibleBy3And5());

// 2
const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = () => {
  const result = names.find((nome) => nome.length === 5);
  return result;
}

console.log(findNameWithFiveLetters());

// 3
const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
]
  
function findMusic(id) {
    const result = musicas.find((musica) => musica.id === id);
    return result.title;
}
  
console.log(findMusic('31031685'))

// parte 3
// 1
const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
  const result = arr.some((nome) => nome === name);
  return result;
}

console.log(hasName(names2, 'Ana'));

// 2
const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];
  
  const verifyAges = (arr, minimumAge) => {
    const result = arr.every((nome) => nome.age >= 18);
    return result
}
  
console.log(verifyAges(people, 18));

// parte 4
// 1
const peopleAge = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
];
  
peopleAge.sort((peopleA, peopleB) => peopleA.age - peopleB.age);
  
console.log(peopleAge);

// 2
peopleAge.sort((peopleA, peopleB) => peopleB.age - peopleA.age);
  
console.log(peopleAge);