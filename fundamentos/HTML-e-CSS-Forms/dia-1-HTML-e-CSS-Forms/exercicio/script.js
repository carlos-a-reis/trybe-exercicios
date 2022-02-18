const botaoEnviar = document.querySelector('#botao');
botaoEnviar.addEventListener('clik', enviarDados);

function enviarDados(event){
    event.preventDefault();
    console.log(event.target);
}