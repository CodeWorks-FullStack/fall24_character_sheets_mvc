import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
// REVIEW never handwrite your own imports
import { Character } from './models/Character.js'


// NOTE inside the ObservableAppState is where we declare application data
// NOTE global variables go here
class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  characters = [
    // {
    //   name: 'Mick the Mighty',
    //   health: 100,
    //   class: 'Wizard'
    // },
    // {
    //   name: 'Jake the Snake',
    //   health: 100,
    //   class: 'Rogue'
    // }
    new Character('Mick the Mighty', 'Wizard'),
    new Character('Jake the Snake', 'Rogue')
  ]

}

// application data is exported to other modules using this AppState variable
export const AppState = createObservableProxy(new ObservableAppState())
