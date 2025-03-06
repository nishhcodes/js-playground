//write a function that has parameter that checks whether a given number is even or odd

const num1 = 23;
const num2 = 56;
const num3 = 45;
const num4 = 22;

function isEven(num) {
    if (num%2===0) {
        console.log(true);
    } else {
        console.log(false);
    }
} 

isEven(23);
isEven(56);
isEven(45);
isEven(22);