// let i = 0
// while ( i < 3 ) {
// console.log(i)
// i++;
// }

// let p = 3
// while (p) {
// console.log(p)
// p--;
// }

// let i = 0
// let string = ""
// while (i < 16 ) {
//     string += "Na"
//     i++
// }
// console.log(`${string} ${'Batman!'}`)

// let string = ""
// for (let i = 0; i < 16; i++) {
//     string += "Na"
// }
// console.log(`${string} ${'Batman!'}`)

// let sum = ""
// for (let i = 1; i<10; sum++){
//     sum += "2"
// }console.log(sum)

// for (let i = prompt('give a number greater than 100'); i > 100;) {
//         if (i<100) {
//                 prompt('give a number greater than 100');
// else {}
//         }

// let i = prompt('give a number greater than 100')
// while (i & i <= 100) {
//         i = prompt('please try again')
// }

// for (let i = prompt('give a number greater than 100');
// i&i <= 100;
// i = prompt('please try again'))
// { }

// let x=1;
// let y=1;
// const max=12;
// for (let j = 1; j < max; j++) {

//    let result = "";
//    x=1;
//         for (let i = 1; i < max; i++) {

//                 result += (x + "x" + y + "=" + x * y + "|")
//                 x++;
//         }

//     ++y;
//    console.log(result);

// for (let j=1; j<11; j++) {
//         let result = ""
//         for (let i = 1; i < 11; i++) {
//                 result = `Table Of ${j} ${i}x${j} = ${i*j}`
//                 console.log(`${result}`) }
//         }

// Table of 1: 1x1 = 1 1x2 = 2...
// Table of 2: 2x1 = 1 2x2 = 4...

// const ROWS = 3;
// const COLUMNS = 7;
// const PATTERN = '*';

// let rectangle = '';
// loops over rows
// for (let i = 0; i < 3; i++) {
//         let row = "";
//         // loops over columns

//         for (let j = 0; j < 7; j++) {
//                 row += "*";
//         }
//         // appends the newly created row to the rectangle
//         if (i < 3 - 1) {
//                 rectangle += row + '\n';
//         } else {
//                 rectangle += row;
//         }

// }
// console.log(rectangle);

// for (let j = 0; j < 10; j++) {

//         let str = ""

//         for (let i = 0; i < 10; i++) {
//                 str= str + "*";
//         }
//         console.log(str)

// }

// for (let j=1; j<11; j++) {
//         let result = ""
//         let result2 = `Table of =>(${j})`
//         for (let i = 1; i < 11; i++) {
//                 result = `${i}x${j}=${i*j}|`
//                 result2 += result
//         }
//         console.log(result2)
//         }

/*

*********
*       *
* Hello *
*       *
*********

*/

// for (let j=1; j<11; j++) {
//         let result = ""
//         let result2 =`Table of => (${j})`
//         for (let i = 1; i < 11; i++) {
//                 result2 += result
//                 if (String(i).length==1 || String(j).length==1) {
//                         result = `${i}x ${j}=${i*j}|`
//                 }
//                 result = `${i}x${j}=${i*j}|`

//         }
//         console.log(result2)
//         }

//   1   2   3   4   5   6   7 __8 __9  10
//   2   4   6   8  10  12  14  16  18 _20
// ...
//  10  20  30  40  50  60  70  80 _90 100

//Parametri
// function multiplecation(){
// const padding='0'
// const maxI=11
// const maxJ=11
// //-------

// let padLength
// let stringMax
// stringMax=""+maxI*maxJ
// padLength=stringMax.length
// for (let i = 1; i < maxI; i++) {
//         let result = ""
//         for (let j = 1; j < maxJ; j++) {
//                 let k
//                 k=""+(i*j)
//                 while(k.length<padLength){
//                         k=padding+k
//                        // console.log(k)
//                 }
//                 result+=k+'\t'

//         }
//         console.log(result)

// }
// }
// function buildRow(columns) {
//         let row = '';
//         for (let i = 0; i < columns; i++){
//                 row += '*';
// }
// return row;
// }
// let row = buildRow(5)
// function buildButton(rows, columns){
// let button = '';
// for(let i = 0; i < rows; i++){
//         button += buildRow(columns) + '\n';
//    }
// return button
// }
//         console.log(buildButton(3,5 ))

// function ranking(dps) {
//         let score
//         switch (dps) {
//                 case 1:
//                         score = ("Good!")
//                         break;
//                 case 5:
//                         score = ("Double kill!!")
//                         break;
//                 case 10:
//                         score = ("Triple kill!!!")
//                         break;
//                 case 15:
//                         score = ("Destroyer!")
//                         break;
//                 case 20:
//                         score = ("You're a god dude")
//         }

//         return score;

// }
// console.log(ranking(5));7

// let row = "";
// let columns = "";
// for (let i = 0; i < 11; i++) {
//   row += "*";
//   for (let j = 0; j < 1; j++) columns += "*";
// }
// console.log(row);
// console.log(`*  hello  *`);
// console.log(row);

// let weekDays = [
//   "sunday",
//   "monday",
//   "tuesday",
//   "wednesday",
//   "thursday",
//   "friday",
//   "saturday"
// ];
// let today = new Date();
// let day = today.getDay();
// console.log(weekDays[day]);
//Objects

// let user = {};
// user.name = "John";
// user.surname = "Smith";
// user.name = "Pete";
// delete user.name;

// console.log(user);

// let user = {
//   name: "John",
//   go() {
//     return this.name;
//   }
// };
// console.log(user.go());

// let calculator = {
//   read() {
//     this.a = prompt("First number?");
//     this.b = prompt("Second number?");
//     this.mul();
//     this.sum();
//   },
//   sum() {
//     return alert(+this.a + +this.b);
//   },
//   mul() {
//     return alert(this.a * this.b);
//   }
// };
// calculator.read();

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function() {
//     // shows the current step
//     alert(this.step);
//     return this;
//   }
// };
// ladder
//   .up()
//   .up()
//   .up()
//   .down()
//   .showStep();

// let fact = 6;
// for (let index = fact - 1; index > 0; index--) {
//   fact *= index;
// }
// console.log(fact);

// let arrayName = [0, 1, 2, 4, 8];
// function printAll(a) {
//   for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
//   }
// }
// function double(a) {
//   let arr = [];
//   for (let i = 0; i < a.length; i++) {
//     arr.push(a[i] * 2);
//   }
//   return arr;
// }
// console.log(double(arrayName));

// function hasEvens(a) {
//   for (let i = 0; i < a.length; i++) {
//     let isEven = i % 2 === 0;
//   }
//   return isEven;
// }
// console.log printEven);

// function areAllEven(arrayName) {
//   let areAllEven = true;
//   for (let item of arrayName) {
//     if (!isEven(item)) {
//       areAllEven = false;
//     }
//   }
//   return areAllEven;
// }

// function printAll2(arrayName, n = 0) {
//   for (let i = n; i < arrayName.length; i++) {
//     console.log(arrayName[i]);
//   }
// }
// let arr = ["khra klab", "ay kalam"];
// printAll2(arr);
// printAll2(numbers);
// printAll2(numbers2);

// numbers[0] = numbers[0] * 2;
// numbers[1] = numbers[1] * 2;
// numbers[2] = numbers[2] * 2;
// numbers[3] = numbers[3] * 2;
// numbers[4] = numbers[4] * 2;
// numbers[5] = numbers[5] * 2;

// function doubles(arr, n) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * n);
//   }
// }
// console.log(doubles(numbers, 5));
// console.log(numbers[0]);
// console.log(numbers);

// function sum(a) {
//   console.log(a * 7);
// }
// // sum(3);

// function area(width, height) {
//   return width * height + "m²";
// }
// console.log(area(7.8, 9));

// function person(Name, Height, Title) {
//   return `your name is ${Name}
// your height is ${Height}cm
// your title is ${Title}`;
// }
// console.log(person("Sohayb", "1658", "Modir"));

// let numbers = [3, 4, 5, 6, 8, 9];
// let arr2 = [23, 56, 44, 3, 8, "asem"];

// function duobled(arr, n = 1) {
//   for (let i = 0; i < arr.length; i++) {
//     let element = arr[i];
//     if (typeof element == "number") {
//       arr[i] *= n;
//     }
//   }
// }
// // duobled(numbers);

// duobled(arr2, numbers, 5);
// // console.log(arr2);
// function printEven(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0 && typeof arr[i] == "number") {
//       arr2.push(arr[i]);
//     }
//   }
//   return arr2;
// }
// let odds = printEven(arr2);
// console.log(odds);

// let todos = [
//   { id: 1, text: "learn javascript" },
//   { id: 2, text: "seek for a job" },
//   { id: 3, text: "forget everything" }
// ];

// function showTodos() {
//   return todos.map(todo => `<li>${todo.text}</li>`).join("");
// }
// document.querySelector("ul").innerHTML = showTodos();

