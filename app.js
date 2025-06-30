// variable scoping 

// var abc = "filza jameel"
// let abc = "hellow everyone"
// const abc = "filza jameel"

// console.log(abc);


//ARRAY DISTRUTURING
const color = ["red","blue" , "purple"]
const [first, second , third ] = color
console.log(color);

//OBJECT DISTRUCTURING
const user = {
    name : "filza",
    age : 23
}
const {name,age} = user;
console.log(`my name is ${name} & my age ${age}`);


//DESTRUCTURING WITH FUNCTION
const showuser = ({name , age })=>{
    console.log(`My name is ${name},& My age ${age}`);
    
}
showuser({name:"jameel", age:50})


//DEFAULT PARAMETERS
let fun2 = (name = "guest")=>{
    console.log(`${name} hellow`);
    
}
fun2()

//SPREAD OPERATORS just use of Object & Arrays
let hello = ["filza","jamee", "sami","abiha"]
let merge = [...hello,"safia","shagufta"]

console.log(merge);

let fruitName = {name : "ali", class:8}
let student = {...fruitName, rollnumber: 4567}
console.log(student);


//ARROW FUNCTION
let foo = ()=>{
    console.log("hello");
}
foo()

//FUNCTION EXPRESSION
let func = function(){
    console.log("Sami");
}
func()

//FUNCTION RETURN
let firstName = (a,b,c) =>{
    return a+b-c
}

console.log(firstName(3,2,1))

//FUNCTON RETURN IN ONE LINE 
let greet = (a,b) => a + b

console.log(greet(5,5))

//TERNARY OPERATORS
let a = (5 === 5 ? 'han okay' : 'nikal') 
console.log(a);
