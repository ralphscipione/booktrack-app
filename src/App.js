import React, { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import './components.css';
import Header from './components/Header';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Fetch books from an API or local storage
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main>
        <BookList books={books} />
      </main>

    </div>
  );
}

export default App;