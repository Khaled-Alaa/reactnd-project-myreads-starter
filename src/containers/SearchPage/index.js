import React, { Component } from 'react'
import Search from '../../Components/Search'

class SearchPage extends Component {

    getBook(book, shelfName) {
        this.props.updateShelf(book, shelfName)
    }
    render() {
        return (
            <div>
                <div>
                    <Search booksData={this.props.books}
                        getBook={this.getBook.bind(this)}
                    />
                </div>
            </div >
        )
    }
}

export default SearchPage