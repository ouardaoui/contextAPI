import React, { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

const Navbar = () => {
  const { books } = useContext(BookContext);
  return (
    <div className="Navbar">
      <h1>list ragnar reading</h1>
      <p>Currently u have {books.length} books to get through</p>
    </div>
  )
}

export default Navbar;