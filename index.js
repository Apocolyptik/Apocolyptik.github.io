function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
const options = {
    name: ['Bebop', 'Sprinkle', "Vanilly", "Moonlight", "Jinx"],
    age: ['child', 'adolescent', 'adult', 'elderly'],
    species: ['earth pony', 'unicorn', 'pegasus']
};

const createRandomCreature = () => {
    return {
      name: options.name[getRandomInt(options.name.length)],
      age: options.age[getRandomInt(options.age.length)],
      species: options.species[getRandomInt(options.species.length)],
    };
  };
  
  const numCreatures = parseInt(prompt("How many creatures would you like? "));

  for (let i = 0; i < numCreatures; i++) {
    const creature = createRandomCreature();
    console.log(
      `Your new character ${creature.name} is ${
        ["a", "e", "i", "o", "u"].includes(creature.age[0]) ? "an" : "a"
      } ${creature.age} ${creature.species}.`
    );
  }