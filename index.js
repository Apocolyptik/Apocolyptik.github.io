import { generateCreature } from "./modules/generators.js";

/**
 * Interactive text output and generate button
 */
const text = document.getElementById("text");
const button = document.getElementById("gen-btn");

/**
 * Generate button event listener
 */
button.addEventListener("click", () => {
  const creature = generateCreature();
  text.innerText = `Your new character is called ${creature.name}. They are ${
    ["a", "e", "i", "o", "u"].includes(creature.age[0]) ? "an" : "a"
  } ${creature.age} ${creature.species}. Their personality can be described as ${creature.trait}.`;
});