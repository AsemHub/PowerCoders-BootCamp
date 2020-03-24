let a  = 0;
let b = 1;
let result = b

for (let i = 0; i < 10; i++) {
    result = a+b
    a=b
    b= result 
    console.log(result)
}