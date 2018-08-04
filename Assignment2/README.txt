# AssignmentLevel-2

Edwisor course Assignment Level 2


## Problem

	1)Convert the following two functions written in simple Javascript to ES6 . Try and 
	  use as many features of ES6 as you can.

	2) This dataset contains information about a popular TV show in america called Big 
	Bang Theory . Include this dataset in a JS file as a varibale and then write the 
	following functions (using ES6 features as much as possible)-
	* Write a function that takes Season number and episode number as input 
	  and gives all the information about that particular episode as output.
	* Write a function that can take any number of episode ids as input and 
	  returns all the information about those episodes.
	* Write a function to search episode by its name.
	
## Synopsis
	Problem - 1: We have used ES6 features like -let , const, for-of loop , arrow functions etc.
	Problem - 2:  
	1. We have written a function to accept inputs of season number and episode number 
	   and then-
	   *check if episode matching these numbers exist in our JSON store.
	   *if above true - display episode details in a table format.
	   *else - display message that episode with such numbers not in our JSON data.
	   
	2. We have written a function to accept inputs of multiple episode ids 
	   and then-
	   *validate these inputs and weed out non-number inputs and store id number in an array.
	   *use this array as argument in a function call that accepts array as REST parameter.
	   *check if episode ids match episode id  existing  in our JSON store.
	   *if above true - display episode details of such ids in a table format.
	   *else display error message - such id do not exist in database.
	   *To distringuish multiple ids, users have been advised to use comma separater to get results.
	   
	3. We have written a function to accept input of episode name 
	   and then-
	   *check if such name matches any episode name in our JSON store.
	   *if above true - display episode details in a table format.
	   *else - display message that episode with such name not in our JSON data.
	   
	4. We have also provided a HELP window to the use so that correct input made to get results.
	
	5. We have used following ES6 features  in this programme-
		- arrow functions
		- let to declare block varibales
		- Block scope
		- const for fixed-values
		- for-of loop 
		- REST parameters	
		
	6. All possible error cases  and validation needs regarding input  have been handled . 
	
## Technical Specifications

    1. We have used HTML , CSS and Javascript with ES6 features.
	2. We have embedded a JS file .JSON data stored in this file.

## Installation

    Complete code of this api has been uploaded to my github page and address is : 
	https://github.com/rameshkmunjal/MeanStackAssignment_2

## Contributors

    1. Ramesh Kumar Munjal
