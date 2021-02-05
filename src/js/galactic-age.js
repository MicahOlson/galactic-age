export class Person {
  constructor(age) {
    this.earthAge = age;
    this.galacticAges = {};
  }
  setGalacticAges() {
    const solarYears = {
      'Mercury': .24,
      'Venus': .62,
    }
    for (const planet in solarYears) {
      this.galacticAges[planet] = this.earthAge / solarYears[planet];
    }
  }
}