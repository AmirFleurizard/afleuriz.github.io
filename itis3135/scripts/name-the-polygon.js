function alerts()
{

	alert("Hey my script is running");

}
function polygonName()
{
		
		var numberOfSides = Math.round(Math.abs(prompt("How many sides is the polygon you want to search? This program only has the name of polygons 1 through 25 so your number must be within this range.")));
		if(numberOfSides >= 1 && numberOfSides <= 25)
		{
			
			var polygon = ["Henagon", "Digon", "Trigon", "Tetragon", "Pentagon", "Hexagon", "Heptagon", "Octagon", "Enneagon", "Decagon", "Hendecagon", "Dodecagon", "Tridecagon", "Tetradecagon", "Pentadecagon", "Hexadecagon", "Heptadecagon", "Octadecagon", "Enneadecagon", "Icosagon", "Icosikaihenagon", "Icosikaidigon", "Icosikaitrigon", "Icosikaitetragon", "Icosikaipentagon"];
		
			alert("The polygon with " + numberOfSides + " sides is: " + polygon[numberOfSides-1]);
			
		}else if(numberOfSides > 25)
		{
			alert("Yeah aight :/");
			alert("Why do you even need to know the name of polygon with more then 25 sides? Heres the link if you need to know that bad: https://en.wikipedia.org/wiki/List_of_polygons#List_of_n-gons_by_Greek_numerical_prefixes");
			
			
		}else
		{
			
			
			if(Number.isInteger(numberOfSides))
			{
				if(numberOfSides == 0)
				{
					alert("Wouldn't that just be a dot? [ERROR] I mean the value you entered wasn't in the correct range. Please try again.");
				}else if(isNan(numberOfSides))
				{
					
				}

			
			}else
			{
				
				alert("The value you entered is not an integer. Please try again.");
				
			}
		}
		
}