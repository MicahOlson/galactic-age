export class Person {
  constructor(age) {
    this.earthAge = age;
    this.galacticAges = this.setGalacticAges();
  }

  setGalacticAges() {
    const solarYears = {
      'Mercury':   .24,
      'Venus':     .62,
      'Mars':     1.88,
      'Jupiter': 11.86
    }
    let galacticAges = {};
    for (const planet in solarYears) {
      galacticAges[planet] = this.earthAge / solarYears[planet];
    }
    return galacticAges;
  }

  getGalacticAge(planet) {
    return `You are ${Math.floor(this.galacticAges[planet])} years old on ${planet}.`;
  }
}