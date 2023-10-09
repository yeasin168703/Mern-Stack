// addition
var a = 15;
var b = 5;
var c = a+b;
console.log(c)

// substraction
var a = 28;
var b = 14;
var d = a-b;
console.log(d)

// multiplication
var a = 12;
var b = 8;
var e = a*b;
console.log(e)

// division
var a = 98;
var b = 7;
var f = a/b;
console.log(f)



// function start
// addition
function addTwoNumber(a,b){
    var a;
    var b;
    var c = a + b;
    return c;
}
console.log(addTwoNumber(12,13))

// substraction
function subTwoNumber(a,b){
    var a;
    var b;
    var c = a - b;
    return c;
}
console.log(subTwoNumber(23,12))

// multiplication
function mulTwoNumber(a,b){
    var a;
    var b;
    var c = a * b;
    return c;
}
console.log(mulTwoNumber(8,12))

// division
function divTwoNumber(a,b){
    var a;
    var b;
    var c = a / b;
    return c;
}
console.log(divTwoNumber(108,12))
// function end


// convert upper case start
var name = "Yeasin Al Rumon"
console.log(name.toUpperCase())
console.log(name.toLowerCase())
// case end



// condition start 
var marks = 89;

if(marks>=80){
    console.log("A+")
}else if(marks>=75){
    console.log("A")
}else if(marks>=70){
    console.log("A-")
}else if(marks>=65){
    console.log("B+")
}else if(marks>=60){
    console.log("B")
}else if(marks>50){
    console.log("B-")
}else if(marks>40){
    console.log("C")
}else{
    console.log("Fail")
}
// condition end

