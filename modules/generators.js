import { names } from '../data/names.js'
import { ages } from "../data/ages.js"
import { species } from "../data/species.js"
import { traits } from "../data/traits.js"

/**
 * Generates a new creature name.
 * @returns The name of the creature.
 */
const generateName = () => {
  const firstNames = names.filter(
    (entry) => entry.tags.includes("prefix") || entry.tags.includes("neutral")
  );
  
  const lastNames = names.filter(
    (entry) => entry.tags.includes("suffix") || entry.tags.includes("neutral")
  );
  
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  let lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  
  while (firstName === lastName) {
    lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  }
  return `${firstName.name} ${lastName.name}` 
}

/**
 * Generates a new creature age.
 * @returns The age of the creature.
 */
const generateAge = () => {
    return ages[Math.floor(Math.random() * ages.length)]
}

/**
 * Generates a new creature species.
 * @returns The new species of the creature.
 */
const generateSpecies = () => {
    return species[Math.floor(Math.random() * species.length)]
}

/**
 * Generates a new creature trait.
 * @returns The new trait of the creature.
 */
const generateTrait = () => {
    return traits[Math.floor(Math.random() * traits.length)]
}


/**
 * Generates a new creature.
 * @returns The new creature object.
 */
export const generateCreature = () => {
    return {
        name: generateName(),
        age: generateAge(),
        species: generateSpecies(),
        trait: generateTrait()
    }
}


