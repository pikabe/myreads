import React, {Component} from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './books';
import {Link} from 'react-router-dom';

class PageSearch extends Component {
  state = {
    query: '',
    searchResults: []
  }

  updateQuery = (query) => {
    this.setState({
      query: query
    })
    BooksAPI.search(query).then((searchResults) => {
      if (query.length>0) {//checks if searchResults has stored any books
        this.setState({
          searchResults
        })}
       else {
        this.setState({
          searchResults: []
        })
      }
    })

  }



  checkMatch = (shelfBooks, searchResults) => {
    if (this.state.searchResults.constructor === Array){ //checks if Array exists
      let synchronisedResults = [];
      searchResults.forEach((bookResult) => {
        // loops through books returned from the search
        shelfBooks.forEach((shelfBook) => {
        // compares each of the books from the search to each of the books on the shelf and see if they match
          if ((bookResult.id === shelfBook.id)) {
            bookResult.shelf = shelfBook.shelf;
            synchronisedResults.push(bookResult);
          } else {
            if (synchronisedResults.indexOf(bookResult) === -1) {
              /*This checks if the book from the results has already been matched meaning it would have been added to synchronisedResults
              and assigned to a shelf. If book hasn't been matched, it's shelf is set to 'none'*/
              bookResult.shelf = 'none';
            }
          }
        });
      });
      return synchronisedResults
    }

  }
  render(){
    this.checkMatch(this.props.listBooks,this.state.searchResults)
    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">{
            (this.state.searchResults.constructor === Array) ?
                this.state.searchResults.map(book =>
            <li key={book.id}>
              <Book book={book} changeShelf={this.props.changeShelf} currentShelf={book.shelf}/>
            </li>
            ):null
          }
          </ol>
        </div>
      </div>
    );
  }
}

export default PageSearch;
