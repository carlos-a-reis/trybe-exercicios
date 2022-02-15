function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  //1
  let dias = document.getElementById('days');
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];


  for(let index = 0; index < dezDaysList.length; index += 1){
    let novoDia = document.createElement('li');
    let dia = dezDaysList[index];
    if(dia === 24 || dia === 31){
        novoDia.className = 'day holiday';
    } else if (dia === 25 ){
        novoDia.className = 'day holiday friday'; 
    }else if(dia === 4 || dia === 11 || dia === 18){
        novoDia.className = 'day friday';
    }else {
        novoDia.className = 'day';
    }
    novoDia.innerText = dia;
    dias.appendChild(novoDia);
  }

  //2
  let containerDeBotao = document.getElementsByClassName('buttons-container')[0];
  fazBotao('Feriados', 'btn-holiday');

  function fazBotao (nome, classe){
      let criaBotao = document.createElement('button');
      criaBotao.innerText = nome;
      criaBotao.className = classe;
      containerDeBotao.appendChild(criaBotao);
  }

  //3
  let botao = document.getElementsByClassName('btn-holiday')[0];
  botao.addEventListener('click', feriados);

  function feriados(){
      let corDosDias = document.getElementsByClassName('holiday');
      for(let index = 0; index < corDosDias.length; index += 1){
        if(corDosDias[index].style.backgroundColor === 'yellow'){
            corDosDias[index].style.backgroundColor = 'rgb(238,238,238)';
        }else {
            corDosDias[index].style.backgroundColor = 'yellow';
        }
      }
  }

  //4
  fazBotao('Sexta-feria', 'btn-friday');

  //5
  let botaoSextou = document.getElementsByClassName('btn-friday')[0];
  botaoSextou.addEventListener('click', sextouBb);

  function sextouBb(){
      let textoSextou = document.getElementsByClassName('friday');
      let arrayAuxiliar = [4, 11, 18, 25];
      for(let index = 0; index < textoSextou.length; index += 1){
        if(textoSextou[index].innerText === 'SEXTOU'){
            textoSextou[index].innerText = arrayAuxiliar[index];
        }else {
            textoSextou[index].innerText = 'SEXTOU';
        }
      }
  }

  //6
  let zoom = document.getElementsByClassName('day');
  
  for(let index = 0; index < zoom.length; index += 1){
    zoom[index].addEventListener('mouseover', mouseEmCima);
    zoom[index].addEventListener('mouseleave', mouseFora);
  }

  function mouseEmCima(evento){
    evento.target.style.font-size == '25px';
  }

  function mouseFora(evento){
    evento.target.style.visibility = 'visible';
  }

  //7
  let tarefas = document.querySelectorAll('.my-tasks');
  let novaTarefa = document.createElement('span');
  tarefas.addEventListener('keyup', addTarefa);

  function addTarefa(evento){ 
    novaTarefa.innerHTML = evento;
    tarefas.appendChild(novaTarefa);
  }