import { AppState } from "../AppState.js";

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

  drawCharacters() {
    // NOTE the controller can access application data and use it to update the View
    const characters = AppState.characters
    let characterHTML = ''
    characters.forEach(character => characterHTML += character.title)
    const namesElem = document.getElementById('names')
    namesElem.innerText = characterHTML
  }
}