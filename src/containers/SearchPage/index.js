import React, { Component } from 'react'
import Search from '../../Components/Search'

class SearchPage extends Component {
    render() {
        return (
            <div>
                <div>
                    <Search booksData={this.props.books} />
                </div>
                <div>
                </div>
            </div >
        )
    }
}

export default SearchPage