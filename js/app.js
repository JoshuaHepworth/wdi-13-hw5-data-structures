console.log('data structure');

// Suppose you are tasked with creating some software, and it is up to you to determine which datatypes and what data structure to use. For each of the following, write which data types you would use to represent the data, and then give a small example of the data structure:

//-----------1. Data types

// A light switch that can be either on or off.

//a. Boolean
//if(lightSwitch === true) {
	// console.log('light switch is on!');
// } else {
	// console.log('light switch is off')
// }

// A user's email address.

//b. String
// const userEmail = ('user@email.com')

// A spaceship with a hull, laser blasters, tractor beam, and warp drive.

//c. Array
//const spaceship = ['hull','laser blasters','tractor beam','warp drive']

// A list of student names from our class.

//d. Array
// const studentNames = ['name1','name2','name3']


// A list of student names from our class, each with a location.

//e. Objects
// const studentInClass = {
// 	student1: {
// 		name: 'name',
// 		location: 'Chicago'
// 	},
// 	student2: {
// 		name: 'name',
// 		location: 'Chicago'
// 	},
// 	student3: {
// 		name: 'name',
// 		location: 'Chicago'
// 	}


// }




// A list of student names from our class, each with a location and each with a list of favorite tv shows.


//f. Object s in objects

// 	student1: {
// 		name: 'name',
// 		location: 'Chicago',
//		favoriteShow: 'show'
// 	},
// 	student2: {
// 		name: 'name',
// 		location: 'Chicago',
//		favoriteShow: 'show'
// 	},
// 	student3: {
// 		name: 'name',
// 		location: 'Chicago',
//		favoriteShow: 'show'
// 	}


// }


//-------------2. Take it easy

//// Make an array that holds all of the colors of the rainbow.
const rainbow = ['red','orange','yellow','green','blue',]
// Write code that will access "blue" from the rainbow array.
rainbow[4];
console.log(rainbow[4]);
// Make an object that is called your name and holds the 
// information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const joshHepworth = {
	favoriteFood: 'tacos',
	hobby: 'drawing',
	city: 'Geneva',
	favoriteDataType: 'strings'

};
// Write code that will access your hobby from the object that you just created.
joshHepworth.favoriteFood;
console.log(joshHepworth.favoriteFood);




















