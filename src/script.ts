let n1 = document.getElementById("n1") as HTMLInputElement; // types assertions
let n2 = document.getElementById("n2") as HTMLInputElement;
let button = document.getElementById("btn") as HTMLButtonElement;
let res = document.getElementById("div") as HTMLDivElement;
let result = document.getElementById("result") as HTMLDivElement;

function plus(n1: number, n2: number): number {
  return n1 + n2;
}

// button.addEventListener("click", function (){
//   res.innerHTML = plus(+n1.value, +n2.value).toString();
// });

let names = ["Alisson ","Rangel ","Alves ", 89,130, " Escórcio"]

// names.forEach(function (name){
//   console.log(name.toUpperCase());
// })
names.forEach(function (name){
  if (typeof name === "string") {
    result.innerHTML += name.toUpperCase()
  } else {
    result.innerHTML += name.toString()
  }
})

let user = {
  name: "Alisson",
  age: 130
}

let user2 = {
  name: "Rangel"
}

type User = {
  name: string,
  age?: number
}

function resumo (user: User){
  if (user.age !== undefined){
    console.log(`Hello ${user.name}, you are ${user.age} years old`);
  } else {
    console.log(`Hello ${user.name}`);
  }
}

resumo(user)
resumo(user2)

//Union Types
function showAge(age: number | string) {
  if (typeof age !== 'number') {
    console.log(age.toUpperCase());  
  } else {
    console.log(age);
  }
}

showAge(130)
showAge("126")

// type User2 = {
//   name: string,
//   age?: number
// }

interface User2 {
  //name: string;
  name: 'Alisson' | 'Rangel' | 'Alves'
}
interface User2 {
  age?: number;
}

function resumo2 (user: User2){
  if (user.age !== undefined){
    console.log(`Hello ${user.name}, you are ${user.age} years old`);
  } else {
    console.log(`Hello ${user.name}`);
  }
}

resumo2({name: "Rangel"})

let user3: User2 = {
  name: "Alves"
}

resumo2(user3)

type MathFunction = (n1: number, n2: number) => number;

const sum: MathFunction = (n1, n2) => n1 + n2;
const subtract: MathFunction = (n1, n2) => n1 - n2;

button.addEventListener("click", function (){
  res.innerHTML = plus(+n1.value, +n2.value).toString();
  console.log(sum(+n1.value, +n2.value));
  console.log(subtract(+n1.value, +n2.value));
});

