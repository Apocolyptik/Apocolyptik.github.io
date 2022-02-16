function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const text = document.getElementById("text");
const button = document.getElementById("gen-btn");

const options = {
  name: ["Bebop", "Sprinkle", "Vanilly", "Moonlight", "Jinx"],
  age: ["child", "adolescent", "adult", "elderly"],
  species: ["earth pony", "unicorn", "pegasus"],
};

const createRandomCreature = () => {
  return {
    name: options.name[getRandomInt(options.name.length)],
    age: options.age[getRandomInt(options.age.length)],
    species: options.species[getRandomInt(options.species.length)],
  };
};

button.addEventListener("click", () => {
  const creature = createRandomCreature();
  text.innerText = `Your new character ${creature.name} is ${
    ["a", "e", "i", "o", "u"].includes(creature.age[0]) ? "an" : "a"
  } ${creature.age} ${creature.species}.`;
});