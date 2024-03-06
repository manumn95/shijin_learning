const division = document.createElement("div");
document.body.appendChild(division);

const h2 = document.createElement("h2");
const p = document.createElement("p");

division.append(p, h2);

const div2 = document.createElement("div");
div2.innerHTML = `<p>Hello world! from div</p>`;
document.body.appendChild(div2);

// let h3 = document.querySelector(".h3");
// h3.innerText = "MAnu";
// console.log(h3.innerText);
let h3 = document.getElementById("h3");
h3.innerText = "Shijin";
console.log(h3.innerText);

const btn = document.querySelector("button");
btn.addEventListener("mouseover", () => {
  const header = document.createElement("h1");
  header.innerText = "Hello World!";
  header.style.color = "red";
  header.style.backgroundColor = "black";
  document.body.appendChild(header);
});

setTimeout(() => {
  console.log("hlo");
}, 5000);

setInterval(() => {
  console.log("hi");
}, 1000);
