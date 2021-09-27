
	var discount = 1;
	var name = "Firefly";
	var random = Math.floor((Math.random() * 3));

	function alerts(){

	alert("Hey my script is running");

	}
	function myFunction() {
		name = prompt("Please enter your name", "Firefly");
		var companyName = "The Abandoned Laboring Firefly";
		var dt = new Date();
	if (name != null) {
		var feeling = prompt("Hello " + name + "! How are you doing today?", "Good");
		//document.getElementById("demo").innerHTML = "Hello " + name + "! How are you doing today?";
		if(feeling != null){
			alert("We're glad you are doing " + feeling + "!");
			alert("Today is " + dt.toLocaleDateString() 
					+ ", and the time is: " + dt.toLocaleTimeString()
					+ "\n" + companyName + " welcomes you, " + name + "!");
		}
	}
	}
	
	function getQuote(){
		var numberOfLightBulbs = prompt("Hey " + name + " how many lightbulbs do you want?");
		if(numberOfLightBulbs != null){
		
			var price = numberOfLightBulbs * 3 * discount;
			alert("The quote for the number of lightbulbs you want is $" + price + ".");
		}
	
	}
	
	function complaint(){
		var complaint = prompt("We're sorry to here you have a complaint about our services. Write a message and we'll do our best to make our services better for the future.");
		if(complaint != null){
			alert("Your complain was successfully recieved and is under review.");
		}
	}
	
	function getDiscount(){
		discount = Math.floor((Math.random() * 98) + 1)/100;
		discountPercent = discount*100;
		alert("Your discount is " + discountPercent + "%.");
	}
	
	function aboutUs(){
	
		alert("Abandoned Laboring Firefly, LLC is a light bulb company that focuses on producing the most energy efficient light bulbs on the market. Using our Firefly technology, we will be able to save the average homeowner about 50% on their electricity bill!");
	
	}
	
	function firefly(){
		var fireflyType = ["Photinini - Most common firefly in North America", "Cratomorphini - this firefly looks like a spark from a camp fire", "Phausis - this fireflies are tiny and are common throughout southeast US"];
		
		alert("Our random firefly type today is: " + fireflyType[random]);
	}

 