/// <reference path="../typings/jasmine/jasmine.d.ts"/>
var isPhoneNumber = require('../js/is-phone-number.js');

describe('is-phone-number', function () {
  it('Handles parenthesis', function () {
    expect(isPhoneNumber('(345) 234-2324')).toBe(true);
  });
  
  it('Handles numbers only', function () {
    expect(isPhoneNumber('3452342324')).toBe(true);
  });
  
  it('Requires area code', function () {
    expect(isPhoneNumber('2342324')).toBe(false);
  });
  
  it('Handles dots instead of spaces', function () {
    expect(isPhoneNumber('111.222.3333')).toBe(true);
  });
  
  it('Handles dashes instead of spaces', function () {
    expect(isPhoneNumber('111-222-3333')).toBe(true);
  });
  
  it('Disallows leading letters', function () {
    expect(isPhoneNumber('aha 111-222-3333')).toBe(false);
  });
  
  it('Disallows trailing letters', function () {
    expect(isPhoneNumber('111-222-3333zed')).toBe(false);
  });
  
  it('Disallows blanks', function () {
    expect(isPhoneNumber('')).toBe(false);
  });
  
  it('Disallows long numbers', function () {
    expect(isPhoneNumber('11122233334')).toBe(false);
  });
  
  it('Allows zero-nine', function () {
    expect(isPhoneNumber('1023456789')).toBe(false);
  });
});
