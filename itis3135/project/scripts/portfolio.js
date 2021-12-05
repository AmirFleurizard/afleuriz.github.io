/*function displayInfo()
{
	
	var firstName = document.getElementById("fName").value;
	var lastName = document.getElementById("lName").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	
	document.getElementById("resultName").innerHTML = "Full Name: " + firstName + " " + lastName;
	document.getElementById("resultEmail").innerHTML = "Email: " + email;
	document.getElementById("resultMessage").innerHTML = "Message: " + message;
	
}*/

$(document).ready(function() {
	$("#submit").click(function() 
	{
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();
		var contact = $("#contact").val();
		$("#returnmessage").empty();

				$.post("contact_me.php", {
					name1: name,
					email1: email,
					message1: message,
					contact1: contact
					}, function(data) 
					{
						$("#returnmessage").append(data);
						if (data == "Your message has been received! I will contact you soon.") 
						{
							$("#form")[0].reset();
						}
					});
			
	});
});

function alerts(){

	alert("Hey my script is running");

}
	
<!-- jQuery call to the accordion() method. -->
$(document).ready(function() {
	$('#accordion').accordion({
		
		active: false,
		collapsible: true
		
	});
});
