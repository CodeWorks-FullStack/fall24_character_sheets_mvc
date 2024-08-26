import { AppState } from "../AppState.js";
import { charactersService } from "../services/CharactersService.js";

export class CharactersController {
  // NOTE constructor runs whenever this class is "newed up"
  constructor() {
    console.log('Characters Controller is loaded');
    this.drawCharacters()
  }

  // NOTE any method declared within the controller is accessible to the View/DOM/index.html
  testButton() {
    console.log('button works');
  }

  increaseHealth(characterName) {
    console.log(`Increasing the health for ${characterName}`);

    charactersService.increaseHealth(characterName)

    this.drawCharacters()
  }

  drawCharacters() {
    // NOTE the controller can access application data and use it to update the View
    const characters = AppState.characters
    let characterHTML = ''
    characters.forEach(character => characterHTML += character.cardHTMLTemplate)
    const characterCardsElem = document.getElementById('character-cards')
    characterCardsElem.innerHTML = characterHTML
  }
}