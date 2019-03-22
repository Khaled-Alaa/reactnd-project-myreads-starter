import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home'
import SearchPage from './containers/SearchPage';

class BooksApp extends React.Component {
  /*
 books: [{title:'',author:'',shelfName:'',Image:'',rank:0}, 
 {name:'',author:'',shelfId:0,Image:'',rank:0}]
 */
  state = {
    books: []
  }
  
  shelfData = [{ displayName: 'Currently Reading', name: 'currentlyReading' }, { displayName: 'Want to Read', name: 'wantToRead' }, { displayName: 'Read', name: 'read' }]

  componentDidMount() {
    BooksAPI.getAll().then((resp) => {
      this.setState({ books: resp })
    })
  }

  //PUT /books/:id { shelf }

  updateShelf(book, shelfName) {
    BooksAPI.update(book, shelfName);
    this.updateShelfWithBook(book, shelfName);
  }

  changeshelf(bookId, newShelf) {
    let books = this.state.books
    var booksArr = [...books]
    for (var i in booksArr) {
      if (booksArr[i].id === bookId) {
        booksArr[i].shelf = newShelf;
        break; //Stop this loop, we found it!
      }
    }
    this.setState({ books: booksArr })
  }

  updateShelfWithBook(book, shelfName) {
    var existBook = this.state.books.find((element) => {
      return element.id === book.id
    })

    if (existBook) {
      this.changeshelf(book.id, shelfName)
    } else {
      debugger;
      var arr = [...this.state.books]
      arr.push(book)
      this.setState({ books: arr })
    }
  }

  render() {
    return (
      <Switch>
        <Route exact path='/' render={(props) => (
          <Home {...props} books={this.state.books} shelfData={this.shelfData} updateShelf={this.updateShelf.bind(this)} />
        )} />
        <Route path='/search' render={(props) => (
          <SearchPage {...props} books={this.state.books}
            updateShelf={this.updateShelf.bind(this)} s />)} />
      </Switch>
    )
  }
}

export default BooksApp
