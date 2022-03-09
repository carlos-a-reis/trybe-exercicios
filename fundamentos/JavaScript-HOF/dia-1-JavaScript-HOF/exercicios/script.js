// requisito 1
const employeeCreator = (name) => {
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