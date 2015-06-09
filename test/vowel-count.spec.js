/// <reference path="../typings/jasmine/jasmine.d.ts"/>
var vowelCount = require('../js/vowel-count.js');

describe('vowel-count', function () {
  it('Handles a single vowel', function () {
    expect(vowelCount('hi')).toEqual(1);
  });
  
  it('Handles all vowels', function () {
    expect(vowelCount('aeiou')).toEqual(5);
  });
  
  it('Handles capital vowels', function () {
    expect(vowelCount('Abe Lincoln')).toEqual(4);
  });
  
  it('Handles no vowels', function () {
    expect(vowelCount('bszn, q')).toEqual(0);
  });
  
  it('Handles empty strings', function () {
    expect(vowelCount('')).toEqual(0);
    expect(vowelCount()).toEqual(0);
    expect(vowelCount(null)).toEqual(0);
  });
});
