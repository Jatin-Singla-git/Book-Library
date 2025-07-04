import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <Link className="navbar-brand" to="/">Book Admin</Link>
        <div>
          <Link className="btn btn-outline-light me-2" to="/">List</Link>
          <Link className="btn btn-outline-success" to="/add">Add Book</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
