Assignment Name - Jquery Advance

##Problem Statement
	Check out the following open API url-http://www.omdbapi.com/

	As a solution to this problem, you are supposed to create an application that enables
	user to search movie titles using various parameters - By Imdb Id or title or year.
	It should have only one view containing a search screen which enables users to provide 
	these inputs.  You have to write Jquery code to change the requests according to options 
	selected by user and show the response received (search results) by the API in form of 
	cards containing all the information available in the response . if you receive a poster image, 
	you have to display that as well and if its not available, it should display a dummy picture.
	You may refer the API documentation given on the page for your reference and take help from them 
	as well. As instructed on this page, you have to generate a free API key to use this API . 
 
	Note - Response may contain different types of values in the JSON array. Please make sure
	you are handling all of them correctly. 

## Synopsis
	
	1) We have created a home page hosting movies/series selected randomly - to give a feel of real website.
	2) Home page movies have been shown in cards - link given at bottom to navigate to view full details.
	3) At top of page , there is a search bar with selection dropdown , input box and search button.
	4) User can select any one out of three options - id, title, title and year - in selection dropdown.
	5) After input in box and pressing search button , a link is create out of these input.
	6) An ajax call using jquery is made on the given link to access data of api.
	7) Inside ajax full - a test is conducted whether selection option is - id , title , or title and year.
	8) Based on option, related callback funtion call is made to show output data.
	9) To show data as per id - since response data is single record - a horizontal card has been used 
		which converts in vertical on small screens.
	10) To show data as per title or title and year - since response data is an array - page of multiple cards is created . 
	11) All possible error cases have been handled to tackle wrong input or no/wrong response.	
	
## Technical Specifications

	Technologies used in this project are - HTML, CSS, Jquery, Javascript.   

## Installation

    	Complete code of this api has been uploaded to my github page and address is :
 
		https://github.com/rameshkmunjal/MeanStackAssignment_6

## Contributors

    1. Ramesh Kumar Munjal
