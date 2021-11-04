import React, { useReducer, createContext, useEffect } from "react";
import { BookReducer } from "../reducers/BookReducer";


export const BookContext = createContext();

const BookContextProvider = ({ children }) => {
  const [books, dispatch] = useReducer(BookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : []
  });
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
  }, [books])


  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {children}
    </BookContext.Provider>
  )

}
export default BookContextProvider;