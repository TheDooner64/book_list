import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

// A container is a "smart" component that has a direct connection to the application's state, which is managed by redux
// BookList should be a container because it cares when the state of "books" changes
class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          key={book.title}
          className="list-group-item"
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

// This is the glue between react and redux
// This function's return value will end up as props in BookList
function mapStateToProps(state) {
  return {
    'books': state.books
  };
}

// Anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
  // Whenever selectBook is called, the result should be passed to all of our reducers
  // When we use this selectBook prop, it will call our action creator
  return bindActionCreators({ 'selectBook': selectBook }, dispatch);
}

// connect takes a function and a component and produces a container
// If our state ever changes, this container will re-render with the updated state
// When we use actions, BookList needs to know about the dispatch method and make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);

// Before we implemented actions, we were using "connect" like this
// export default connect(mapStateToProps)(BookList);
