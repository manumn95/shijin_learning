//var

// var a='apple';
// console.log(a);
// var a =25;
// console.log(a);

// let a =['apple'];
// if(a)
// {
//     let b = 'hi';
//     console.log(b);
// }
// console.log(a);

// let a  ='apple';
//  a = 25;
// const pi =3.14;
//  pi = 88;

// const pi = 3.14;
// let a = 24;
// var b =35;
// let b =55;

// let name;
// function name1()
// {
// name = 'apple';
// }
// console.log(name);
// name1();

// for(let i=0;i<10;i++);
// console.log(i);


//scope
// {
//    var a =24;   
// }
// console.log(a);


//spread opeartor(...)

// let numbers = [1,2,3,4];
// let a = [...numbers];
// console.log(a);

// let numbers = [1,2,3,4];
// console.log(...numbers);//convert list of values


//shallow 

// let x =10;
// let y =x;
// console.log(x);
// console.log(y);
// console.log('------------------------')
// x=20;
// console.log(x);
// console.log(y);
// console.log('------------------------')
// let a =[1,2,3,4];
// let b =a;
// console.log(a);
// console.log(b);
// console.log('------------------------')
// b[0]=10;
// console.log(a);
// console.log(b);

//deep copy

// let a =[1,2,3,4];
// let b =[...a];
// console.log(a);
// console.log(b);

// a[0]=10;
// console.log(a);
// console.log(b);

// let obj1 = {
//     name:'shijin',
//     age:24
// }

// let obj2 = {
//     ...obj1,
//     cousin:'Manu'
// }
// console.log(obj2);
// console.log(obj1);

//array Destructuring

// let a = ['apple','mangao','orange','grapes'];
// // console.log(a[0]);
// // console.log(a[1]);

// let[fruit1,fruit2,...fruits]=a;
// console.log(fruits);
// for(let val of fruits)
// {
//     console.log(val);
// }

//object destructure

// let person = {
//     name:'shijin',
//     age:25
// }
// let {name,age}=person;

// let name='shijin';
// let age = 25;

// //object shorthand
// let person = {
//     name,
//     age
// }
// console.log(person);

//template literal(backtick)

// let name = 'shijin';
// let age =26;
// console.log(`My name is ${name} and my age is ${age}`)

// function num(val)
// {
//     for(let i=0;i<val.length;i++)
//     {
//         console.log(val[i]);
//     }
// }

// let values = (num)=>{
// console.log(num);
// }
// console.log([1,2,3,4]);

// let numbers = [1,2,3,5];
// numbers.forEach((val)=>{
//     console.log(val);
// })


// let val =(a,b)=> a+b;

// console.log(val(2,4));
// let name = ()=>'shijin';
// console.log(name());
   









































