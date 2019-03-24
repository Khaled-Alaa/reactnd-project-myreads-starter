import React, { Component } from 'react'
import Shelf from '../../Components/Shelf'
import AddBook from '../../Components/AddBook'


class Home extends Component {

    getBook(book, shelfName) {
        this.props.updateShelf(book, shelfName)
    }

    render() {
        return (
            <div className="app">
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MyReads</h1>
                    </div>
                    <div className="list-books-content">
                        <div>{
                            this.props.shelfData.map((shelf, index) => {
                                return <Shelf
                                    key={index}
                                    getBook={this.getBook.bind(this)}
                                    shelfData={shelf}
                                    books={this.props.books
                                        .filter((book) => {
                                            return book.shelf === shelf.name
                                        })} />
                            })
                        }
                        </div>
                    </div>
                </div>
                <AddBook />
            </div>
        )
    }
}

export default Home
