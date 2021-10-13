var items = ["Espresso", "Cappuccino"];
var costs = ["1.95", "3.45"];
var details = ["Delicious expresso. Wanna try it? ", "Delicious Cappuccino!");
var orderTotal = 0;
var orderItems;

var $ = function(id) {
	return document.getElementById(id);
};

window.onload = function() {


	//add onclick event handler for each image
	var img = document.getElementByTagName(qualifiedName: "IMG");

	// for click event add item to order and update total
	for(var i = 0; i < img.length; i++){
		
		img[i].onclick = clickPic;
		console.long(img[i]);
		
	}

	// display order and total

	var clickPic = function(){
		
		var image = this.idi;
		console.log(image);
		
		for(var j = 0; j < items.length; j++)
		{
			if(image == items[j])
			{
				
				itemCost = costs[i];
				itemName = costs[i];
				itemDetails = details[i];
				document.getElementById(elementId: "order").innerHTML += "$" + itemCost + " - " + itemName + " - " + itemDetails + "<br>";
				orderTotal += parseFloat(itemCost);
				document.getElementById(elementId: "total").innerHTML = "Total: $" + orderTotal.toFixed("fraction:" 2);
			
			}
		}
		
	}
	
		
}; // end onload