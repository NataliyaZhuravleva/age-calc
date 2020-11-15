import User from '../src/js/user.js';
import Planet from '../src/js/planet.js';
import Planets from '../src/js/planets';
import Country from '../src/js/country.js';
import Countries from '../src/js/countries.js';


describe('User', () => {
  let user;
  let planets;
  let countries;

  beforeEach(()=>{
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
  }); 

  test("Should correctly create User class with user's age", () => {
    user = new User(35, "USA");
    expect(user.age).toEqual(35);
  });
  test("Should correctly calculate user's age in planet years and add them to agesArray", () => {
    user = new User(35, "USA");   
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
    user = new User(35, USA);

    user.calculateAge(planets);
    user.calculateLifeExpectancy(planets);
    expect(user.lifeExpectancyArray).toEqual([79]);
  });

  test("Should correctly calculate user's life expectancy on all planets and add them to lifeExpectancyArray", () => {
    const USA = new Country(1, "USA", 79);
    countries = new Countries();
    countries.addCountries(USA);
    user = new User(35, USA);

    user.calculateAge(planets);
    user.calculateLifeExpectancy(planets);
    expect(user.lifeExpectancyArray).toEqual([79, 19, 49, 148.5, 936.9]);
  });

  test("Should correctly calculate the number of years user have lived past the life expectancy if applicable and add it to pastLifeExpectancyArray", () => {
    const USA = new Country(1, "USA", 79);
    countries = new Countries();
    countries.addCountries(USA);
    user = new User(83, USA);

    user.calculateAge(planets);
    user.calculateLifeExpectancy(planets);
    user.calculateLeftToLive();
    expect(user.pastLifeExpectancyArray).toEqual([4, 0.9, 2.5, 7.5, 47.5]);
  });

  test("Should correctly calculate the number of years user has left to live on each planet if applicable and add it to leftToLiveArray", () => {
    const USA = new Country(1, "USA", 79);
    countries = new Countries();
    countries.addCountries(USA);
    user = new User(35, USA);

    user.calculateAge(planets);
    user.calculateLifeExpectancy(planets);
    user.calculateLeftToLive();
    expect(user.leftToLiveArray).toEqual([44, 10.6, 27.3, 82.7, 521.8]);
  });
  test("Should correctly return result string with user's age in planet years on each planet", () => {
    user = new User(35, "USA");
    let calculateAgeString = user.calculateAge(planets);
    expect(calculateAgeString).toEqual(`Your age in Earth years is 35. Your age in Mercury years is 8.4. Your age in Venus years is 21.7. Your age in Mars years is 65.8. Your age in Jupiter years is 415.1.`);
  });

  test("Should correctly return result string with user's life expectancy in planet years on each planet", () => {
    const USA = new Country(1, "USA", 79);
    countries = new Countries();
    countries.addCountries(USA);
    user = new User(35, USA);
    user.calculateAge(planets);
    let calculateLifeExpectancyString=user.calculateLifeExpectancy(planets);
    expect(calculateLifeExpectancyString).toEqual(`Your life expectancy age in Earth years is 79. Your life expectancy age in Mercury years is 19. Your life expectancy age in Venus years is 49. Your life expectancy age in Mars years is 148.5. Your life expectancy age in Jupiter years is 936.9.`);
  });

});