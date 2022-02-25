"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = { maxOfThree, sum, multiply }; //add all of your function names here that you need for the node mocha tests

/**
 *
 * @param {number} a is a number
 * @param {number} b is a number
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
  let largest = a;

  if (b > c) {
    largest = Math.max(largest, b);
  } else {
    largest = Math.max(largest, c);
  }
  return largest;
}

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
  let res = 0;
  for (const number of arr) {
    res += number;
  }
  return res;
}
// console.log(sum([1, 2, 3, 4]));

/**
 *
 * @param {Array} arr of numbers
 * @returns {number} multipled of arr numbers
 */
function multiply(arr) {
  let tot = 1;
  for (const number of arr) {
    tot += number;
  }
  return tot;
}
console.log(multiply([1, 2, 3, 4]));
