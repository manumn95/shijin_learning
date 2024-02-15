//1.traditonal for loop
//syantax
// for(initialize;condition;inc/dec)
// {
//     statement;
// }

//Print 1 to 10 numbers;
// for(let i =1;i<=10;i++)
// {
//     console.log(i);
// }



// for(let i=0;i<numbers.length;i++)
// {
//     console.log(numbers[i]);
// }

// for(let i in numbers)
// {
//     console.log(numbers[i]);
// }

// for(let val of numbers)
// {
//     console.log(val);
// }
// let numbers = [1,2,3,4,5,6];
// numbers.forEach((val)=>
// {
//     console.log(val);
// })



// for(let i=0;i<person.length;i++)
// {
//     console.log(person[i].skills.hobbies[1]);
// }


// let a = Object.keys(person);
// console.log(a);
// let b = Object.values(person);
// console.log(b);

// for(let val of Object.values(person))
// {
//     console.log(val);
// }

// Object.keys(person).forEach(element => {
//    if(element == 'email')
//    {
//     console.log(person[element]);
//    }
// });

let person = 
{
    name:'smith',
    age:25,
    email:'smith@gmail.com',
    skills:{
        hobbies:['cricket','football']
    }
}
for(let [key,value] of Object.entries(person))
{
    console.log(key,value);
}
