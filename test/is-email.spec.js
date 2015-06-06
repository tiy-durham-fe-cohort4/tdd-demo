var isEmail = require('../js/is-email.js');

describe('is-email', function () {
  it('requires a single @', function () {
    expect(isEmail('foo@bar.com')).toBeTruthy();
  });
  
  it('can not have more than one @', function () {
    expect(isEmail('foo@@bar.com')).toBeFalsy();
  });
  
  it('allows dashes in the name', function () {
    expect(isEmail('foo-bar@bar.com')).toBeTruthy();
  });
  
  it('allows dots in the name', function () {
    expect(isEmail('foo.bar@bar.com')).toBeTruthy();
  });
  
  it('is false if no @', function () {
    expect(isEmail('foo.barbar.com')).toBeFalsy();
    expect(isEmail('foocom')).toBeFalsy();
    expect(isEmail('')).toBeFalsy();
  });
  
  it('gracefully handles nulls and undefineds', function () {
    expect(isEmail()).toBeFalsy();
    expect(isEmail(null)).toBeFalsy();
    expect(isEmail(0)).toBeFalsy();
  });
  
  it('requires a dot after the @', function () {
    expect(isEmail('foo@bar')).toBeFalsy();
  });
  
  it('allows underscores', function () {
    expect(isEmail('foo_baz@bar_baz.com')).toBeTruthy();
  });
  
  it('allows underscores', function () {
    expect(isEmail('foo_baz@bar_baz.com')).toBeTruthy();
  });
  
  it('allows numbers', function () {
    expect(isEmail('foo323@bar32.com')).toBeTruthy();
  });
});
