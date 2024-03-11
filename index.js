//promises
//states
// pending
// fullfill/resolve
// reject

// let promise = new Promise((resolve, reject) => {
//  return resolve();
// });
// promise.then(
//   () => {
//     console.log("resolved");
//   },
//   () => {
//     console.log("rejcted");
//   }
// );

// let numbers = 21;

// new Promise((resolve, reject) => {
//   if (numbers % 2 == 0) {
//     return resolve("Even Number");
//   } else {
//     return reject("odd");
//   }
// })
//   .then(
//     (res) => {
//       console.log(res);
//     },
//     (reject) => {
//       console.log(reject);
//     }
//   )

//   .then(() => {
//     console.log("Hi");
//   })
//   .then(() => {
//     console.log("Hi");
//   })
//   .then(() => {
//     console.log("Hi");
//   })
//   .then(() => {
//     console.log("Hi");
//   });

// new Promise((res, rej) => {
//   return res(1);
// })
//   .then((result) => {
//     return result;
//   })
//   .then((res) => {
//     console.log(res + 10);
//   });

//fetch countries
// let fetchCountries = () => {
//   fetch("https://restcountries.com/v3.1/all")
//     .then((response) => {
//       return response.json();
//     })
//     .then((value) => {
//       let countries = value;
//       countries.forEach((val) => {
//         let div = document.createElement("div");
//         let images = document.createElement("img");
//         div.innerText = `country Name:${val.name.common}`;
//         images.src = `${val.flags.png}`;

//         div.appendChild(images);
//         document.body.appendChild(div);
//       });
//     })
//     .catch(() => {
//       console.log("failed");
//     });
// };
// fetchCountries();

// Async Awit

async function fetchData() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();
