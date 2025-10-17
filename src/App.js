import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import './components.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import AddBookForm from './components/AddBookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    // Fetch books from an API or local storage
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  //write the logic to create a filteredBooks constant. 
  const filteredBooks = searchTerm.trim() === ''
    ? books
    : books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const handleAddBook = (newBookData) => {
    fetch('http://localhost:3001/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBookData)
    })
      .then(response => response.json())
      .then(addedBook => {
        setBooks(prevBooks => [...prevBooks, addedBook]);
      })
      .catch(error => console.error('Error adding book:', error));
  };

  const onStatusUpdate = (bookId, newStatus) => {
    fetch('http://localhost:3001/books/${bookId}', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body:JSON.stringify({status:newStatus})
      
    })
      .then(response => response.json())
      .then(updatedBook => {
        setBooks(prevBooks => 
          prevBooks.map(book => 
            book.id === bookId ? updatedBook : book
          )
        );
      })
      .catch(error => console.error('Error updating book:', error));
  };

  return (
    <div className="app-container">
      <Header onAddNewBookClick={() => setIsFormVisible(true)} />
      <main>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm}
        />
        <BookList
          books={filteredBooks}
          onStatusUpdate={onStatusUpdate}
        />
        {isFormVisible && (
        <AddBookForm
          onAddBook={handleAddBook}
          onCloseForm={() => setIsFormVisible(false)}
        />
      )}
      </main>
    </div>
  );
}

export default App;