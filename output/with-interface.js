"use strict";
//todo: interface declare
//! interface name decalare with must be Capital word
//! useing interface
let Users = [];
//! useing interface
let User1 = {
    id: 1,
    name: "Najmul Haque Talukder",
    age: 20
};
//! useing interface
let User2 = {
    id: 2,
    name: "Rafsin Adnan Joy",
    age: 15
};
Users.push(User1);
Users.push(User2);
//! useing interface
let PrintFun = (user) => {
    console.log(` UserId : ${user.id}. Username : ${user.name}. Age : ${user.age}`);
};
Users.forEach(user => PrintFun(user));
