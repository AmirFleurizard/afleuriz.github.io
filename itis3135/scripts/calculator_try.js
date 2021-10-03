var num1 = "";
var num2 = "";
var sum;
//var tempNum;
var operation;
//this was to display the number but it doesnt seem required and time hasnt permitted me to add it
var displayNumber;

//this boolean is to check if an operator is in use to let the system know to fill num2
var operationBoolean;
//this variable is to check if the number being entered is the first number so the system can know whether a operator or decimal can be used
var firstNumber = true;
var decimalUsed = false;

function alerts()
{

	alert("Hey my script is running");

}


function addition()
{
	if(firstNumber == false)
	{
	
		operation = "+";
		operationBoolean = true;
		decimalUsed = false;
	
	}
}

function subtraction()
{
	if(firstNumber == false)
	{
	
		operation = "-";
		operationBoolean = true;
		decimalUsed = false;
	
	}
}

function division()
{
	if(firstNumber == false)
	{
	
		operation = "/";
		operationBoolean = true;
		decimalUsed = false;
	
	}
}

function multiplication()
{
	if(firstNumber == false)
	{
	
		operation = "*";
		operationBoolean = true;
		decimalUsed = false;
	
	}
}

//this part was the only difficult part because I had to think of so many scenarios and account for what I could think of
function equals()
{
	if(num2 != "")
	{
		if(operation == "/")
		{
			
			sum = parseFloat(num1)/parseFloat(num2);
			operationBoolean = false;
			decimalUsed = false;
			num1 = String(sum);
			num2 = "";
			alert(sum);
			
		}else if(operation == "*")
		{
			
			sum = parseFloat(num1)*parseFloat(num2);
			operationBoolean = false;
			decimalUsed = false;
			num1 = String(sum);
			num2 = "";
			alert(sum);
			
		}else if(operation == "+")
		{
			
			sum = parseFloat(num1)+parseFloat(num2);
			operationBoolean = false;
			decimalUsed = false;
			num1 = String(sum);
			num2 = "";
			alert(sum);
			
		}else if(operation == "-")
		{
			
			sum = parseFloat(num1)-parseFloat(num2);
			operationBoolean = false;
			decimalUsed = false;
			num1 = String(sum);
			num2 = "";
			alert(sum);
			
		}
		
		
	}
	
	
}

function nine()
{
	
	if(operationBoolean != true)
	{
		
		num1 += "9";
		firstNumber = false;
		
	}else
	{
		
		num2 += "9";
		firstNumber = false;
		
	}

}

function eight()
{
	
	if(operationBoolean != true)
	{
		
		num1 += "8";
		firstNumber = false;
		
	}else
	{
		
		num2 += "8";
		firstNumber = false;
		
	}
	
}

function seven()
{
	
	if(operationBoolean != true)
	{
		
		num1 += "7";
		firstNumber = false;
		
	}else
	{
		
		num2 += "7";
		firstNumber = false;
		
	}
	
}

function six()
{
	
	if(operationBoolean != true)
	{
		
		num1 += "6";
		firstNumber = false;
		
	}else
	{
		
		num2 += "6";
		firstNumber = false;
		
	}
	
}

function five()
{
	
	if(operationBoolean != true)
	{
		
		num1 += "5";
		firstNumber = false;
		
	}else
	{
		
		num2 += "5";
		firstNumber = false;
		
	}
	
}

function four()
{

	if(operationBoolean != true)
	{
		
		num1 += "4";
		firstNumber = false;
		
	}else
	{
		
		num2 += "4";
		firstNumber = false;
		
	}

}

function three()
{
	
	if(operationBoolean != true)
	{
		
		num1 += "3";
		firstNumber = false;
		
	}else
	{
		
		num2 += "3";
		firstNumber = false;
		
	}
	
}

function two()
{
	
	if(operationBoolean != true)
	{
		
		num1 += "2";
		firstNumber = false;
		
	}else
	{
		
		num2 += "2";
		firstNumber = false;
		
	}
	
}

function one()
{
	
	if(operationBoolean != true)
	{
		
		num1 += "1";
		firstNumber = false;
		
	}else
	{
		
		num2 += "1";
		firstNumber = false;
		
	}
	
}

//this function puts a zero down
function zero()
{
	
	if(firstNumber == false)
	{
	
	if(operationBoolean != true)
	{
		
		num1 += "0";
		firstNumber = false;
		
	}else
	{
		
		num2 += "0";
		firstNumber = false;
		
	}
	
	}
	
}

//function to add decimal and it will also check to see if a decimal is in use
function decimal()
{
	
	if(decimalUsed != true)
	{
		
		if(operationBoolean != true)
		{
		
				num1 += ".";
				decimalUsed = true;
		
		}else
		{
		
				num2 += ".";
				decimalUsed = true;
		
		}
				
	}
	
}

function ac()
{
	
	operationBoolean = false;
	firstNumber = true;
	decimalUsed = false;
	num1 = "";
	num2 = "";
	sum = 0;
	
}
