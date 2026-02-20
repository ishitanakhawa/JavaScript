//1
let nums = [];
//2
let numbers = [1, 2, 3, 4, 5];
//3
console.log(numbers.length)
//4
console.log(numbers[0],numbers[2],numbers[4]);

console.log(Math.floor(numbers.length / 2));
// last value
console.log(numbers[numbers.length - 1]);


//5 make array of mixed data types
let mixedArr = [1, "hello", true, null, undefined, {name: "John"}, [1,2,3]];
console.log(mixedArr.length);

//6 Create an array of IT companies
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
console.log(itCompanies);
console.log(itCompanies.length);

//Print out each company 
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i]);
} 

// change each company name to uppercase
for (let i = 0; i < itCompanies.length; i++) {
    console.log(itCompanies[i].toUpperCase());
}

let num = [1,2,3,4,5];
let result = num.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(typeof result); 

let number = 0;
for (let i = 0; i < num.length; i++) {
    number += num[i];
}
console.log(typeof number);

let arr = [10, 9, undefined];
let filteredArr = [];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === typeof 10) {
        filteredArr.push(arr[i]);
    }
}

console.log(filteredArr); 

console.log(arr.filter((i) => typeof i === 'number'));