const appendCripto = (data) => {
    const rankCripto = data.filter((cripto) => parseInt(cripto.rank) <= 10);
    rankCripto.forEach((cripto) => {
        const criptoList = document.querySelector('#criptos');
        const newCripto = document.createElement('li');
        newCripto.innerHTML = `${cripto.id} (${cripto.symbol}): ${parseFloat(cripto.priceUsd).toFixed(2)}`;
        criptoList.appendChild(newCripto);
    })
}

const fetchMoedas = () => {
    fetch('https://api.coincap.io/v2/assets')
        .then((response) => response.json())
        .then((data) => appendCripto(data.data));

};

fetchMoedas();