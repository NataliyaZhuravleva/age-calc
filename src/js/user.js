export default class User {
  constructor(age, country) {
    this.age = age;
    this.agesArray = [];
    this.country = country;
    this.lifeExpectancyArray = [];
    this.pastLifeExpectancyArray = [];
  }

  calculateAge(planets) {
    planets.planetsArray.forEach(function (element) {
      this.agesArray.push(parseFloat((this.age * element.ratio).toFixed(1)));
    }, this);
  }

  calculateLifeExpectancy(planets) {
    if (this.age < this.country.averageLifeExpectancy) {
      planets.planetsArray.forEach(function (element) {
        this.lifeExpectancyArray.push(parseFloat((this.country.averageLifeExpectancy * element.ratio).toFixed(1)));
      }, this);
    } else {
      
    }
  }
}