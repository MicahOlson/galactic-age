import { Person } from '../src/js/galactic-age.js';

let person;
beforeEach(() => {
  person = new Person(30);
});

describe('Person', () => {
  test('should correctly construct a person object with an earth age', () => {
    expect(person.earthAge).toEqual(30);
  });
  
  test('should correctly construct a person with galactic ages', () => {
    expect(person.galacticAges).toEqual({});
  });
});