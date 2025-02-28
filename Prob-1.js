// function checkNumber(n) {
//     if (n < 0) {
//         console.log("Number is negative");
//     } else if (n % 2 === 0) {
//         console.log("Even");
//     } else {
//         console.log("Odd");
//     }
// }

// checkNumber(5);


// function main() {
//     const n = parseInt(readLine().trim(), 10);
//     const arr = readLine().trim().split(' ').map(Number);

//     const sum = arr.reduce((acc, num) => acc + num, 0);

//     console.log(sum);
// }

// arr = [10, 5, 3]
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// const reversedString = s.split('').reverse().join('');

// console.log(reversedString);

// for (let i = s.length - 1; i >= 0; i--) {
//     reversed += s[i];
// }
// console.log(reversed);


// function reverseString(s) {
//     let reversed = '';
//     for (let i = s.length - 1; i >= 0; i--) {
//         reversed += s[i];
//     }
//     console.log(reversed);
// }

// reverseString("hello");


// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');
//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }

// function main() {
//     const n = parseInt(readLine().trim(), 10);
//     const arr = readLine().trim().split(' ').map(Number);
    
//     // Find the maximum element using Math.max()
//     const maxElement = Math.max(...arr);
    
//     console.log(maxElement);
// }




// function findMax(arr) {
//     let maxVal = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > maxVal) {
//             maxVal = arr[i];
//         }
//     }
//     console.log(maxVal);
// }

// // Example Usage
// findMax([1, 3, 5, 2, 4]); // Output: 5
// findMax([-1, -2, -3, -4]); // Output: -1


// // SVAE
// const n = parseInt(readLine().trim(), 10);

//     let arr = [];

//     for (let i = 0; i < n; i++) {
//         const arrItem = readLine();
//         arr.push(arrItem);
//     }

//     const lookupKey = readLine();

// const n = parseInt(readLine().trim(), 10);
//     let dictionary = {};
//     for (let i = 0; i < n; i++) {
//         const [key, value] = readLine().trim().split(' ');
//         dictionary[key] = parseInt(value, 10); 
//     }

//     const lookupKey = readLine().trim();
//     console.log(dictionary.hasOwnProperty(lookupKey) ? dictionary[lookupKey] : "Not Found");




    const s = inputString.trim();
    
    // Check if the string is equal to its reverse
    console.log(s === s.split('').reverse().join('') ? "Yes" : "No");