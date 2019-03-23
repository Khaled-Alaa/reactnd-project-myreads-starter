import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book'
import * as BooksAPI from '../../BooksAPI'

class Search extends Component {

  state = {
    query: '',
    books: [],
    isLoading: false
  }

  updateQuery = (query) => {
    this.setState({
      query: query.trim(),
      isLoading: true
    })

    BooksAPI.search(query).then((response) => {
      var booksArr = Array.isArray(response) ? response : []

      for (let i = 0; i < booksArr.length; i++) {
        const bookItem = booksArr[i];
        const existBook = this.props.booksData.find((element) => {
          return element.id === bookItem.id
        })
        if (existBook) {
          bookItem.shelf = existBook.shelf
        }
      }


      this.setState({
        books: booksArr,
        isLoading: false
      })
    })
  }

  clearQuery = () => {
    this.updateQuery('')
  }

  getBooKAndShelf(book, shelfName) {
    this.props.getBook(book, shelfName)
  }

  _renderItem() {
    const { isLoading, books,query } = this.state;

    if (isLoading == false && books.length === 0 && query.length ===0) {
      return <li>{'Please Write Something'}</li>;
    }

    if (isLoading) {
      return <li>{'Loading...'}</li>
    }

    if (isLoading == false && books.length === 0) {
      return <li>{'No Books Found'}</li>;
    }

    return books.map((book) => {
      return <li><Book bookData={book}
        getBooKAndShelf={this.getBooKAndShelf.bind(this)}
      /></li>
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this._renderItem()}
          </ol>
        </div>
      </div>

    )
  }
}


export default Search