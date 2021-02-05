import { Person } from '../src/js/galactic-age.js';

describe('Person', () => {
  test('should correctly construct a person object with an earth age', () => {
    const person = new Person(30);
    expect(person.earthAge).toEqual(30);
  });
});