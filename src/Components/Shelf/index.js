import React, { Component } from 'react'
import Book from '../Book'

class Shelf extends Component {

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.shelfData.name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.books.map((book) => {
                            return <Book bookData={book} />
                        })}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf