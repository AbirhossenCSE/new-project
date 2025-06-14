// function squreArray(arr) {
//     arr.forEach(num => {
//         num = num * num;
//     });
//     return arr;
// }

// console.log(squreArray([1, 2, 3]));

// function squareArray(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] * arr[i];
//     }
//     return arr;
// }

// console.log(squareArray([1, 2, 3]));


// function outer() {
//     let count = 0;
//     return function inner(){
//         count ++;
//         console.log((count));
        
//     }
// }
// const counter = outer()
// counter();
// counter();
// counter();

// : What will be the output of this code?

// console.log('Start');
// setTimeout(() => {
//     console.log('Timeout');
    
// }, 0);
// Promise.resolve().then(() => console.log('Promise')
// );
// console.log('End');

// let student = {
//     name: 'Alice',
//     age: 20,
//     marks: { math: 80, english: 90}
// };

// student.marks.math += 10;
// student.marks.science = 85;

// console.log(student);

// var x = 10;
// function test() {
//     console.log(x);
//     var x = 20;
    
// }
// test()

// let i = 1;
// while (i < 5) {
//     console.log(i);
//     i++;
    
// }
// var x = 10;
// function test() {
//     console.log(x);
//     var x = 20;
    
// }
// test()

// let i = 1;
// while (i < 5) {
//     console.log(i);
//     i++;
    
// }




// async function fetchData() {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     return data;
// }
// function sum(... numbers, extra) {
//     return numbers.reduce((acc, num) => acc + num, 0) + extra;
// }

// function updateAge() {
//     setUser(prevUser => ({ ...prevUser, age: 30 }));
// }


// function createCounter() {
//     let count = 0; // এটি createCounter-এর লোকাল ভ্যারিয়েবল

//     return function() {
//       count++; // ক্লোজারের কারণে count ভ্যারিয়েবলটি মেমোরিতে থাকে
//       console.log(count);
//     };
//   }

//   const counter = createCounter();
//   counter(); // 1
//   counter(); // 2
//   counter(); // 3



// const obj = {
//   name: "John",
//   greet: function () {
//     setTimeout(() => {
//       console.log("Hello, " + this.name); // John
//     }, 1000);
//   }
// };



// function createCounter() {
//     let count = 0; // এটি createCounter-এর লোকাল ভ্যারিয়েবল

//     return function() {
//       count++; // ক্লোজারের কারণে count ভ্যারিয়েবলটি মেমোরিতে থাকে
//       console.log(count);
//     };
//   }

//   const counter = createCounter();
//   counter(); // 1
//   counter(); // 2
//   counter(); // 3



// const obj = {
//   name: "John",
//   greet: function () {
//     setTimeout(() => {
//       console.log("Hello, " + this.name); // John
//     }, 1000);
//   }
// };



