"use strict";
//todo: interface declare
//! interface name decalare with must be Capital word
//! useing interface : the user function
let Users = [];
//! useing interface : User1
let User1 = {
    id: 1,
    name: "Najmul Haque Talukder",
    age: 20
};
//! useing interface : User2
let User2 = {
    id: 2,
    name: "Rafsin Adnan Joy",
    age: 15
};
Users.push(User1);
Users.push(User2);
//! useing interface : Print Function
let PrintFun = (user) => {
    console.log(` UserId : ${user.id}. Username : ${user.name}. Age : ${user.age}`);
};
Users.forEach(user => PrintFun(user));
