const addNew = document.querySelector("#addNew");
const submit = document.querySelector("#submit");
const popup = document.querySelector(".popup");
const bookInfo = document.querySelector(".bookInfo");
const bName = document.querySelector("#name");
const bAuthor = document.querySelector("#writer");
const bPage = document.querySelector("#pages");
const bRead = document.querySelector("#check");

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}
const meadows = new Book("Meadows", "T.Sharma", 269, "Read");
const myLibrary = [meadows];
function addToLibrary(book) {
  myLibrary.push(book);
}
addNew.addEventListener("click", () => {
  popup.style.display = "flex";
});
submit.addEventListener("click", () => {
  const bReady = bRead.checked ? "Read" : "Not Read";
  let newBook = new Book(bName.value, bAuthor.value, bPage.value, bReady);
  addToLibrary(newBook);
  displayBook();
  popup.style.display = "none";
  bName.value = "";
  bAuthor.value = "";
  bRead.checked = false;
  bPage.value = "";
});

function displayBook() {
  bookInfo.innerHTML='';
  for (let i = myLibrary.length-1; i>=0; i--) {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add('book-div')

    const bookTitle = document.createElement("div");
    bookTitle.textContent = myLibrary[i].title;

    const bookAuthor = document.createElement("div");
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;

    const bookPage = document.createElement("div");
    bookPage.textContent = `Page: ${myLibrary[i].pages}`;

    const bookRead = document.createElement("button");
    bookRead.classList.add('read-button')
    bookRead.textContent=`${myLibrary[i].read}`
    bookRead.addEventListener("click", () => {
      myLibrary[i].read =  myLibrary[i].read == "Read" ? "Not Read" : "Read";
      displayBook();
    });

    const bookDel = document.createElement("button");
    bookDel.textContent = "Delete";
    bookDel.classList.add("delete-button");

    bookDel.addEventListener("click", () => {
       myLibrary.splice(i,1);
       displayBook();
    });

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPage);
    bookDiv.appendChild(bookRead);
    bookDiv.appendChild(bookDel);
    bookInfo.appendChild(bookDiv);
  }
}
displayBook();
