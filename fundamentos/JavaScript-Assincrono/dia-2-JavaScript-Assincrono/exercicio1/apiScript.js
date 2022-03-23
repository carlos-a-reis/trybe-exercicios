// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';

const appendJoke = (joke) => {
    const jokeContainer = document.querySelector('#jokeContainer');
    jokeContainer.innerText = `${joke}`;
};

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch('https://icanhazdadjoke.com/', myObject)
    .then(response => response.json())
    .then(data => appendJoke(data.joke));
};
fetchJoke();
//window.onload = () => fetchJoke();
