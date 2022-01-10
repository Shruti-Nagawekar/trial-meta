// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var database = [
	{	
		username: "John",
		password: "123456789"
	},
	{	username: "Karen",
		password: "123"
	},
	{	username: "Sally",
		password: "777"
	}
];

function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === username &&
			database[i].password === password){
			return true;
		}
	} 
	return false;
}

function signIn(username, password) {
	if(isUserValid(username, password)){
		console.log("Hey Welcome!");
	} else{
		alert("Sorry, wrong username and password");
	}
}
var userNamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(userNamePrompt, passwordPrompt);
//isUserValid(userNamePrompt, passwordPrompt);
// function signIn(userNamePrompt, passwordPrompt); {
// 	if(
// 		user === database[0].username &&
// 		pass === database[0].password
// 	)
// 	{
// 		console.log("Hey Welcome!")
// 	}
// 	else{
// 		alert("Sorry, wrong username and password!")
// 	}
// }
