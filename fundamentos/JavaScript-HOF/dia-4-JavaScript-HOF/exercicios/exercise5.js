const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA(array) {
  const result = array.reduce((acc, value) => acc + value.toLowerCase(), '');
  return result.split('a').length - 1;
};

console.log(containsA(names));