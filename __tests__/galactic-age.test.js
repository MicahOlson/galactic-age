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

  test('should correctly calc age on Mercury and add to galacticAges', () => {
    person.setGalacticAges();
    expect(person.galacticAges['Mercury']).toBeCloseTo(125);
  });

  test('should correctly calc age on Venus and add to galacticAges', () => {
    person.setGalacticAges();
    expect(person.galacticAges['Venus']).toBeCloseTo(48.387);
  });

  test('should correctly calc age on Mars and Jupiter and add to galacticAges', () => {
    person.setGalacticAges();
    expect(person.galacticAges['Mars']).toBeCloseTo(15.957);
    expect(person.galacticAges['Jupiter']).toBeCloseTo(2.53);
  });
});