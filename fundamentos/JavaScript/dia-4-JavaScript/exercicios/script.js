let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

  let info2 = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'
  };

  let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
  
  console.log('Bem-vinda, ' + info.personagem);
  
  console.log(' ');

  console.log(info);

  console.log(' ');

  for (let key in info){
    console.log(key);
  }

  console.log('');

  for (let key in info){
    console.log(info[key]);
  }

  console.log(' ');

  for (let key in info){
    if (key === 'recorrente' && info[key] === 'Sim' && info2[key] === 'Sim'){
        console.log('Ambos recorrentes');
    } else {
        console.log(info[key] + ' e ' + info2[key]);
    }
  }

  console.log(' ');

  console.log("O livro favorito de " + leitor.nome + " " + leitor.sobrenome + "se chama '" + leitor.livrosFavoritos[0].titulo + "'");

  console.log('');
  
  leitor.livrosFavoritos.push({
    titulo: 'Harry Potter e o Prisioneiro de Azkaban',
    autor: 'JK Rowling',
    editora: 'Rocco',
  }); 

  console.log('');
  
  console.log('Julia tem ' + leitor.livrosFavoritos.length + ' livros favoritos');