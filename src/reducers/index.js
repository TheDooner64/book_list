import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBookReducer from './reducer_active_book'

// This reducer adds the keys to our global application state
const rootReducer = combineReducers({
  'books': BooksReducer,
  'activeBook': ActiveBookReducer
});

export default rootReducer;
