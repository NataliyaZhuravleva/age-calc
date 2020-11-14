import Countries from '../src/js/countries';
import Country from '../src/js/country';

describe('Countries', () => {
  let country;
  let countries;

  test("Should correctly create Countries class with countriesArray", () => {
    country = new Country(1, "USA", 79);
    countries = new Countries(country);
    countries.countriesArray[0] = country;
    expect(countries.countriesArray[0]).toEqual({ "id": 1, "name": "USA", "averageLifeExpectancy": 79 });
  });
  
  test ("Should correctly add countries to countriesArray", ()=>{
    const USA=new Country(1, "USA", 79);
    countries=new Countries();
    countries.addCountries(USA);
    expect(countries.countriesArray).toEqual([USA]);
  });

});
