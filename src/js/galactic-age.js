export class Person {
  constructor(age) {
    this.earthAge = age;
    this.galacticAges = {};
  }
  setGalacticAges() {
    this.galacticAges['Mercury'] = this.earthAge / .24;
  }
}