





//////////////////////
//Generating 2 columns  (beginner level)


window.onload = gen_newCard1;
function gen_newCard1() 
{
	for (var i=0; i<5; i++) 
	{                                // generate 1st column.
		var gen_newNum = Math.floor(Math.random() * 15)+1;   // this is the formula to generate all the numbers in column with number between 1 to 15.  
															 // HOW???  "math.random()" will only generate number between 0 and 1.  Hence multiply 15 will always get between 0 and 15 but not 15.  
															 // Hence, math.floor will only take the integer part of the answer:  0 to 14  (eg.  14.9999 becomes 14).  Hence adding 1 will give us 1 to 15.

		document.getElementById("square" + i).innerHTML = gen_newNum;
	}
		for (var i=5; i<=9; i++) 
	{                                // generate 1st column.
		var gen_newNum = Math.floor(Math.random() * 15)+16;   // this is the formula to generate all the numbers in column with number between 1 to 15.  
															 // HOW???  "math.random()" will only generate number between 0 and 1.  Hence multiply 15 will always get between 0 and 15 but not 15.  
															 // Hence, math.floor will only take the integer part of the answer:  0 to 14  (eg.  14.9999 becomes 14).  Hence adding 1 will give us 1 to 15.

		document.getElementById("square" + i).innerHTML = gen_newNum;
	}
			for (var i=10; i<=14; i++) 
	{                                // generate 1st column.
		var gen_newNum = Math.floor(Math.random() * 15)+31;   // this is the formula to generate all the numbers in column with number between 1 to 15.  
															 // HOW???  "math.random()" will only generate number between 0 and 1.  Hence multiply 15 will always get between 0 and 15 but not 15.  
															 // Hence, math.floor will only take the integer part of the answer:  0 to 14  (eg.  14.9999 becomes 14).  Hence adding 1 will give us 1 to 15.

		document.getElementById("square" + i).innerHTML = gen_newNum;
	}
	for (var i=14; i<19; i++) 
	{                              // generating 4th column.
		var gen_newNum = Math.floor(Math.random() * 15)+46;   // this is the formula to generate all the numbers in column with number between 46 to 60.  
														  	  // HOW???  "math.random()" will only generate number between 0 and 1.  Hence multiply 15 will always get between 0 and 15 but not 15.  
															  // Hence, math.floor will only take the integer part of the answer:  0 to 14  (eg.  14.9999 becomes 14).  Hence adding 46 will give us 46 to 60.

		document.getElementById("square" + i).innerHTML = gen_newNum;
	}
		for (var i=19; i<24; i++) 
	{                              // generating 4th column.
		var gen_newNum = Math.floor(Math.random() * 15)+61;   // this is the formula to generate all the numbers in column with number between 46 to 60.  
														  	  // HOW???  "math.random()" will only generate number between 0 and 1.  Hence multiply 15 will always get between 0 and 15 but not 15.  
															  // Hence, math.floor will only take the integer part of the answer:  0 to 14  (eg.  14.9999 becomes 14).  Hence adding 46 will give us 46 to 60.

		document.getElementById("square" + i).innerHTML = gen_newNum;
	}
}
/*
//////////////////////
//Generating 2 columns  (Int. level)

window.onload = gen_newCard;

	
function gen_newCard() 
{   
    var gen_newNum;
	for (var i=0; i<19; i++) 
	{                                // generate 1st column and 3rd column

		if (i < 5) 
		{
			gen_newNum = Math.floor(Math.random() * 15)+1;   // this is the formula to generate all the numbers in column with number between 1 to 15.  
		}
        else if ((i >= 14) && (i < 19))	                     //  checking if "i" is betwn 14(incl) and 19(not incl).  "&&" means "and" logic...
		{
			gen_newNum = Math.floor(Math.random() * 15)+46;   // this is the formula to generate all the numbers in column with number between 46 to 60.  
		}
		else
		{
		    gen_newNum = "";
		}
		document.getElementById("square" + i).innerHTML = gen_newNum;
	}
	

}
*/

//////////////////////
//Generating 2 columns  (Adv. level)
// combine above with just 1 loop and 1 