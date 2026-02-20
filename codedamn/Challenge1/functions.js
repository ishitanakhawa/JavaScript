// myMap function
// map --> aaplied array , return fresh array , accept --> callback , array
// array.map((ValueatIndex , index) ==> i *2)
let array = [1,2,3,4,5];
export function myMap(array, callback) {
	
	let new_array = [];
	for (let i = 0; i < array.length; i++) {
		new_array.push(callback(array[i] , i , array));
	}
	return new_array
}

console.log(myMap(array, (ValueatIndex , index) => `Value at ${index} : ${ValueatIndex * 2}`));


// myFilter function
let nums = [10 , null ,9 , undefined];
export function myFilter(nums, callback){
	let new_array =[];
	for(let i=0; i<nums.length; i++){
		if (callback(nums[i] , i , nums)){
	    new_array.push(nums[i]);
		}
	}
	return new_array;
}


console.log(myFilter(nums , (ValueatIndex) => {return typeof ValueatIndex == typeof 0}));


// myReduce --> combines all values into one final result
export function myReduce(array, callback, initialValue) {
  let accumulator = initialValue;

  for (let i = 0; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i);
  }

  return accumulator;
}