
const bookList = document.querySelector("#book-list ul")

bookList.addEventListener('click', e=>{
    bookRow = e.target.parentElement.parentElement
    if(e.target.className = "delete-button"){
      
        bookRow.parentNode.removeChild(bookRow)
    }});



const addForm = document.querySelector("#add-book")

addForm.addEventListener('submit', e=>{
    e.preventDefault(); 
   const value = document.querySelector("#bookform").value; 
   console.log(value);
   if(value == ""){
   }else{
   const newLi = document.createElement("li");
   const newBook = document.createElement("span")
   const newButton = document.createElement("span")

   newBook.textContent=value;

   newLi.appendChild(newBook)
   newLi.appendChild(newButton)
   bookList.appendChild(newLi)
   }
})
