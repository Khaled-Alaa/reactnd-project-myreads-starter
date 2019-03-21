import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from '../Book'
import * as BooksAPI from '../../BooksAPI'

class Search extends Component {

  state = {
    query: '',
    books :[]
  }

  updateQuery = (query) => {
    this.setState({query: query})

    BooksAPI.search(query).then((response) => {
      debugger;
      var booksArr = Array.isArray(response) ? response : []
      this.setState({books : booksArr})
    })
  }

  clearQuery = () => {
    this.updateQuery('')
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
            {
              //handle empty states
              this.state.books.map((book)=>{
                  return <li><Book bookData={book}/></li>
              })
            }
          </ol>
        </div>
      </div>
    )
  }
}

export default Search