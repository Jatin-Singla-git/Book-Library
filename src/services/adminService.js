import axios from 'axios';

const API_URL = 'http://localhost:8082/api/books';

export const getAllBooks = () => axios.get(API_URL);
export const addBook = (book) => axios.post(`${API_URL}/add`, book);
export const updateBook = (id, book) => axios.put(`${API_URL}/update/${id}`, book);
export const deleteBook = (id) => axios.delete(`${API_URL}/delete/${id}`);
export const getBookById = (id) => axios.get(`${API_URL}/${id}`);
export const borrowBook=(bookId) => axios.post(`${API_URL}/${bookId}/borrow`);
export const returnBook=(bookId)=>axios.post(`${API_URL}/${bookId}/return`);


