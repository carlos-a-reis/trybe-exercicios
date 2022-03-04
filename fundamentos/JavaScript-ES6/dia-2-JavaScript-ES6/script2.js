const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

const addTurno = (objeto, chave, valor) => {
  objeto[chave] = valor;
};

addTurno(lesson2, "turno", "noite");
//console.log(lesson2);

const listaObject = (objeto) => Object.keys(objeto);

//console.log(listaObject(lesson2));

const tamanhoObject = (objeto) => Object.keys(objeto).length;

//console.log(tamanhoObject(lesson2));

const valoresObject = (objeto) => Object.values(objeto);

//console.log(valoresObject(lesson2));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

//console.log(allLessons);

const totalEstudantes = (objeto) => {
    let total = 0;

    for (let index = 0; index < Object.keys(objeto).length; index += 1) {
        total = total + objeto[Object.keys(objeto)[index]].numeroEstudantes; 
    }

    return total;
}

//console.log(totalEstudantes(allLessons));

const getValue = (objeto, posicao) => Object.values(objeto)[posicao];

//console.log(getValue(lesson1, 0));

const verifyvalue = (objeto, chave, valor) => {
    let existe = false;
    for (let index = 0; index < Object.keys(objeto).length; index += 1) {
        if (Object.keys(objeto)[index] === chave && Object.values(objeto)[index] === valor) {
            existe = true;
        }
    }
    return existe;
}

console.log(verifyvalue(lesson3, 'turno', 'noite'));
