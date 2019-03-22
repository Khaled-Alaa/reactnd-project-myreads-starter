import React, { Component } from 'react'
import BookAction from '../BookAction'

class Book extends Component {
    getShelf(shelfName) {
        this.props.getBooKAndShelf(this.props.bookData, shelfName)
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover"
                            style={{
                                width: 128, height: 193,
                                backgroundImage: `${this.props.bookData.imageLinks.thumbnail}`
                            }}></div>
                        <BookAction bookData={this.props.bookData}
                            getShelf={this.getShelf.bind(this)}
                        />
                    </div>
                    <div className="book-title">{this.props.bookData.title}</div>
                    <div className="book-authors">{this.props.bookData.authors}</div>
                </div>
            </li>
        )
    }
}

export default Book