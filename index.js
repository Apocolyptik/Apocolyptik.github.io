import { name } from "./names.js";
import { personalityTrait } from "./personalityTrait.js";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const text = document.getElementById("text");
const button = document.getElementById("gen-btn");

const options = {
  name,
  age: ["child", "adolescent", "adult", "elderly"],
  species: ["earth pony", "unicorn", "pegasus", "bat pony", "kirin", "seapony", "hippogriff", "zebra", "griffon", "changeling", "reformed changeling", "draconequus", "crystal pony"],
  //colorPalette: a WIP feature
  personalityTrait,
  misc: [""],
  height: [""],
  bodyType: [""],
  cutieMark:[""],
  hair: {
    hairLength: [""],
    hairTexture: [""]
  }
};

const createRandomCreature = () => {
  return {
    name: options.name.selectUnique(2).join(" "),
    age: options.age[getRandomInt(options.age.length)],
    species: options.species[getRandomInt(options.species.length)],
    personalityTrait: options.personalityTrait[getRandomInt(options.personalityTrait.length)]
  };
};

button.addEventListener("click", () => {
  const creature = createRandomCreature();
  text.innerText = `Your new character is called ${creature.name}. They are ${
    ["a", "e", "i", "o", "u"].includes(creature.age[0]) ? "an" : "a"
  } ${creature.age} ${creature.species}. Their personality can be described as ${creature.personalityTrait}.`;
});