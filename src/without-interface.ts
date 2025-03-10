let users :  {
    id : number,
    name : string,
    age : number
}[] = [];




let user1 : {
    id : number,
    name : string,
    age : number
} = {
    id : 1,
    name : "Najmul Haque Talukder",
    age : 20
}


//todo : for user2
let user2 : {
    id : number,
    name : string,
    age : number
} = {
    id : 2,
    name : "Rafsin Adnan Joy",
    age : 15
}




users.push(user1)
users.push(user2)


let printFun = (user : {id : number, name : string, age : number})=>{
    console.log(` UserId : ${user.id}. Username : ${user.name}. Age : ${user.age}`);
}


users.forEach(user =>printFun(user))
