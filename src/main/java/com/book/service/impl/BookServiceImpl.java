package com.book.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.book.entity.Book;
import com.book.repository.BookRepository;
import com.book.service.BookService;

@Service
public class BookServiceImpl implements BookService{

	@Autowired
	private BookRepository bookRepository;

	@Override
	public Book addBook(Book book) {
		// TODO Auto-generated method stub
		book.setAvailableCopies(book.getTotalCopies());
		return bookRepository.save(book);
	}

	@Override
	public List<Book> getAllBook() {
		// TODO Auto-generated method stub
		return bookRepository.findAll();
	}

//	@Override
//	public Book getBookById(int id) {
//		// TODO Auto-generated method stub
//		return bookRepository.findById(id).orElse(null);
//	}

	@Override
	public Book updateBook(int id, Book newBook) {
		// TODO Auto-generated method stub
		Book oldBook=bookRepository.findById(id).orElse(null);
		if(oldBook!=null) {
			oldBook.setTitle(newBook.getTitle());
			oldBook.setAuthor(newBook.getAuthor());
			oldBook.setGenre(newBook.getGenre());
			oldBook.setTotalCopies(newBook.getTotalCopies());
			oldBook.setAvailableCopies(newBook.getAvailableCopies());
			return bookRepository.save(oldBook);
		}
		return null;
	}

	@Override
	public void deleteBookById(int id) {
		// TODO Auto-generated method stub	
		bookRepository.deleteById(id);
	}

	

	
}
