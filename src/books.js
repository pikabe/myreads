import React, { Component } from 'react';
import SelectShelf from './selectShelf';

class Books extends Component {
  checkthumbnail = (link) => {
    if (link !== undefined) {
      return link.thumbnail
    } else {
      return ""
    }
  }
  checkAuthors = (authors) => {
    if (authors !== undefined) {
      return authors
    } else {
      return "Author/s unknown"
    }
  }

  render(){
    let thumbnail = this.checkthumbnail(this.props.book.imageLinks);
    let authors = this.checkAuthors(this.props.book.authors);
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url('${thumbnail}')` }}></div>
          <div className="book-shelf-changer">
            <SelectShelf currentShelf={this.props.currentShelf} book={this.props.book} changeShelf={this.props.changeShelf}/>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default Books;
