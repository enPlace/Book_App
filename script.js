

/* ----script for delete button functionality----- */
const bookList = document.querySelector("#book-list ul")
bookList.addEventListener('click', e=>{
    bookRow = e.target.parentElement.parentElement
    if(e.target.className == "delete-button"){    
        bookRow.parentNode.removeChild(bookRow)
    }});



/* ------script for adding books to the list----------------- */

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
        addForm.reset()
        ulArray = document.querySelectorAll("li")
       
    }
});

/* -----Script for book search function--------- */

const bookSearch = document.querySelector("#searchInput")
bookSearch.addEventListener('input', e=>{
    searchValue = bookSearch.value.toLowerCase()
   
    document.querySelectorAll(".name").forEach(span=>{
        lowerCaseSpan = span.textContent.toLowerCase()
        if(!lowerCaseSpan.includes(searchValue)){
            span.parentNode.style.display= "none"
        }
        if(lowerCaseSpan.includes(searchValue)){
            span.parentNode.style.display = "block"
        }
    })

    })


    /* ----Sorting the list alphabetically------ */

let ulArray = document.querySelectorAll("li")
const ul = document.querySelector("ul")

const firstLi = document.querySelectorAll("li")[0]
const secondLi = document.querySelectorAll("li")[1] 
let clonedLi = firstLi.cloneNode(true)

const letters = {a:1, b:2, c:3, d:4, e:5, f:6, g:7, h:8, i:9, j:10,
    k:11, l:12, m:13, n:14, o:15, p:16, q:17, r:18, s:19, t:20,
    u:21, v:22, w:23, x:24, y:25, z:26}

function nameText(x){
    return ulArray[x].getElementsByTagName("span")[0].textContent.toLowerCase()
}
function firstLetter(x){
    if (nameText(x).slice(0,4) == "the "){
        return nameText(x)[4]
    }
    return nameText(x)[0] 
    
} 
function firstLetterValue(arrayPosition){
    let nameText =  arrayPosition.getElementsByTagName("span")[0].textContent.toLowerCase()
    if (nameText.slice(0,4)=="the "){
        return letters[nameText[4]]
    }
    return letters[nameText[0]]


}
function sortBooks(){
    for(i=1; i<ulArray.length;i++){
        let j = i
        console.log(i)
        if(firstLetterValue(ulArray[j])<firstLetterValue(ulArray[j-1])) console.log(i)
        while(firstLetterValue(ulArray[j])<firstLetterValue(ulArray[j-1])&&j>1){
        ul.insertBefore(ulArray[j], ulArray[j-1])
        ulArray = document.querySelectorAll("li")
        j--

            
        }
    }
     if(firstLetterValue(ulArray[0])> firstLetterValue(ulArray[1])){
         console.log("working")
     }for(let book of ulArray){
         if (firstLetterValue(book)>firstLetterValue(ulArray[0])){
             console.log(firstLetterValue(book))
             ul.insertBefore(ulArray[0], book)
             break
         }
     }




   } 

  



