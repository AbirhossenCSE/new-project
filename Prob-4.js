// console.log('start');

// setTimeout(() => {
//     console.log('timeout');

// }, 0);
// Promise.resolve().then(() => console.log('promise'));
// console.log('End');

// import { useState, useEffect } from "react";

// const Counter = () =>{
//     const [count, setCount] = useState(0);

//     useEffect(() =>{
//         setInterval(() => {
//             setCount(count + 1);
//         }, 1000);
//     }, []);
//     return <h1>{count}</h1>;
// }
// export default Counter;


// function User(name) {
//     this.name = name;
// }
// User.prototype.sayHello = () => {
//     console.log(`Hello, ${this.name}`);

// }
// const user1 = new User('Alice');
// user1.sayHello();

// function Counter() {
//     let count = 0;
//     return () => console.log(count++);

// }
// const count1 = Counter();
// count1();
// count1();
// const count2 = Counter();
// count2();
// count2();

// console.log(foo);
// var foo = 'Hello';
// console.log(foo);

// useEffect(() => {
//     console.log('Effects runs');

// }, [user]);

// function sum(... numbers, extra) {
//     return numbers.reduce((acc, num) => acc + num, 0) + extra;
// }
// function sum(extra, ...numbers) { // ✅ extra comes first
//     return numbers.reduce((acc, num) => acc + num, 0) + extra;
// }

// const [user, setUser] = useState({ name: "Alice", age: 25 });
// function updateAge() {
//     setUser({ age: 30 });
// }

// function MyComponent() {
//     const inputRef = useRef();

//     useEffect(() => {
//         inputRef.current.focus();
//     }, []);
//     return <input />
// }

{/* <div onclick="console.log('Div clicked')">
<button onclick="console.log('Button click ed')">Click Me</button>
<div> */}

// console.log(1 + '2' + 3);

// function multiply(x, y = 2) {
//     return x * y;
// }
// console.log(multiply(5));
// console.log(multiply(5, undefined));
// console.log(multiply(5, null));

// const a = [1, 2, 3];
// const b = a;
// b.push(4);
// console.log(a);

// let x = 1;
// let y = 2;
// x = x + y++;
// console.log(x, y);

// const numbers = [1, 2, 3];
// numbers[10] = 10;
// console.log(numbers.length);

// let numbers = [1, 2, 3];
// numbers = numbers.map(num => num * 2);
// console.log(numbers);

// const x = 10;
// function foo() {
//     console.log(x);
//     const x = 20;
    
// }
// foo();

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


function createCounter() {
    let count = 0; // এটি createCounter-এর লোকাল ভ্যারিয়েবল
  
    return function() {
      count++; // ক্লোজারের কারণে count ভ্যারিয়েবলটি মেমোরিতে থাকে
      console.log(count);
    };
  }
  
  const counter = createCounter();
  counter(); // 1
  counter(); // 2
  counter(); // 3



