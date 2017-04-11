// JavaScript Document

var employee = "";
var person = {fname:"Jeff", lname:"Blankenship", age:42, salary: 54000, city: "Charleston", state:"WV", pincode: 25301}; 
var x;
for (x in person) {
    employee += person[x] + " ";
}

console.log(employee)