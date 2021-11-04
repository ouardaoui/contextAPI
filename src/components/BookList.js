import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext);
  return books.length ? (
    <div className="book-list">
      <ui>
        {books.map(book => {
          return (<BookDetails Book={book} key={book.id} />)
        })}
      </ui>
    </div>
  ) : (
    <div className="empty">no books to read , Hello free time :) </div>
  )
}

export default BookList;