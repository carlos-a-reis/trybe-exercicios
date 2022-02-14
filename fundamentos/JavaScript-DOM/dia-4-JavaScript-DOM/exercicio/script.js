//Cor de fundo
let textoPrincipal = document.getElementById('principal');
let corParaAlterar = document.getElementById('input');

corParaAlterar.addEventListener('keyup', changeColor);

function changeColor(color){
    console.log(corParaAlterar.value)
    textoPrincipal.style.backgroundColor = corParaAlterar.value
    localStorage.setItem('corAlterada', corParaAlterar.value);
}

//Cor do texto
let corTexto = document.getElementById('inputTexto');

corTexto.addEventListener('keyup', changeText);

function changeText(texto){
    console.log(corTexto.value)
    textoPrincipal.style.color = corTexto.value
    localStorage.setItem('corTexto', corTexto.value);
}

//Tamanho do texto
let textSize = document.getElementById('textSize');

textSize.addEventListener('keyup', changeTextSize);

function changeTextSize(texto){
    console.log(textSize.value)
    textoPrincipal.style.fontSize = textSize.value + 'px';
    localStorage.setItem('textSize', textSize.value)
}