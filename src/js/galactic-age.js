export class Person {
  constructor(age) {
    this.earthAge = age;
    this.galacticAges = this.convertSolarYears(this.earthAge);
  }

  convertSolarYears(earthYears) {
    const solarYears = {
    'Mercury':   .24,
    'Venus':     .62,
    'Earth':       1,
    'Mars':     1.88,
    'Jupiter': 11.86
    }
    let converted = {};
    for (const planet in solarYears) {
      converted[planet] = earthYears / solarYears[planet];
    }
    return converted;
  }

  getGalacticAge(planet) {
    return `You are ${Math.floor(this.galacticAges[planet])} years old on ${planet}.`;
  }
}