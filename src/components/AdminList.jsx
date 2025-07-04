import React, { useEffect, useState } from 'react';
import { getAllBooks, deleteBook } from '../services/adminService';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AdminList = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  const fetchBooks = async () => {
    const res = await getAllBooks();
    setBooks(res.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleDelete = async (id) => {
    await deleteBook(id);
    fetchBooks();
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      <h3>Admin - Book Management</h3>
      <button className="btn btn-success mb-3" onClick={() => navigate('/add')}>Add Book</button>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Title</th><th>Author</th><th>Genre</th>
            <th>Total Copies</th><th>Available Copies</th><th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id}>
              <td>{book.title}</td><td>{book.author}</td><td>{book.genre}</td>
              <td>{book.totalCopies}</td><td>{book.availableCopies}</td>
              <td>
                <button className="btn btn-primary me-2" onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
                <button className="btn btn-danger" onClick={() => handleDelete(book.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
};

export default AdminList;
