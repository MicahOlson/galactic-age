export class Person {
  constructor(age, gender, activityLevel) {
    this.earthAge = age;
    this.gender = gender;
    this.activityLevel = activityLevel;
    this.galacticAges = this.setGalacticAges();
    this.galacticLifeExpectancies = this.setGalacticLifeExpectancies();
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

  setGalacticAges() {
    return this.convertSolarYears(this.earthAge);
  }

  getGalacticAge(planet) {
    return `You are ${Math.floor(this.galacticAges[planet])} years old on ${planet}.`;
  }

  setEarthLifeExpectancy(gender, activityLevel) {
    let earthLifeExpectancy = 81.1;
    if (gender === 'Male') {
      earthLifeExpectancy -= 5;
    }
    if (activityLevel === 'Sedentary') {
      earthLifeExpectancy -= 3;
    }
    return earthLifeExpectancy;
  }

  setGalacticLifeExpectancies() {
    return this.convertSolarYears(this.setEarthLifeExpectancy(this.gender, this.activityLevel));
  }

  getGalacticLifeExpectancy(planet) {
    const yearsToLive =  Math.ceil(this.galacticLifeExpectancies[planet] - this.galacticAges[planet]);
    return `Based on your gender and activity level, on ${planet} you will live approximately ${yearsToLive} more years.`;
  }
}