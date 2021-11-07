function alerts()
{

	alert("Hey my script is running");

}

function displayInfo()
{
	
	var firstName = document.getElementById("fName").value;
	var lastName = document.getElementById("lName").value;
	var email = document.getElementById("email").value;
	var pWord = document.getElementById("password").value;
	var age = document.getElementById("age").value;
	
	
	document.getElementById("resultName").innerHTML = "Full Name: " + firstName + " " + lastName;
	document.getElementById("resultEmail").innerHTML = "Email: " + email;
	document.getElementById("resultPassword").innerHTML = "Password: " + pWord;
	document.getElementById("resultAge").innerHTML = "Age: " + age;
	

}