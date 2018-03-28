export function selectBook(book) {
  // selectBook is an action creator that returns an action
  // An action is an object with a "type" property
  return {
    'type': 'BOOK_SELECTED',
    'payload': book
  };
}
