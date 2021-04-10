
const bookList = document.querySelector("#book-list ul")

bookList.addEventListener('click', e=>{
    bookRow = e.target.parentElement.parentElement
    if(e.target.className == "delete-button"){
      
        bookRow.parentNode.removeChild(bookRow)
    }});

addForm = document.querySelector("#add-book")

addForm.addEventListener('submit', e=>{
    e.preventDefault();
    inputValue = document.querySelector("#bookform").value;
    if (inputValue == ""){}
    else{
        const newLi = document.createElement("li")
        const newBook= document.createElement("span")
        const newSpan = document.createElement("span")
        const newDelete = document.createElement("button")
        newBook.textContent = inputValue
        newBook.className = "name"
        newSpan.className = "delete"
        newDelete.className = "delete-button"
        newDelete.textContent = "Remove"
       
        newSpan.style.float = "right"
        newSpan.appendChild(newDelete)
        newLi.appendChild(newBook)
        newLi.appendChild(newSpan)
        bookList.appendChild(newLi)
    }
})

