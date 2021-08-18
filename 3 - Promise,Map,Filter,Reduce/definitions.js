/*
	Promises are one of the ways we can deal with asynchronous operations in JavaScript.
	A promise in JavaScript is similar to a promise in real life. 
	
	When we make a promise in real life, it is a guarantee that we are going to do 
	something in the future. Because promises can only be made for the future.

	A promise has 2 possible outcomes: it will either be kept when the time comes, or it won’t.

	My mom made a promise that if eggs are available in the market 
	she will make an egg sandwich as per my request. 
	if not available, then a veg sandwich (which i don't like).

	So i my mom make an egg sandwich, she kept her promise and my request is resolved.
	If eggs not available then she will make a veg sandwich, breaking her promise 
	and my request would be rejected.
*/ 
const promise = new Promise(function (resolve, reject) {
	const eggsAreAvailableInMarket = true;
	if (eggsAreAvailableInMarket) {
		return resolve("Made an Egg Sandwich");
	}
	else {
		return reject(Error("Made a Veg Sandwich"));
	}
});

promise.then((resp) => {
	console.log(resp);
}).catch((error) => {
	console.log(error);
})

/*
Map, Reduce & Filter are Higher Order Functions.
A “higher-order function” is a function that accepts 
functions as parameters and/or returns a function.
*/ 
const array = [1,2,3,4,5,6,7,8,9,10];

/* Map is used for modifying the values of an array and return a new array. 
In this case, We're multiplying the values of the array by 2 */ 
const modifiedArray = array.map( (element) => element * 2 );
console.log(modifiedArray);

/* Filter is used for filtering the values of an array based on a given condition. 
In this case, We're filtering the even numbers from the array. */ 
const filteredArray = array.filter( (element) => element % 2 === 0 );
console.log(filteredArray);

/* Reduce is used for reducing the values of an array based on 
the given condition and returns a new array. Ex: addition, subtraction, multiplication etc., 
In this case, we're doing the summation of the array. */ 
const reducedArray = array.reduce( (a,b) => a+b );
console.log(reducedArray);