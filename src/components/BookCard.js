import React from 'react';
import ProgressBar from './ProgressBar';
import PropTypes from 'prop-types';

function BookCard({ book }) {
    return (
        <div className="book-card">
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Year: {book.year}</p>
            <p>Genre: {book.genre}</p>
            <div classNam="book-card-status">
                Status: <span>{book.status}</span>
            </div>
            <ProgressBar progress={book.progress} totalPages={book.totalPages} />
        </div>
    );
}

BookCard.propTypes = {
    book: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        genre: PropTypes.string.isRequired,
        status: PropTypes.string.isRequired,
        progress: PropTypes.number.isRequired,
        totalPages: PropTypes.number.isRequired,
    }).isRequired,
};

export default BookCard;