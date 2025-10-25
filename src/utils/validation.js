// src/utils/validation.js
export const isNonEmptyString = (value) => {
    return typeof value === 'string' && value.trim() !== '';
};
export const validateBook = (book) => {
  const errors = {};
  if (!isNonEmptyString(book.title)) {
    errors.title = 'Title is required';    
  }
  return errors;
};
