var n1 = document.getElementById("n1"); // types assertions
var n2 = document.getElementById("n2");
var button = document.getElementById("btn");
var res = document.getElementById("div");
var result = document.getElementById("result");
function plus(n1, n2) {
    return n1 + n2;
}
// button.addEventListener("click", function (){
//   res.innerHTML = plus(+n1.value, +n2.value).toString();
// });
var names = ["Alisson ", "Rangel ", "Alves ", 89, 130, " Escórcio"];
// names.forEach(function (name){
//   console.log(name.toUpperCase());
// })
names.forEach(function (name) {
    if (typeof name === "string") {
        result.innerHTML += name.toUpperCase();
    }
    else {
        result.innerHTML += name.toString();
    }
});
var user = {
    name: "Alisson",
    age: 130
};
var user2 = {
    name: "Rangel"
};
function resumo(user) {
    if (user.age !== undefined) {
        console.log("Hello ".concat(user.name, ", you are ").concat(user.age, " years old"));
    }
    else {
        console.log("Hello ".concat(user.name));
    }
}
resumo(user);
resumo(user2);
//Union Types
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
        console.log("Hello ".concat(user.name, ", you are ").concat(user.age, " years old"));
    }
    else {
        console.log("Hello ".concat(user.name));
    }
}
resumo2({ name: "Rangel" });
var user3 = {
    name: "Alves"
};
resumo2(user3);
var sum = function (n1, n2) { return n1 + n2; };
var subtract = function (n1, n2) { return n1 - n2; };
button.addEventListener("click", function () {
    res.innerHTML = plus(+n1.value, +n2.value).toString();
    console.log(sum(+n1.value, +n2.value));
    console.log(subtract(+n1.value, +n2.value));
});
