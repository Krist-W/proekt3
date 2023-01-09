let books =[
      {
        id: 1,
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        authors: "Erich Gamma, John Vlissides, Ralph Johnson, Richard Helm",
        year: "1994",
        image: "https://images-na.ssl-images-amazon.com/images/I/81gtKoapHFL.jpg"
      },
      {
        id: 2,
        title: "JavaScript: The Good Parts",
        authors: "Douglas Crockford",
        year: "2008",
        image: "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg"
      },
      {
        id: 3, 
        title:
        "JavaScript Patterns: Build Better Applications with Coding and Design Patterns",
        authors: "Stoyan Stefanov",
        year: "2008",
        image:
        "https://images-na.ssl-images-amazon.com/images/I/51%2BSiphz7AL._SX377_BO1,204,203,200_.jpg"
      },
      {
        id: 4,
        title:
        "JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)",
        authors: "David Flanagan",
        year: "2011",
        image:
        "https://images-na.ssl-images-amazon.com/images/I/51WD-F3GobL._SX379_BO1,204,203,200_.jpg"
      }
      ]

   const container = document.getElementById("container2")

   function updateBooks() {
   container.innerHTML = ""
   books.forEach((book) => {
      container.innerHTML += `
      <div class="book">
         <img class="image" src="${book.image}"/>
         <p class="title">${book.title}</p>
         <p class="year">${book.year}</p>
         <p class="authors">${book.authors}</p>
         <button class="button" onclick='changeBook(${book.id})'>Изменить</button>
         <button class="button" onclick='deleteBook(${book.id})'>Удалить</button>
      </div>
      `
   })
}


function deleteBook(id) {
   const book = books.find((s) => {
      return s.id === id
   })
   const bookIndex = books.indexOf(book)
   books.splice(bookIndex, 1)
   updateBooks()
}

function clearForm() {
   document.getElementById("title").value = ""
   document.getElementById("authors").value = ""
   document.getElementById("year").value = ""
   document.getElementById("image").value = ""
}

function addBook() {
   const titleValue = document.getElementById('title').value
   const authorsValue = document.getElementById('authors').value
   const yearValue = document.getElementById('year').value
   const imageValue = document.getElementById('image').value
   const addBook = {
      title: titleValue,
      authors: authorsValue,
      year: yearValue,
      image: imageValue
   }
   
   books.push(addBook)
   updateBooks()
   clearForm()
   document.getElementById("hide").onclick
   document.getElementById("container-form").hidden = true;
}


   // const bookList = document.getElementsByClassName("book")
 
   updateBooks()



                                        