let books = document.querySelectorAll("#book-list li .name");



const deleteButtons = document.querySelectorAll(".delete-button"); 

const bookList = document.querySelector("#book-list ul")

bookList.addEventListener('click', e=>{
    if(e.target.className=='delete-button'){
        let listElement = e.target.parentElement.parentElement;
        listElement.parentNode.removeChild(listElement)
    }else{
        console.log(e);
    }
})