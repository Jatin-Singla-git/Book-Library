
import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import AdminList from './components/AdminList';
import AddAdmin from './components/AddAdmin';
import EditAdmin from './components/EditAdmin';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import BookCatalog from './components/BookCatalog';

function App() {
  return (
    <BrowserRouter>
        <Routes>
         <Route path="/" element={<BookCatalog/>}/>
          <Route path="/admin" element={<AdminList />} />
          <Route path="/add" element={<AddAdmin />} />
          <Route path="/edit/:id" element={<EditAdmin />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
