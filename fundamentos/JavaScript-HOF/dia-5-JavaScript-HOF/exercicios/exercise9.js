const yearSeasons = {
  spring: ["March", "April", "May"],
  summer: ["June", "July", "August"],
  autumn: ["September", "October", "November"],
  winter: ["December", "January", "February"],
};

const yearMonths = ((season) => {
  const { spring, summer, autumn, winter } = season;
  return [...spring, ...summer, ...autumn, ...winter];
});

console.log(yearMonths(yearSeasons));