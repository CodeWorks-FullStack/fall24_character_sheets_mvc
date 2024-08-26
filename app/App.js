import { router } from './router-config.js';
const USE_ROUTER = false

class App {

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
