"use strict";
let users = [];
let user1 = {
    id: 1,
    name: "Najmul Haque Talukder",
    age: 20
};
//todo : for user2
let user2 = {
    id: 2,
    name: "Rafsin Adnan Joy",
    age: 15
};
users.push(user1);
users.push(user2);
let printFun = (user) => {
    console.log(` UserId : ${user.id}. Username : ${user.name}. Age : ${user.age}`);
};
users.forEach(user => printFun(user));
