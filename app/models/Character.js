export class Character {
  constructor(name, className) {
    this.name = name
    this.className = className
    this.health = 100
  }

  // getters must return a value and can take in no parameters. They accessed as if they are a property of the class object, not a method (no invocation)
  get title() {
    const title = `${this.name} the ${this.className}`
    return title
  }

  get cardHTMLTemplate() {
    return `
      <div class="col-6">
        <div class="card">
          <div class="card-body">
            <p class="card-title text-center fs-1">${this.title}</p>
            <div class="text-center fs-3">
              <button>-</button>
              <span>${this.health}</span>
              <button onclick="app.CharactersController.increaseHealth('${this.name}')">+</button>
            </div>
          </div>
        </div>
      </div>`
  }
}