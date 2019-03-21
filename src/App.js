import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import SearchPage from './containers/SearchPage';

class BooksApp extends React.Component {
  /*
 books: [{name:'',author:'',shelfId:0,Image:'',rank:0}, 
 {name:'',author:'',shelfId:0,Image:'',rank:0}]
 */
  state = {
    books: []
  }
  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
          <Home books={this.state.books} />
        )} />
        <Route path='/search' render={() => (
          <SearchPage books={this.state.books} />)} />
      </div>
    )
  }
}

export default BooksApp
