/*
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red';
document.getElementById('primeiroFilhoDoFilho').innerText = 'texto do primeiro filho do filho';
document.getElementById('pai').firstElementChild;
document.getElementById('elementoOndeVoceEsta').previousElementSibling;
document.getElementById('elementoOndeVoceEsta').nextSibling;
document.getElementById('elementoOndeVoceEsta').nextElementSibling;
document.getElementById('pai').children[2];
*/

let pai = document.querySelector('#pai');
let irmaoElementoOndeVoceEsta = document.createElement('section');
irmaoElementoOndeVoceEsta.id = 'irmaoElementoOndeVoceEsta';
pai.appendChild(irmaoElementoOndeVoceEsta);

let elemento = document.querySelector('#elementoOndeVoceEsta');
let filhoDoElementoOndeVoceEsta = document.createElement('section')
filhoDoElementoOndeVoceEsta.id = 'terceiroFilhoDoFilho';
elemento.appendChild(filhoDoElementoOndeVoceEsta);

let filhoDoFilho = document.querySelector('#primeiroFilhoDoFilho');
let filhoDoFilhoDoFilho = document.createElement('section')
filhoDoFilhoDoFilho.id = 'filhoDoFilhoDoFilho';
filhoDoFilho.appendChild(filhoDoFilhoDoFilho);

document.querySelector('#filhoDoFilhoDoFilho').parentElement.nextElementSibling.nextElementSibling;

const pai = document.getElementById('pai');

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

const segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();