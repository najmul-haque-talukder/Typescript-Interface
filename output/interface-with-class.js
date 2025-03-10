"use strict";
//! for access interface ----->> useing implements keyword
class data {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        //! interfaces classes all elements in class, must be used! else----->> error the code!!
        this.display = () => {
            return `Name : ${this.name}. Age : ${this.age}.`;
        };
    }
}
let data1 = new data("Najmul Haque Talukder", 20);
console.log(data1.display());
