package com.book.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@NoArgsConstructor
@Getter
@Setter
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	 private int id;
	 private String title;
	 private String author;
	 private String genre;
	 private int totalCopies;
	 private int availableCopies;
}
