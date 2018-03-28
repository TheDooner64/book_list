import React, { Component } from 'react'
import { connect } from 'react-redux'

class BookDetail extends Component {
  render() {
    // Our application state is different from our component state
    // If we wanted, we could still use setState here to manipulate our component state

    // Handle the default null value
    if (!this.props.book) {
      return (
        <div>Select a book to get started!</div>
      );
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>
          Title: {this.props.book.title}
        </div>
        <div>
          Pages: {this.props.book.pages}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    'book': state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
