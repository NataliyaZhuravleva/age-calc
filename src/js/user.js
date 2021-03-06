export default class User {
  constructor(age, country) {
    this.age = age;
    this.agesArray = [];
    this.country = country;
    this.lifeExpectancyArray = [];
    this.leftToLiveArray = [];
    this.pastLifeExpectancyArray = [];
  }

  calculateAge(planets) {
    let calculateAgeString = ``;

    for (let i = 0; i < planets.planetsArray.length; i++) {
      this.agesArray.push(parseFloat((this.age * planets.planetsArray[i].ratio).toFixed(1)));
      calculateAgeString += `Your age in ${planets.planetsArray[i].name} years is ${this.agesArray[i]}. `;
    }
    calculateAgeString = calculateAgeString.substring(0, calculateAgeString.length - 1);
    return calculateAgeString;

  }

  calculateLifeExpectancy(planets) {
    let calculateLifeExpectancyString = ``;

    for (let j = 0; j < planets.planetsArray.length; j++) {
      this.lifeExpectancyArray.push(parseFloat((this.country.averageLifeExpectancy * planets.planetsArray[j].ratio).toFixed(1)));
      calculateLifeExpectancyString += `Your life expectancy age in ${planets.planetsArray[j].name} years is ${this.lifeExpectancyArray[j]}. `;
    }
    calculateLifeExpectancyString = calculateLifeExpectancyString.substring(0, calculateLifeExpectancyString.length - 1);
    return calculateLifeExpectancyString;
  }

  calculateLeftToLive(planets) {
    let calculateLeftToLiveString = ``;
    let calculatePastLifeExpectancyString = ``;

    if (this.age < this.country.averageLifeExpectancy) {
      for (let i = 0; i < this.agesArray.length; i++) {
        this.leftToLiveArray[i] = parseFloat((this.lifeExpectancyArray[i] - this.agesArray[i]).toFixed(1));
        calculateLeftToLiveString += `You should be alive ${this.leftToLiveArray[i]} years more in ${planets.planetsArray[i].name} years. `;
      }
      calculateLeftToLiveString = calculateLeftToLiveString.substring(0, calculateLeftToLiveString.length - 1);
      return calculateLeftToLiveString;
      
    } else {
      for (let i = 0; i < this.agesArray.length; i++) {
        this.pastLifeExpectancyArray[i] = parseFloat((this.agesArray[i] - this.lifeExpectancyArray[i]).toFixed(1));
        calculatePastLifeExpectancyString += `You have already exceeded the average life expectancy by ${this.pastLifeExpectancyArray[i]} years in ${planets.planetsArray[i].name} years. `;
      }
      calculatePastLifeExpectancyString = calculatePastLifeExpectancyString.substring(0, calculatePastLifeExpectancyString.length - 1);
      return calculatePastLifeExpectancyString;
    }
  }
}
