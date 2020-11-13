import Planet from '../src/js/planet.js';

describe('Planet', ()=>{
  let planet;

  test("Should correctly create User class with user's age",()=>{
    planet=new Planet("Earth");
    expect(planet.name).toEqual("Earth");
  });

  test("Should correctly create Planet class with planet's name and ratio", ()=>{
    planet=new Planet("Mercury", 0.24);
    expect(planet.name).toEqual("Mercury");
    expect(planet.ratio).toEqual(0.24);
  })
});
