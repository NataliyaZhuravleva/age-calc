import Planets from '../src/js/planets.js';
import Planet from '../src/js/planet.js';

describe('Planets', ()=>{
  let planet;
  let planets;

  test("Should correctly create Planets class with planetsArray",()=>{
    planet=new Planet("Earth", 1);
    planets=new Planets(planet);
    planets.planetsArray[0]=planet;
    expect(planets.planetsArray[0]).toEqual({"name": "Earth", "ratio": 1});
  });
  test ("Should correctly add planets to planetsArray", ()=>{
    const Earth=new Planet("Earth", 1);
    let planets=new Planets();
    planets.addPlanets(Earth);
    expect(planets.planetsArray).toEqual([Earth]);
  });
});
