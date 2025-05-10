// JavaScript Document

document.getElementById('mainDiv').innerHTML = 'Hello, World!';
document.write('This is a test');
// alert('Hello there');
document.write('<br>Another test');

console.log('Hello from the console.');
console.warn('Hello from the console.');
console.error('Hello from the console.');

var num1, num2, sum;
num1 = 10;
num2 = 5;
sum = num1 + num2;
console.log(sum);


var text1="This one doesn't have spaces";
var text2 = 'this one has spaces';
var text3 = 'This one has spaces      inside the sting literal';
console.log(text1);
console.log(text2);
console.log(text3);

console.log(text1, text2, text3);


document.getElementById('mainDiv')
    .innerHTML = 'Text changed!';

function someFunction(){
    console.log('This is a statement');
    console.log('So is this one');
}

someFunction();


for(var i = 0; i < 3; i++){
    console.log("Inside Loop: " + i);
}
console.log("Outside Loop: " + i );

console.log(`Outside Loop: ${i}`);

for(let j = 0; j < 3; j++){
    console.log("Inside Loop: " + j);
}
//console.log("Outside Loop: " + j );

const PI = 3.14159;
console.log(PI);

console.log( 8 * 9 );
console.log( 8 / 9 );
console.log( 8 + 9 );
console.log( 8 - 9 );
console.log( 19 % 9 );

G
let user = "Joe";
let greeting = "ood Afternoon ";

let phrase = greeting + user;
console.log(phrase);


