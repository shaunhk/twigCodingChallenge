//Tests for groupArrayElements to pass

'use strict';
const expect = require('chai').expect;

describe('groupArrayElementsTest()',  function() {

  var ArrayGroup = require('./arrayGroup.js');

  it('should take an array of elements and a number N and then return a \
  collection of N arrays containing the elements in an even split.', function(){

    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const expected = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

    const actual = ArrayGroup.groupArrayElements(input, 3);

    expect(actual).to.eql(expected);
  });

  it('should take an array of elements and where an even split is not possible \
  return the remainder in the final nested array', function(){

    const input1 = [1, 2, "3", 4, "bananas"];

    const expected1 = [[1, 2], ["3", 4], ["bananas"]];

    const actual1 = ArrayGroup.groupArrayElements(input1, 3);

    expect(actual1).to.eql(expected1);

    const input2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const expected2 = [[1, 2, 3, 4, 5], [6, 7, 8, 9]];

    const actual2 = ArrayGroup.groupArrayElements(input2, 2);

    expect(actual2).to.eql(expected2);

  });

  it('should accept an empty array of zero elements',
  function(){

    const input = [];

    const expected = [[], [], [], []];

    const actual = ArrayGroup.groupArrayElements(input, 4);

    expect(actual).to.eql(expected);
  });

  it('should accept an array of a positive length that is less than n',
  function(){

    const input = [1, 2, 3, 4];

    const expected = [[1], [2], [3], [4], []];

    const actual = ArrayGroup.groupArrayElements(input, 5);

    expect(actual).to.eql(expected);

  });

});
