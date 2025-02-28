// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// // console.log(reverseString("hello")); 
// const rev = reverseString('hello');
// console.log(rev);

// function isPalindrome(str) {
//     const reversed = str.split('').reverse().join('');
//     return str === reversed;
// }
// console.log(isPalindrome("racecar")); // true
// console.log(isPalindrome("hello")); // false


// function factorial(n) {
//     return n === 0 ? 1 : n * factorial(n - 1);
// }
// console.log(factorial(4)); // 120


// function fibonacci(n) {
//     if (n <= 1) return n;
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(6)); // 8
// console.log(fibonacci(1)); // 8
// console.log(fibonacci(3)); // 8


// function findMax(arr) {
//     return Math.max(...arr);
// }
// console.log(findMax([10, 20, 5, 100, 30]));


// function removeDuplicates(arr) {
//     return [...new Set(arr)];
// }
// console.log(removeDuplicates([1, 2, 3, 2, 4, 3, 5])); // [1, 2, 3, 4, 5]


// function countOccurrences(arr) {
//     return arr.reduce((acc, curr) => {
//         acc[curr] = (acc[curr] || 0) + 1;
//         return acc;
//     }, {});
// }
// console.log(countOccurrences(["a", "b", "a", "c", "b", "a"])); 


// function areArraysEqual(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//     return arr1.every((val, index) => val === arr2[index]);
// }
// console.log(areArraysEqual([1, 2, 3], [1, 2, 3])); // true
// console.log(areArraysEqual([1, 2, 3], [1, 2, 4])); // false


// function reverseString(str) {
//     return str.split('').reverse().join("");
// }
// const hel = reverseString('hello');
// console.log(hel);

// function isAnagram(str1, str2) {
//     return str1.split('').sort().join('') === str2.split('').sort().join('');
// }
// console.log(isAnagram('listen', 'silent'));

// for (let i = 1; i <= 100; i++) {
//     if (i % 15 === 0) console.log("Himel");
//     else if (i % 3 === 0) console.log("Lichen");
//     else if (i % 5 === 0) console.log("Abir");
//     else console.log(i);
// }

// function firstNonRepeatingChar(str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
//             return str[i];
//         }
//     }
//     return null;
// }

// console.log(firstNonRepeatingChar("swiss"));


// function findMissingNumber(arr, n) {
//     let totalSum = (n * (n + 1)) / 2;
//     let actualSum = arr.reduce((sum, num) => sum + num, 0);
//     return totalSum - actualSum;
// }

// console.log(findMissingNumber([1, 2, 4, 5, 6], 6));




