import { Person } from '../src/js/galactic-age.js';

let person;
beforeEach(() => {
  person = new Person(30, 'Male', 'Sedentary');
});

describe('Person', () => {
  test('should correctly construct a person object with an earth age', () => {
    expect(person.earthAge).toEqual(30);
  });

  test('should correctly assign given gender and activity level to properties', () => {
    expect(person.gender).toEqual('Male');
    expect(person.activityLevel).toEqual('Sedentary');
  })

  test('should correctly construct a person with a galactic ages object', () => {
    expect(typeof(person.galacticAges)).toEqual('object');
  });

  test('should correctly construct a person with a galactic life expectancies object', () => {
    expect(typeof(person.galacticLifeExpectancies)).toEqual('object');
  });
});

describe('Person.setGalacticAges()', () => {
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

describe('Person.getGalacticAge()', () => {
  test('should correctly return the age of the user on a given planet', () => {
    expect(person.getGalacticAge('Mercury')).toEqual('You are 125 years old on Mercury.');
  });
});

describe('Person.setEarthLifeExpectancy', () => {
  test('should correctly set an earth-age life expectancy', () => {
    expect(person.setEarthLifeExpectancy('Male', 'Sedentary')).toEqual(73.1);
  });
});

describe('Person.setGalacticLifeExpectancies', () => {
  test('should correctly return an object of galactic life expectancies', () => {
    const galacticLifeExpectancies = person.setGalacticLifeExpectancies();
    expect(galacticLifeExpectancies['Earth']).toEqual(73.1);
  });
});