"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
module.exports = {
  maxOfThree,
  sum,
  multiply,
  findLongestWord,
  reverseArray,
  reverseArrayInPlace,
  scoreExams,
}; //add all of your function names here that you need for the node mocha tests

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
  for (let i = 0; i < arr.length; i++) {
    tot *= arr[i];
  }
  return tot;
}
// console.log(multiply([1, 2, 3, 4]));

/**
 *
 * @param {Array} arr of strings
 * @returns {number} return length of longest word
 */
function findLongestWord(arr) {
  let ans = 0;

  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i].length)
    ans = Math.max(ans, arr[i].length);
  }

  return ans;
}
// console.log(findLongestWord(["this", "is", "a", "test", "longest"])); //7

/**
 *
 * @param {Array} arr of strings
 * @returns {Array} myArr return reversed array
 */
function reverseArray(arr) {
  let myArr = [];
  myArr = arr.reverse();
  return myArr;
}
// console.log(reverseArray(["A", "B", "C"]));// → ["C", "B", "A"];

/**
 *
 * @param {Array} array of strings
 * @returns {Array} myArr return reversed place array
 */
var reverseArrayInPlace = function (array) {
  let arr2 = [];
  let arrLength = array.length;
  for (let i = 0; i < arrLength; i++) {
    arr2.push(array.pop());
  }
  for (let i = 0; i < arrLength; i++) {
    array[i] = arr2.shift();
  }
};
// let arrayValue = [1, 2, 3, 4, 5];
// reverseArrayInPlace(arrayValue);
// console.log(arrayValue); // → [5, 4, 3, 2, 1]

/**
 *
 * @param {Array} studentAnswers of array
 * @param {Array} correctAnswers of array
 * @returns {Array} myArr return an array
 */

function scoreExams(studentAnswers, correctAnswers) {
  let result = [];
  for (let i = 0; i < studentAnswers.length; i++) {
    let correct = 0;
    for (let j = 0; j < studentAnswers[0].length; j++) {
      if (studentAnswers[i][j] === correctAnswers[j]) {
        correct += 1;
      }
    }
    result.push(correct);
  }
  return result;
}

const studentAnswers = [
  [1, 1, 2, 4],
  [2, 1, 2, 2],
  [3, 1, 3, 4],
];
// const correctAnswers = [3, 1, 2, 4];
// console.log(scoreExams(studentAnswers, correctAnswers)); // [3,2,3]

/**
 *
 * @param {Number} a of int
 * @param {Number} b of int
 * @returns {Array} returns a 2-dimensional array containing 
sequential numbers across each row
 */

function generateArray(a, b) {}
console.log(
  "expect [ [1, 2, 3], [4, 5, 6], [7, 8, 9]] : ",
  generateArray(3, 3)
);
console.log("expect [ [1, 2, 3], [4, 5, 6]]: ", generateArray(2, 3));
console.log("expect [ [1], [2]]: ", generateArray(2, 1));
