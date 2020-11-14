import Country from '../src/js/country.js';

describe('Country', ()=>{
  let country;

  test("Should correctly create Country class with id, country name and averageLifeExpectancy",()=>{
    country=new Country(1, "USA", 79);
    expect(country.id).toEqual(1);
    expect(country.name).toEqual("USA");
    expect(country.averageLifeExpectancy).toEqual(79);
  });
});
 
