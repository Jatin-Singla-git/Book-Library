package com.book.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.book.entity.Book;
import com.book.service.BookService;

@RestController
@RequestMapping("/api/books")
public class AdminController {
	
	@Autowired
	private BookService bookService;
	
	@PostMapping("/add")
	public Book addBook(@RequestBody Book book) {
		return bookService.addBook(book);
	}
	
	@GetMapping()
	 public List<Book> getBook(){
		 return bookService.getAllBook();
	 }
	
	@PutMapping("/update/{id}")
	public Book updateBook(@PathVariable int id,@RequestBody Book book) {
		return bookService.updateBook(id, book);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteBook(@PathVariable int id) {
		bookService.deleteBookById(id);
	}

}
