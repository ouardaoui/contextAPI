import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const BookDetails = ({ Book }) => {
  const { dispatch } = useContext(BookContext)
  return (
    <li onClick={() => dispatch({ type: "REMOVE_BOOK", id: Book.id })}>
      <div className="title">{Book.title}</div>
      <div className="author">{Book.author}</div>
    </li>
  )
}
export default BookDetails;