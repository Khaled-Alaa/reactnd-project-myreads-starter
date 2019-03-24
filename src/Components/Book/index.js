import React from 'react'
import BookAction from '../BookAction'

function Book(props) {
    const getShelf = function (shelfName) {
        props.getBooKAndShelf(props.bookData, shelfName)
    }
    return (
        <li>
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                        style={{
                            width: 128, height: 193,
                            backgroundImage: `url(${props.bookData.imageLinks && (props.bookData.imageLinks.smallThumbnail || props.bookData.imageLinks.thumbnail)})`
                        }}></div>
                    <BookAction bookData={props.bookData}
                        getShelf={getShelf}
                    />
                </div>
                <div className="book-title">{props.bookData.title}</div>
                <div className="book-authors">{props.bookData.authors}</div>
            </div>
        </li>
    )
}

export default Book