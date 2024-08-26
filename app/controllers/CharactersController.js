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
    characters.forEach(character => {
      characterHTML += `
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <p class="card-title text-center fs-1">${character.title}</p>
            <div class="text-center fs-3">
              <button>-</button>
              <span>100</span>
              <button>+</button>
            </div>
          </div>
        </div>
      </div>`
    })
    const characterCardsElem = document.getElementById('character-cards')
    characterCardsElem.innerHTML = characterHTML
  }
}