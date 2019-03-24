import React, { Component } from 'react'
import Book from '../Book'

class Shelf extends Component {
    getBooKAndShelf(book, shelfName) {
        this.props.getBook(book, shelfName)
    }
    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfData.displayName}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            return <Book key={book.id} bookData={book} getBooKAndShelf={this.getBooKAndShelf.bind(this)} />
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf