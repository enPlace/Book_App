#Notes

#query selectors: document.querySelector("#book-list li") selects the li for
book-list, but only the first one

document.querySelector("#book-list li:nth-child(2)") selects the second li
specifically. 

document.querySelectorAll("#book-list li") this grabs every element that is a book-list li

Returns it as a collection, kind of like an array. It is not, however, exactly like an array, but we can change it into an array if we want to cycle through them or use them in loops. 


#Array.from()

we can make an array out of something using the Array.from() method. This will convert our collection into an array, and we can do something like the following: 

let books = document.querySelectorAll("#book-list li")  
 //Gives us collection//

let bookArray = Array.from(books)
//Gives us array from the collection//

bookArray.forEach(function(book){
	console.log(book)
})
//A simple loop we can use to iterate through the array//


#checking the node type or node Name
const books = querySelector("#booklist")
books.nodeType
books.nodeName

#form events
if my form has an input, plus a button on the side, I have to make event functions for two actions 


Sorting algorithm: 
insert sorting, shifting items up if the first letter of current item occurs before the first letter of previous item
def sorting(list): 
for i in range length.list:
	if list[i] < list[i-1]:
		insert list[i] before list[i-1]
		sorting()