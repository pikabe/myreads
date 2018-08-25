import React from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import PageMain from './pageMain.js';
import PageSearch from './pageSearch.js';
import {Route} from 'react-router-dom';


class BooksApp extends React.Component {
    state = {
      books: []
    }
    updateBookList = () => {
      BooksAPI.getAll().then((books) => {
        this.setState({
          books
        });
      });
    }
    componentDidMount() {
      this.updateBookList();
    }
    filterBooks(list, condition) {
      return (list.filter(book => book.shelf === condition))
    }
    changeShelf = (book, shelf) => {
      BooksAPI.update(book, shelf);
      this.updateBookList();
      this.updateBookList();
    }
    render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <PageMain
            listBooks={this.state.books}
            read = {this.filterBooks(this.state.books,'read')}
            wantToRead={this.filterBooks(this.state.books,'wantToRead')}
            currentlyReading={this.filterBooks(this.state.books,'currentlyReading')}
            changeShelf={this.changeShelf}
          />
        )}/>

        <Route path='/SearchPage' render={() => (
          <PageSearch listBooks={this.state.books} changeShelf={this.changeShelf}/>
        )}/>
      </div>
    )
  }
  }

export default BooksApp
