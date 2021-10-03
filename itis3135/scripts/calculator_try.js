var num1 = "";
var num2 = "";
var sum;
var tempNum;
var operation;
var displayNum;
var operationBoolean;
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
/*
const calculate = (n1, operator, n2) => {
  let result = ''
  
  if (operator === 'add') {
    result = n1 + n2
  } else if (operator === 'subtract') {
    result = n1 - n2
  } else if (operator === 'multiply') {
    result = n1 * n2
  } else if (operator === 'divide') {
    result = n1 / n2
  }
  
  return result
}
*/

//parseFloat()