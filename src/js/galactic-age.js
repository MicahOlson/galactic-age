export class Person {
  constructor(age) {
    this.earthAge = age;
    this.galacticAges = {};
  }
  setGalacticAges() {
    const solarYears = {
      'Mercury': .24,
      'Venus': .62,
      'Mars': 1.88,
      'Jupiter': 11.86
    }
    for (const planet in solarYears) {
      this.galacticAges[planet] = this.earthAge / solarYears[planet];
    }
  }
  getGalacticAge(planet) {
    this.setGalacticAges();
    return `You are ${Math.floor(this.galacticAges[planet])} years old on ${planet}.`;
  }
}