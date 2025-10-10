import React, { useState, useEffect} from 'react';
import './App.css';
import BookList from './components/BookList';

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
    <div className="App">
      <h1>BookTrack</h1>
      <BookList books={books} />
    </div>
  );
}

export default App;