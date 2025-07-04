import React, { useState } from 'react';
import { addBook } from '../services/adminService';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const AddAdmin = () => {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    totalCopies: 1,
    availableCopies: 1
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await addBook(book);
    navigate('/admin');
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-4">
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-2" name="title" placeholder="Title" onChange={handleChange} required />
        <input className="form-control mb-2" name="author" placeholder="Author" onChange={handleChange} required />
        <input className="form-control mb-2" name="genre" placeholder="Genre" onChange={handleChange} required />
        <input className="form-control mb-2" type="number" name="totalCopies" placeholder="Total Copies" onChange={handleChange} required min="1" />
        <input className="form-control mb-2" type="number" name="availableCopies" placeholder="Available Copies" onChange={handleChange} required min="0" />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
    </>
  );
};

export default AddAdmin;
