function alerts()
{

	alert("Hey my script is running");

}

var person = ["Alfred Beagle", "Jason Todd", "Bruce Wayne", "Dick Grayson"];
var salaries = [0, 0, 0, 0];
var sizeOfArray = 4;
var currentSelected;
var results;
var combinedSalary;
var highestInArray;
var displayUsed;
var temporaryArray = [0, 0, 0, 0];


function addSalary() {
		
	var currentSelected = document.getElementById("employees").value          
                    
    if(currentSelected == "Alfred Beagle")
	{
		
		temporaryArray[0] = prompt("Please Enter The Salary for " + currentSelected + ": ", 0);
		
		if(temporaryArray[0] != null && temporaryArray[0] == parseInt(temporaryArray[0], 10))
		{
			
			salaries[0] = temporaryArray[0];
			
		}
		
	}else if(currentSelected == "Jason Todd")
	{
		
		temporaryArray[1] = prompt("Please Enter The Salary for " + currentSelected + ": ", 0);
		
		if(temporaryArray[1] != null && temporaryArray[1] == parseInt(temporaryArray[1], 10))
		{
			
			salaries[1] = temporaryArray[1];
			
		}
		
	}else if(currentSelected == "Bruce Wayne")
	{
		
		temporaryArray[2] = prompt("Please Enter The Salary for " + currentSelected + ": ", 0);
		
		if(temporaryArray[2] != null && temporaryArray[2] == parseInt(temporaryArray[2], 10))
		{
			
			salaries[2] = temporaryArray[2];
			
		}
		
	}else if(currentSelected == "Dick Grayson")
	{
		
		temporaryArray[3] = prompt("Please Enter The Salary for " + currentSelected + ": ", 0);
		
		if(temporaryArray[3] != null && temporaryArray[3] == parseInt(temporaryArray[3], 10))
		{
			
			salaries[3] = temporaryArray[3];
			
		}
		
	}
    
    
	}

function displayResults()
{
	combinedSalary = 0;
	highestInArray = salaries[0];

	//combinedSalary = (parseInt(salaries[0]) + parseInt(salaries[1]) + parseInt(salaries[2]) + parseInt(salaries[3]))/4;
	for(var i = 0; i < sizeOfArray; i++)
	{
		
		combinedSalary += parseInt(salaries[i]);
		results = combinedSalary/sizeOfArray;
			
	}
	
	for(var j = 1; j < sizeOfArray; j++)
	{
		
		if(salaries[j] > highestInArray)
		{
			
			highestInArray = salaries[j];
			
		}
		
	}
	
	document.getElementById("results").innerHTML = "Average Salary: " + results + " Highest Salary: " + highestInArray;

}

function displaySalary()
{
var table = document.getElementById("results_table");
var row;
var cell1;
var cell2;

if(displayUsed != 1)
{
	row = table.insertRow();
		cell1 = row.insertCell();
		cell2 = row.insertCell();
		cell1.innerHTML = "Employee";
		cell2.innerHTML = "Salary";
	for(var i = 0; i < sizeOfArray; i++)
	{
		row = table.insertRow();
		cell1 = row.insertCell();
		cell2 = row.insertCell();
		cell1.innerHTML = person[i];
		cell2.innerHTML = salaries[i];
		
		
	}
}else
{
	for(var i = 0; i < sizeOfArray; i++)
	{
	document.getElementById("results_table").deleteRow(-1);
	}
	
	for(var i = 0; i < sizeOfArray; i++)
	{
		row = table.insertRow();
		cell1 = row.insertCell();
		cell2 = row.insertCell();
		cell1.innerHTML = person[i];
		cell2.innerHTML = salaries[i];
		
		
	}
	
}
displayUsed = 1;
}
	