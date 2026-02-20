//Day_One
console.log("Hello, world!");

// var , let , const
let fname = "Will";
//fname = 1;
//let lname = `Smith`;
//let mname = `Anthony`;

let hey = `hey hello!${fname}`;
console.log(hey);

let age;
let job = null;
console.log(age , job);

let isLoggedIn = false;
let isStudent = true;


let student = {
    name: "Will",
    age: 20,
    grade:"A",
    subject:{
        name: "Mathematics",
        code: "MATH101"
    },
};
console.log(student);



//Day_Two

let placement = null;
console.log(placement);
 fname = "prasad";
 fname[0] = "S";
 console.log(fname);

 let inuppercase = fname.toUpperCase();
    console.log(inuppercase);

//Day_Three

//what is operator
//what is operand
//binary plus -- concat
//unary plus -- convert to number
//increment
//decrement

//operators:
let a= 68;
let b=1;
console.log(a+b)

console.log(typeof "10" == 10);
console.log(typeof "10" === 10);
fname="10";
+fname;
Number(fname);
console.log(fname);


//++var_name//--var_name(phele increment karega)
//var_name++//var_name --

let counter = 1;
counter++;
console.log(counter);

counter = 1;
//++counter;
console.log(++counter);

//conditional:

if (true) console.log("inside if");
if(1) {
 console.log("true");
} else {
  console.log("false");
}

(true)? console.log(1) : console.log(0); 
0? console.log(1) : console.log(0);  // in one line above code from l77-l82 (condition ? if : else)


age = 18;
if (age > 18){
    console.log("You are welcomed");
} else if (age ===18){
    console.log("come next year");
} else{
    console.log("Under age");
}

//functions:
function sayhello(fname) {
    console.log(`Hello ${fname}`);
}

//arrow function
console.log(typeof sayhello);
const sayhelloTwo = (fname, lname ) => {
    console.log(`Hello ${fname}${lname }`);
};

sayhello("Will");
console.log(null == 0);


function sumOfNumber(para1, para2) {
   return para1 + para2;
}

//const result = sumOfNumber(5, 10);
//console.log(result);
//or
//const sumofNumbersTwo = (a, b) => a + b;
//console.log(sumofNumbers(5, 10));

//function call
sayhello("Will");
sayhello(fname);
sayhelloTwo("Will", "Smith");
//function ref
console.log(sayhello);
console.log(typeof sayhello);


//Day_Four
function sumOfNumber(para1, para2) {
    return para1 + para2;
}
console.log(sumOfNumber(1));

const sumofNumbersfour = (a, b) => a + b + 2 + " 2";
console.log(sumofNumbersfour(5, 10));

//switch case
//switch (condition):
//    case condition:
//        n
//    default:


//let age = 15;
//switch (true) { //15
//    case age < 15: // true>15
//        console.log("age is less than 15");
//        
//    case age ==15: // 15 == 15
//      console.log("age is 15");
//       break;
//
//        default:
//        console.log("Enter valid number");
//}


//let fname ="Duchess";// fname[0]
//for(i =0;i<fname.length;i++){
   // console.log(fname[i]);
//}

// output:
// D
// u
// c
// h
// e
// s
// s    

//let fname ="Duchess";// fname[0]
//let result="";
//for(i =0;i<fname.length;i++){
   // console.log(fname[i]);
    //result = result + fname[i] ;
    //console.log(result);
    //result += fname[i];
    //console.log(result); --> output string 
    
    
//}

//let fname ="Duchess";// fname[0]
//let result=" ";
//for(i =0;i< fname.length;i++){
    //console.log(i + " ")
    //result = result + " " + i ;
    
//}
//console.log(result);
//console.log(typeof result);

// Day_Five
//while loop(condition){
//operation
//steo
//}

//let i=1;
//while(i < 6){ 
   // console.log(i);
    //i++;
//}
//do{ //do while loop
   //console.log(i);
    //i++; 

//} while(i<6);

//date function --> get current function

const now = new Date();
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMonth() + 1);


//Day_Six
//Map , Filter , Reduce
let nums = [1, 2, 3, 4, 5];
let result = nums.reduce ((accu, current) => accu + current);
console.log(result); // Output: 15;

let sum =0;
for (let i =0; i < nums.length; i++) {
    sum += nums[i];
}
console.log(sum); // Output: 15


//Day_Six
//Map , Filter , Reduce
// Reduce --> reduce an array to a single value
//Filter -->  filter out elements based on condition
//Map --> create a new array by performing operation on each element of an array
//let arr = [10, null, 9, undefined];
//let filteredArr = [];

//for (let i = 0; i < arr.length; i++) {
    //if( typeof arr[i]=== typeof 0){
      // console.log(arr[i]);
   // }
//}

//console.log(arr.filter((i)=> typeof i == typeof 0));

//console.log(arr.map((i)=> i + 2)); // [12, NaN, 11, NaN] --> new array will be the output after adding 2 to each element
