import React, { Component } from 'react';
import Book from './books';

class Shelf extends Component {
  render(){
    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.props.filterBooks.map(book =>
                <li key={book.id}>
                  <Book book={book} changeShelf={this.props.changeShelf} currentShelf={this.props.currentShelf}/>
                </li>
              )
            }
          </ol>
        </div>
      </div>
      );
  }
}

export default Shelf
