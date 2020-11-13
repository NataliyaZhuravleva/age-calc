import Planet from '../src/js/user.js';

describe('Planet', ()=>{
  let planet;
  test("Should correctly create User class with user's age",()=>{
    planet=new Planet("Earth");
    expect(planet.name).toEqual("Earth");
  });
});
