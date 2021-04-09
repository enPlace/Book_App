let books = document.querySelectorAll("#book-list li .name");

const bookList = document.querySelector("#book-list");

let deleteButtons = document.querySelectorAll(".delete-button");

deleteButtons.forEach(button => {
    button.addEventListener('click', e=>{
        const li = e.target.parentElement.parentElement;
        li.parentNode.removeChild(li)
    });
});

