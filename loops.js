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
const padding='0'
const maxI=11
const maxJ=11
//-------


let padLength
let stringMax
stringMax=""+maxI*maxJ
padLength=stringMax.length
for (let i = 1; i < maxI; i++) {
        let result = ""
        for (let j = 1; j < maxJ; j++) {
                let k
                k=""+(i*j)
                while(k.length<padLength){
                        k=padding+k
                       // console.log(k)
                }
                result+=k+'\t'
                
        }
        console.log(result)

}