//DataTypes:

//The primitive data types in JavaScript include string, number, boolean, undefined, null, and symbol. The non-primitive data type includes the object.

//keywods let ,const,var

// var name = "Abc";
// console.log(typeof(name));
// console.log(name);
//  name =25;
// console.log(typeof(name));
// console.log(name);
// name = true;
// console.log(typeof(name));
// let hello;
// console.log(hello);

//Template literal (``)
/*var sentence = `yhidddd
ddddddddddd
dddddddd

ddddddddd`;
console.log(sentence);*/
 
//Object
//1.Array
//2.js object

//Arrays
//let numbers = [1,2,3,5,6,8];
//console.log(numbers);

//using index retieve values:
//0 to lenght of the array

//console.log(numbers[0]);

//js object:(key value pair)

// let person ={
// name:'smith',
// age:25,
// qualification:'B.E'
// }
// console.log(person.name);
// console.log(person['name'],person['age']);

// let numbers = [1,2,3];
// numbers.push(4,5);
// console.log(numbers);
// console.log(numbers.pop());
// console.log(numbers.pop());
// console.log(numbers);

// numbers.unshift(10);
// console.log(numbers);
// numbers.shift();
// console.log(numbers);

//splice

// let numbers = [11,22,33,19,1,2,3,4,6];
// numbers.splice(4,4,5);
// console.log(numbers);

//Iteration

//for loop
// let i =0;
// for(;i<=10;)

// {
// console.log('Hi');
// i++;
// }

// for in loop

// let numbers = [10,20,30];

// for(let i in numbers)
// {
//     console.log(numbers[i]);
// }
//for of

// let numbers = [1,2,3,4];
//  for (let val of numbers)
//  {
//     console.log(val);
//  }

//for each

// let numbers = [1,2,3,4];


// numbers.forEach((con)=>{
//     console.log(con*2);
// })

// let string = 'a p p l e';
// let split = string.split(' ');
// console.log(split);
// console.log(split.join(' '));

// let person ={
//     name:'smith',
//     age:25
// }
// console.log(JSON.stringify(person));

// let person1 =`{
//     "name":"smith",
//     "age":25
// }`

// console.log(JSON.parse(person1));

//JSON ITERATION

let person = {
    name:'smith',
    age:25,
    city:'NY'
}

// console.log(Object.keys(person));
// console.log(Object.values(person));

// for(let i in Object.keys(person))
// {
//     console.log(Object.values(person)[i]);
// }

// for(let val of Object.values(person))
// {
//     console.log(val);
// }

//console.log(Object.entries(person));

// for(let [key,value] of Object.entries(person))
// {
//     console.log(key,value);
// }

//Hoisting
// console.log(x);
// //let x=0;
// var x =0;
// console.log(x);

//scope


// for(var i=0;i<5;i++);
// console.log(i);

//XMLHttpRequest(XHR)


//2.npm install xhr2
//



let XMLHttpRequest = require('xhr2');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();

xhr.onload = function()
{
    let counties = JSON.parse(xhr.responseText);
    for(let con of counties )
    console.log(con.region);
}