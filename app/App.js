import { CharactersController } from './controllers/CharactersController.js';
import { HomeController } from './controllers/HomeController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {
  // HomeController = new HomeController()
  CharactersController = new CharactersController()

  constructor() {
    // NOTE ignore this stuff for now
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }

}

const app = new App()
// @ts-ignore
window.app = app
