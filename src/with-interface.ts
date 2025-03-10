//todo: interface declare
//! interface name decalare with must be Capital word

interface IUser{
    id : number,
    name : string,
    age : number
}


//! useing interface
let Users :IUser[] = [];


//! useing interface
let User1 : IUser = {
    id : 1,
    name : "Najmul Haque Talukder",
    age : 20
}


//! useing interface
let User2 : IUser = {
    id : 2,
    name : "Rafsin Adnan Joy",
    age : 15
}




Users.push(User1)
Users.push(User2)


//! useing interface
let PrintFun = (user : IUser)=>{
    console.log(` UserId : ${user.id}. Username : ${user.name}. Age : ${user.age}`);
}


Users.forEach(user =>PrintFun(user))
