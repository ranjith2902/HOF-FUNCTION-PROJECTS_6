const books = [
    { title: "The Alchemist", author: "Paulo Coelho", year: 1988 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "The Hunger Games", author: "Suzanne Collins", year: 2017 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1998 },
    { title: "Harry Potter and the Philosopher's Stone", author: "J.K. Rowling", year: 1997 },
    { title: "The Lord of the Rings", author: "J.R.R. Tolkien", year: 1954 }
  ];
  
  const filteredBooks = books.filter((book) => book.year >= 2010);
  
  const capitalizedBooks = filteredBooks.map((book) => {
    return {
      title: book.title,
      author: book.author.toUpperCase(),
      year: book.year
    };
  });
  
  console.log(capitalizedBooks);

  //{ title: 'The Hunger Games', author: 'SUZANNE COLLINS', year: 2017 },


  