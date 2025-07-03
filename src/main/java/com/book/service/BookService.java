package com.book.service;

import java.util.List;

import com.book.entity.Book;

public interface BookService {

	Book addBook(Book book);

	List<Book> getAllBook();
	
//	Book getBookById(int id);

	Book updateBook(int id, Book newBook);

	void deleteBookById(int id);
	
	

}
