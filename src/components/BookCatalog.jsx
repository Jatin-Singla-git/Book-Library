import React, { useEffect, useState } from 'react';
import {
  getAllBooks,
  borrowBook,
  returnBook,
} from '../services/adminService';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookCatalog = () => {
  const [books, setBooks] = useState([]);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('info'); // success, danger, etc.

  // Fetch all books
  const fetchBooks = () => {
    getAllBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => {
        console.error('Error fetching books:', err);
        setMessage('Failed to load books.');
        setMessageType('danger');
      });
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // Borrow book handler
  const handleBorrow = (bookId) => {
    borrowBook(bookId)
      .then((res) => {
        setMessage(res.data); // success message from backend
        setMessageType('success');
        fetchBooks();
      })
      .catch((err) => {
        const msg = err.response?.data || 'Borrow failed.';
        setMessage(msg);
        setMessageType('danger');
      });
  };

  // Return book handler
  const handleReturn = (bookId) => {
    returnBook(bookId)
      .then((res) => {
        setMessage(res.data); // success message from backend
        setMessageType('success');
        fetchBooks();
      })
      .catch((err) => {
        const msg = err.response?.data || 'Return failed.';
        setMessage(msg);
        setMessageType('danger');
      });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Book Catalog</h2>

      {message && (
        <div className={`alert alert-${messageType}`} role="alert">
          {message}
        </div>
      )}

      <table className="table table-hover table-bordered">
        <thead className="table-dark">
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Total Copies</th>
            <th>Available Copies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">No books found.</td>
            </tr>
          ) : (
            books.map((book) => {
              const canBorrow = book.availableCopies > 0;
              const canReturn = book.availableCopies < book.totalCopies;

              return (
                <tr key={book.id}>
                  <td>{book.id}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.totalCopies}</td>
                  <td>{book.availableCopies}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => handleBorrow(book.id)}
                      disabled={!canBorrow}
                    >
                      Borrow
                    </button>
                    <button
                      className="btn btn-sm btn-warning"
                      onClick={() => handleReturn(book.id)}
                      disabled={!canReturn}
                    >
                      Return
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookCatalog;
