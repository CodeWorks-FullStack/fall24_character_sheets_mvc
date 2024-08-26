import { AppState } from "../AppState.js";

class CharactersService {
  decreaseHealth(characterName) {
    const foundCharacter = AppState.characters.find(character => character.name == characterName)
    foundCharacter.health--
  }
  increaseHealth(characterName) {
    console.log(`increasing health for ${characterName}`);
    const foundCharacter = AppState.characters.find(character => character.name == characterName)
    foundCharacter.health++
    console.log('Got the character', foundCharacter.health);
  }
}

// NOTE singleton design pattern
// all other modules cannot create a new Service Object, they all talk to this single instance
export const charactersService = new CharactersService()