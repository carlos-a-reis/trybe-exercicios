const randomNumber = () => Math.floor(Math.random() * 100);
const stringToUpperCase = (str) => str.toUpperCase();
const stringFristLetter = (str) => str[0];
const stringsConcatenate = (str1, str2) => str1 + str2;

module.exports = {
  randomNumber,
  stringToUpperCase,
  stringFristLetter,
  stringsConcatenate
};
