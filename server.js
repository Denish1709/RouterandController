const express = require("express");
const app = express();

let books = [
  {
    id: 1,
    title: "Book One",
    description: "Description of book one",
    authorId: 1,
  },
  {
    id: 2,
    title: "Book Two",
    description: "Description of book two",
    authorId: 2,
  },
];

let reviews = [
  { id: 1, text: "Amazing book!", bookId: 1 },
  { id: 2, text: "Decent read.", bookId: 2 },
];

let authors = [
  { id: 1, name: "Author One", bio: "Bio of Author One" },
  { id: 2, name: "Author Two", bio: "Bio of Author Two" },
];

app.get("/books", (req, res) => {
  res.json(books);
});
app.get("/books/:id", (req, res) => {
  const book = books.find((p) => parseInt(p.id) === parseInt(req.params.id));
  if (book) {
    const author = authors.find((author) => author.id === book.authorId);
    res.status(200).json({ ...book, name: author.name, bio: author.bio });
  } else {
    res.status(400).json("ID provided is not available");
  }
});
app.get("/reviews", (req, res) => {
  res.json(reviews);
});
app.get("/reviews/:id", (req, res) => {
  const review = reviews.find(
    (p) => parseInt(p.id) === parseInt(req.params.id)
  );
  if (review) {
    const book = books.find((b) => b.id === review.bookId);
    res.status(200).json({ ...review, book_title: book.title });
  } else {
    res.status(400).json("ID provided is not available");
  }
});
app.get("/authors", (req, res) => {
  res.json(authors);
});
app.get("/authors/:id", (req, res) => {
  const author = authors.find(
    (p) => parseInt(p.id) === parseInt(req.params.id)
  );
  if (author) {
    res.status(200).json(author);
  } else {
    res.status(400).json("ID provided is not available");
  }
});

app.get("/", (req, res) => {
  res.send(
    '<a href="/books">Books</a> <a href="/reviews">Reviews</a> <a href="/authors">Authors</a>'
  );
});

// Your routing and controller code goes here

app.listen(5000, () => {
  console.log("Bookstore app is running on port 3000");
});
