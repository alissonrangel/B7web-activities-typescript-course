"use strict";
let n1 = document.getElementById("n1");
let n2 = document.getElementById("n2");
let button = document.getElementById("btn");
let res = document.getElementById("div");
let result = document.getElementById("result");
function plus(n1, n2) {
    return n1 + n2;
}
let names = ["Aroldo ", "Alencar ", "Cardoso ", 89, 130];
names.forEach(function (name) {
    if (typeof name === "string") {
        result.innerHTML += name.toUpperCase();
    }
    else {
        result.innerHTML += name.toString();
    }
});
let user = {
    name: "Alisson",
    age: 130
};
let user2 = {
    name: "Rangel"
};
function resumo(user) {
    if (user.age !== undefined) {
        console.log(`Hello ${user.name}, you are ${user.age} years old`);
    }
    else {
        console.log(`Hello ${user.name}`);
    }
}
resumo(user);
resumo(user2);
function showAge(age) {
    if (typeof age !== 'number') {
        console.log(age.toUpperCase());
    }
    else {
        console.log(age);
    }
}
showAge(130);
showAge("126");
function resumo2(user) {
    if (user.age !== undefined) {
        console.log(`Hello ${user.name}, you are ${user.age} years old`);
    }
    else {
        console.log(`Hello ${user.name}`);
    }
}
resumo2({ name: "Rangel" });
let user3 = {
    name: "Alves"
};
resumo2(user3);
const sum = (n1, n2) => n1 + n2;
const subtract = (n1, n2) => n1 - n2;
button.addEventListener("click", function () {
    res.innerHTML = plus(+n1.value, +n2.value).toString();
    console.log(sum(+n1.value, +n2.value));
    console.log(subtract(+n1.value, +n2.value));
});
