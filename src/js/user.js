export default class User {
  constructor(age, country) {
    this.age = age;
    this.agesArray = [];
  }

  calculateAge(planets) {
    planets.planetsArray.forEach(function (element) {
      this.agesArray.push(parseFloat((this.age*element.ratio).toFixed(1)));
    },this);
  }
}