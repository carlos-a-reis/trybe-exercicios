// requisito 1
/*const employeeCreator = (name) => {
    const email = name.replaceAll(' ', '_').toLowerCase();
    
    const employee = {
        nomeCompleto: name,
        email: `${email}@trybe.com`,
    };

    return employee;
}

const newEmployees = (callback) => {
    const employees = {
      id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
      id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
      id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
    }
    return employees;
};

console.log(newEmployees(employeeCreator));

// requisito 2
const verificaGanhador = (numero, sorteado) => {
    let resultado;
    numero === sorteado ? resultado = `Parabéns você ganhou!!!` : resultado = `Tente novamente`;
    return `O numero sorteado foi: ${sorteado} e seu numero foi: ${numero}
${resultado}`;
}

const sorteio = (aposta, callback) => {
    const numeroSorteado = Math.floor(Math.random() * 5 + 1);
    const resultado = callback(aposta, numeroSorteado);
    return resultado;
}

console.log(sorteio(1, verificaGanhador));
*/
// requisito 3
const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['C', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const correcao = (gabarito, respostas) => {
    let pontos = 0;
    for (let index = 0; index < gabarito.length; index += 1) {
        if (respostas[index] === gabarito[index]) {
            pontos += 1;
        } else if (respostas[index] === 'N.A'){
            
        } else {
            pontos -= 0.5;
        }
    }
    return pontos;
};

const prova = (gabarito, respostas, callback) => {
    const nota = callback(gabarito, respostas);
    return nota;
};

console.log(prova(RIGHT_ANSWERS, STUDENT_ANSWERS, correcao));