// findMajorityInArr.js
//Topic: Array Manipulation

// Description
// Given an array of integers, find the majority element.
// A majority element is one that appears more than floor(N/2) times, where N is the length of the array.
// You can assume that the array is non-empty and the majority element always exists in the array.

/**
 * @param {number[]} nums - Массив целых чисел
 * @returns {number} Элемент большинства
 */
function findMajorityElement(nums) {
    let candidate = null;
    let count = 0;
  
    // Phase 1: Find a candidate for the majority element
    for (let num of nums) {
      if (count === 0) {
        candidate = num;
      }
      count += (num === candidate) ? 1 : -1;
    }
  
    // Phase 2: Verify that the candidate is the majority element
    count = 0;
    for (let num of nums) {
      if (num === candidate) {
        count++;
      }
    }
  
    if (count > Math.floor(nums.length / 2)) {
      return candidate;
    } else {
      throw new Error("No majority element found");
    }
  }
