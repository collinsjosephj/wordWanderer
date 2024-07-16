import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ME } from "../utils/queries";
import { REMOVE_BOOK } from "../utils/mutations";
import Auth from "../utils/auth";
import { removeBookId } from "../utils/localStorage";

const SavedBooks = () => {
  const { loading, data } = useQuery(GET_ME);
  const [removeBook, { error }] = useMutation(REMOVE_BOOK);

  const userData = data?.me || {};

  const handleDeleteBook = async (bookId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeBook({
        variables: { bookId },
      });

      if (error) {
        throw new Error("something went wrong!");
      }

      removeBookId(bookId);
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <h2>LOADING...</h2>;
  }

  return (
    <>
      <div className="jumbotron text-center">
        <h1>Viewing saved books!</h1>
      </div>
      <div>
        {userData.savedBooks?.length ? (
          userData.savedBooks.map((book) => (
            <div key={book.bookId}>
              {book.image ? <img src={book.image} alt={book.title} /> : null}
              <div>
                <h3>{book.title}</h3>
                <p>{book.description}</p>
                <p>{book.authors}</p>
                <button onClick={() => handleDeleteBook(book.bookId)}>
                  Delete this Book!
                </button>
              </div>
            </div>
          ))
        ) : (
          <h3>No books saved yet!</h3>
        )}
      </div>
    </>
  );
};

export default SavedBooks;
