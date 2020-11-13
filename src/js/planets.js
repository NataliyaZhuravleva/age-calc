//import Planet from '../js/planet.js';
export default class Planets {
  constructor() {
    this.planetsArray = [];
  }

  addPlanets(planet) {
    this.planetsArray.push(planet);
  }
}