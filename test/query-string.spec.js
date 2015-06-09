/// <reference path="../typings/jasmine/jasmine.d.ts"/>
var queryString = require('../js/query-string.js');

describe('query-string parsing', function () {
  it('Handles a single key-value pair', function () {
    expect(queryString('hi=there').hi).toEqual('there');
  });
  
  it('Handles a single key-value pair', function () {
    var obj = queryString('hi=there&bye=class');
    expect(obj.hi).toEqual('there');
    expect(obj.bye).toEqual('class');
  });
});

