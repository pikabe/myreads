import React, { Component } from 'react';
import Shelf from './shelf';
import {Link} from 'react-router-dom';


class PageMain extends Component {

  render() {
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf filterBooks={this.props.currentlyReading} title='Currently Reading' changeShelf={this.props.changeShelf} currentShelf="currentlyReading"/>
            <Shelf filterBooks={this.props.wantToRead} title='Want to Read' changeShelf={this.props.changeShelf} currentShelf="wantToRead"/>
            <Shelf filterBooks={this.props.read} title='Read' changeShelf={this.props.changeShelf} currentShelf="read"/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/SearchPage">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default PageMain;
