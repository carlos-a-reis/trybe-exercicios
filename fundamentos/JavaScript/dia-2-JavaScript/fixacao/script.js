let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = ['Criação de website', 'Manutenção de website', 'Revisão de código', 'Consultoria técnica'];
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

let indexOfPortfolio = menu.indexOf('Portfólio');

menu.push('Contato');

console.log(menuServices);
console.log('');
console.log(indexOfPortfolio);
console.log('');
console.log(menu);

console.log('');

for(let contador = 0; contador < groceryList.length; contador += 1){
    console.log(groceryList[contador]);
}

console.log('');

for(let elementos of names){
    console.log(elementos);
}