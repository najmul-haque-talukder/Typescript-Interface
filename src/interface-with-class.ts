interface IFun{
    display : ()=> string
}


//! for access interface ----->> useing implements keyword
class data implements IFun{
    constructor(private name : string, private age : number){}

    
    //! interfaces classes all elements in class, must be used! else----->> error the code!!
    display =  () => {
        return `Name : ${this.name}. Age : ${this.age}.`
    }
}

let data1 = new data("Najmul Haque Talukder", 20)
console.log(data1.display());