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
}