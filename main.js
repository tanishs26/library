const add = document.querySelector("#addNew");
const pop = document.querySelector(".popup");
const submit = document.querySelector("#submit");
const bookInfo = document.querySelector(".bookInfo");
const names = document.querySelector("#name");
const writer = document.querySelector("#writer");
const pages = document.querySelector("#pages");
const check = document.querySelector("#check");
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const meadows = new Book("Meadows", "Seth Roll", 259, "read");
const myLibrary = [meadows];

const tanish = new Book("hell", "Seth", 23, "read");
addBookToLibrary(tanish);

function addBookToLibrary(book) {
  myLibrary.push(book);
}

add.addEventListener("click", () => {
  pop.style.display = "flex";
});

submit.addEventListener("click", () => {
  const readY = check.checked ? "read" : "not read";
  let newBook = new Book(names.value, writer.value, pages.value, readY);
  addBookToLibrary(newBook);
  displayBooks();

  pop.style.display = "none";
  names.value = "";
  writer.value = "";
  pages.value = "";
  readY = false;
});

function displayBooks() {
  bookInfo.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    const bookDiv = document.createElement("div");
    bookDiv.style.backgroundColor = "yellow";

    const bookTitle = document.createElement("p");
    bookTitle.textContent = myLibrary[i].title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = `Author: ${myLibrary[i].author}`;

    const bookPages = document.createElement("p");
    bookPages.textContent = `Pages:${myLibrary[i].pages}`;

    const bookRead = document.createElement("button");
    bookRead.textContent = `${myLibrary[i].read}`;
    bookRead.addEventListener('click',()=>{
        myLibrary[i].read=myLibrary[i].read==='read'?'not read':'read'
        displayBooks()
    })

    const bookDelete = document.createElement("button");
    bookDelete.textContent = "Delete";
    bookDelete.addEventListener("click", () => {
      myLibrary.splice(i, 1);
      displayBooks();
    });

    bookDiv.appendChild(bookTitle);
    bookDiv.appendChild(bookAuthor);
    bookDiv.appendChild(bookPages);
    bookDiv.appendChild(bookRead);
    bookDiv.appendChild(bookDelete);
    bookInfo.appendChild(bookDiv);
  }
}
displayBooks();
