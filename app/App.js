import { CharactersController } from './controllers/CharactersController.js';
import { HomeController } from './controllers/HomeController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

// NOTE any members of this App class are accessible to the DOM/View
class App {
  // HomeController = new HomeController()
  CharactersController = new CharactersController()

  constructor() {
    // REVIEW ignore this stuff for now
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
