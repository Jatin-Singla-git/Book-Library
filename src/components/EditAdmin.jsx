import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBookById, updateBook } from '../services/adminService';
import Navbar from './Navbar';

const EditAdmin = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    totalCopies: 1,
    availableCopies: 1
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookById(id);
        setBook(response.data);
      } catch (error) {
        console.error('Failed to fetch book:', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateBook(id, book);
      navigate('/admin');
    } catch (error) {
      console.error('Failed to update book:', error);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-5" style={{ maxWidth: '600px' }}>
      <h2 className="mb-4">Edit Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={book.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={book.author}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Genre</label>
          <input
            type="text"
            name="genre"
            className="form-control"
            value={book.genre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Total Copies</label>
          <input
            type="number"
            name="totalCopies"
            className="form-control"
            value={book.totalCopies}
            onChange={handleChange}
            required
            min="1"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Available Copies</label>
          <input
            type="number"
            name="availableCopies"
            className="form-control"
            value={book.availableCopies}
            onChange={handleChange}
            required
            min="0"
          />
        </div>

        <button type="submit" className="btn btn-success w-100">
          Update Book
        </button>
      </form>
    </div>
    </>
  );
};

export default EditAdmin;
