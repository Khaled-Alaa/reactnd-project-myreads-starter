import React from 'react'
import Search from '../../Components/Search'

function SearchPage(props) {

    const getBook = function (book, shelfName) {
        props.updateShelf(book, shelfName)
    }
    return (
        <div>
            <div>
                <Search key = {props.books.id} booksData={props.books}
                    getBook={getBook}
                />
            </div>
        </div >
    )
}

export default SearchPage