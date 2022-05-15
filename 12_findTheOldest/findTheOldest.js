const findTheOldest = function(array) {
  return array.reduce((oldest, person) => {
    const oldestAge = age(oldest.birthYear, oldest.deathYear);
    const currentAge = age(person.birthYear, person.deathYear);
    return oldestAge < currentAge ? person : oldest;
  })
};
const age = function(birth, death) {
  if(!death) {
    death = new Date().getFullYear;
  }
  return death - birth;
}

// Do not edit below this line
module.exports = findTheOldest;
