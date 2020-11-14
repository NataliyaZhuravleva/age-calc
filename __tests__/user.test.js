import User from '../src/js/user.js';
import Planet from '../src/js/planet.js';
import Planets from '../src/js/planets';
import Country from '../src/js/country.js';
import Countries from '../src/js/countries.js';


describe('User', () => {
  let user;
  let planets;
  let countries;

  test("Should correctly create User class with user's age", () => {
    user = new User(35, "USA");
    expect(user.age).toEqual(35);
  });
  test("Should correctly calculate user's age in planet years and add them to agesArray", () => {
    user = new User(35, "USA");
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
    const USA = new Country(1, "USA", 79);
    user = new User(35, USA);
    expect(user.country).toEqual(USA);
  });

  test("Should correctly calculate user's life expectancy on Earth and add it to lifeExpectancyArray", () => {
    const Earth = new Planet("Earth", 1);
    planets = new Planets();
    planets.addPlanets(Earth);

    const USA = new Country(1, "USA", 79);
    countries = new Countries();
    countries.addCountries(USA);

    user.calculateAge(planets);
    user.calculateLifeExpectancy(planets);
    expect(user.lifeExpectancyArray).toEqual([79]);
  });

  test("Should correctly calculate user's life expectancy on all planets and add them to lifeExpectancyArray", () => {

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

    const USA = new Country(1, "USA", 79);
    countries = new Countries();
    countries.addCountries(USA);
    user = new User(35, USA);

    user.calculateAge(planets);
    user.calculateLifeExpectancy(planets);
    expect(user.lifeExpectancyArray).toEqual([79, 19, 49, 148.5, 936.9]);
  });
});
