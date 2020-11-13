import User from '../src/js/user.js';
import Planet from '../src/js/planet.js';
import Planets from '../src/js/planets';


describe('User', () => {
  let user;
  let planets;
  beforeEach(() => {
    user = new User(35, "USA");
  });

  test("Should correctly create User class with user's age", () => {
    expect(user.age).toEqual(35);
  });
  test("Should correctly calculate user's age in planet years and add them to agesArray", () => {
    const Earth = new Planet("Earth", 1);
    const Mercury = new Planet("Mercury", 0.24);
    const Venus = new Planet("Venus", 0.62);
    const Mars = new Planet("Mars", 1.88);
    const Jupiter = new Planet("Jupiter", 11.86);
    planets = new Planets();
    planets.addPlanets(Earth);
    planets.addPlanets(Mercury);
    planets.addPlanets(Venus);
    planets.addPlanets(Mars);
    planets.addPlanets(Jupiter);
    user.calculateAge(planets);
  
    expect(user.agesArray).toEqual([35, 8.4, 21.7, 65.8, 415.1]);
  });

  test("Should correctly create User class with user's country", () => {
    expect(user.country).toEqual("USA");
  });
});
