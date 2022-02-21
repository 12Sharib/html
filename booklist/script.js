//book class : represent a book
class Book{
    constructor(name, bookname, author){
        this.name =name;
        this.bookname = bookname;
        this.author = author;
    }
}

//ui class:handle ui tasks
class UI{
    
    static addBookToList(book){
        const list = document.querySelector('#booklist')
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>${book.name}</td>
        <td>${book.bookname}</td>
        <td>${book.author}</td>
        <td> <a href="#" class="delete">x </a></td>
        `;
        list.appendChild(row)
    }
    
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }
    static showAlert(message, className){
        const div = document.createElement('div');
        div.className= `alert ${className}`;
    }
}

//store class: handles storage\

//event:display book
document.addEventListener('DOMContentLoaded',UI.displayBooks);
//event:add a book
document.querySelector('#bookform').addEventListener('submit',(e)=>{
    //prevent actual submit
    e.preventDefault();

    //get form values
    const name = document.querySelector('#name').value;
    const bookname =document.querySelector('#bookname').value;
    const author = document.querySelector('#author').value;

    //validate
    if(name === '' || bookname === '' || author === ''){
        alert("please fill all fields")
    }else{
    // instantsiate book
    const book = new Book(name, bookname, author);
    
    //add book to ui
    UI.addBookToList(book);
    }

   
})
//event: remove a book
document.querySelector('#booklist').addEventListener('click', (e)=> {
    UI.deleteBook(e.target);
})