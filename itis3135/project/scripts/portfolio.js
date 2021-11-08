function displayInfo()
{
	
	var firstName = document.getElementById("fName").value;
	var lastName = document.getElementById("lName").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	
	document.getElementById("resultName").innerHTML = "Full Name: " + firstName + " " + lastName;
	document.getElementById("resultEmail").innerHTML = "Email: " + email;
	document.getElementById("resultMessage").innerHTML = "Message: " + message;
	
}